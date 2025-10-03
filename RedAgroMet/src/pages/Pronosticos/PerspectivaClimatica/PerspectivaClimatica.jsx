import React, { useState, useMemo } from 'react';
import { InputSelect } from '../../../components/Inputs/InputSelect/InputSelect';
import { ButtonDownloads } from '../../../components/Buttons/ButtonDownloads/ButtonDownloads';
import { OPCIONES_PRINCIPALES, OPCIONES_SECUNDARIAS, URL_BASE_PERSPECTIVA } from '../../../mock/pronosticos/perspectivaClimaticaMockeo';


export function PerspectivaClimatica() {

    const initialPrincipal = OPCIONES_PRINCIPALES.length > 0 ? OPCIONES_PRINCIPALES[0].id : '';
    const initialSecundarias = OPCIONES_SECUNDARIAS[initialPrincipal] || [];

    const [principal, setPrincipal] = useState(initialPrincipal);

    const [secundario, setSecundario] = useState(
        initialSecundarias.length > 0 ? initialSecundarias[0].id : ''
    );
    const opcionesSecundariasDisponibles = useMemo(() => {
        return OPCIONES_SECUNDARIAS[principal] || [];
    }, [principal]);
    const { imageUrl, downloadFileName } = useMemo(() => {
        if (!principal || !secundario) {
            return { imageUrl: null, downloadFileName: null };
        }
        const opcionSeleccionada = opcionesSecundariasDisponibles.find(o => o.id === secundario);

        if (opcionSeleccionada && opcionSeleccionada.file_path) {
            const url = `${URL_BASE_PERSPECTIVA}${opcionSeleccionada.file_path}`;
            const parts = opcionSeleccionada.file_path.split('/');
            const fileName = parts[parts.length - 1];

            return { imageUrl: url, downloadFileName: fileName };
        }
        
        return { imageUrl: null, downloadFileName: null };
    }, [principal, secundario, opcionesSecundariasDisponibles]);


    const handlePrincipalChange = (event) => {
        const nuevoPrincipal = event.target.value;
        setPrincipal(nuevoPrincipal);
        
        const nuevasOpciones = OPCIONES_SECUNDARIAS[nuevoPrincipal] || [];
        setSecundario(nuevasOpciones.length > 0 ? nuevasOpciones[0].id : '');
    };

    const handleSecundarioChange = (event) => {
        setSecundario(event.target.value);
    };

    const getImageWidth = () => {
        return window.innerWidth > 1024 ? '600px' : '70%';
    };

    const nombrePrincipal = OPCIONES_PRINCIPALES.find(o => o.id === principal)?.descripcion || '';
    const nombreSecundario = opcionesSecundariasDisponibles.find(o => o.id === secundario)?.descripcion || '';

    return (
        <div className="perspectiva-content-container pronosticos-content-container">
            
            <div className="filtros-descarga-wrapper">
                
                <div className="select-wrapper relative z-50"> 
                    <InputSelect 
                        text="Nivel Principal"
                        color="#E7B961" 
                        name="principal"
                        value={principal}
                        handleChange={handlePrincipalChange}
                        listaDeOpciones={OPCIONES_PRINCIPALES} 
                    />
                </div>
                
                {opcionesSecundariasDisponibles.length > 0 && (
                    <div className="select-wrapper relative z-40"> 
                        <InputSelect 
                            text={`${nombrePrincipal} - Opciones`}
                            color="#E7B961" 
                            name="secundario"
                            value={secundario}
                            handleChange={handleSecundarioChange}
                            listaDeOpciones={opcionesSecundariasDisponibles} 
                        />
                    </div>
                )}

                {/* Botón de Descarga */}
                {imageUrl && (
                    <ButtonDownloads 
                        downloadUrl={imageUrl} 
                        downloadName={downloadFileName} 
                        tipoInforme={`${principal}_${secundario}`}
                        backgroundColor="#E7B961"
                    />
                )}
            </div>
            
            <div className="content-container-perspectiva content-container-pronostico-diario">
                
                {nombrePrincipal && nombreSecundario && (
                    <h3 className="titulo-perspectiva">
                        {`Perspectiva Climática: ${nombrePrincipal} / ${nombreSecundario}`}
                    </h3>
                )}
                
                {/* Contenedor de la imagen */}
                <div> 
                    {imageUrl ? (
                        <img 
                            src={imageUrl} 
                            alt={`Perspectiva Climática ${nombrePrincipal} ${nombreSecundario}`}
                            style={{ maxWidth: getImageWidth(), height: 'auto' }}
                            className="perspectiva-imagen pronostico-imagen shadow-xl rounded-lg border border-gray-300"
                            onError={(e) => { 
                            e.target.onerror = null; 
                            e.target.src = "/placeholder-error.png"; 
                            console.warn(`Archivo de perspectiva climática no encontrado: ${imageUrl}`);
                            }}
                        />
                    ) : (
                        <div className="imagen-viewer-placeholder p-8 bg-gray-100 rounded-lg text-center text-gray-600 border border-gray-300 w-full max-w-lg">
                            <p className="font-semibold">
                                Seleccione las opciones de perspectiva climática.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}