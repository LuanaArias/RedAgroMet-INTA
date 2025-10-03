import { InputSelect } from "../../../components/Inputs/InputSelect/InputSelect";
import React, { useState, useMemo } from 'react';
import { ButtonDownloads } from '../../../components/Buttons/ButtonDownloads/ButtonDownloads.jsx';
import { TIPOS_INDICADOR, OPCIONES_FECHAS, URL_BASE_PRONOSTICOS } from '../../../mock/pronosticos/pronosticosMockeo.js';
import './PronosticoDiario.css'

export function PronosticoDiario() {
    const fechaFija = OPCIONES_FECHAS.length > 0 ? OPCIONES_FECHAS[0] : null;

    const [indicadorPrincipal, setIndicadorPrincipal] = useState(
        TIPOS_INDICADOR.length > 0 ? TIPOS_INDICADOR[0].id : ''
    );

    const fechaSeleccionadaId = fechaFija ? fechaFija.id : '';
    const nombreFechaSeleccionada = fechaFija ? fechaFija.nombre : 'Fecha Desconocida';


    const { imageUrl, downloadFileName } = useMemo(() => {
        if (!indicadorPrincipal || !fechaSeleccionadaId) {
            return { imageUrl: null, downloadFileName: null };
        }
        
        const fileName = `${fechaSeleccionadaId}_${indicadorPrincipal}.jpg`;
        const url = `${URL_BASE_PRONOSTICOS}${fileName}`;
        
        return { imageUrl: url, downloadFileName: fileName };
    }, [indicadorPrincipal, fechaSeleccionadaId]); 


    const handleIndicadorChange = (event) => {
        setIndicadorPrincipal(event.target.value);
    };


    const getImageWidth = () => {
        return window.innerWidth > 1024 ? '800px' : '90%';
    };

    const nombreIndicadorSeleccionado = TIPOS_INDICADOR.find(t => t.id === indicadorPrincipal)?.descripcion || 'Pronóstico';

    return (
        <div className="pronosticos-content-container">
            
            <div className="filtros-descarga-wrapper">
                
                <div className="select-wrapper relative z-50"> 
                    <InputSelect 
                        text="Seleccionar Indicador"
                        color="#E7B961" 
                        name="indicadorPrincipal"
                        value={indicadorPrincipal}
                        handleChange={handleIndicadorChange}
                        listaDeOpciones={TIPOS_INDICADOR} 
                    />
                </div>

                {imageUrl && (
                    <ButtonDownloads 
                        downloadUrl={imageUrl} 
                        downloadName={downloadFileName} 
                        tipoInforme={indicadorPrincipal} 
                        informeSeleccionado={fechaSeleccionadaId} 
                        backgroundColor="#E7B961"
                    />
                )}
            </div>
            <div className="content-container-pronostico-diario">
                {nombreIndicadorSeleccionado && (
                 <h3>
                     {nombreIndicadorSeleccionado} para el período: {nombreFechaSeleccionada}
                 </h3>
                )}
            
                <div> 
                    {imageUrl ? (
                    
                        <img 
                            src={imageUrl} 
                            alt={`Pronóstico de ${nombreIndicadorSeleccionado} para la fecha ${nombreFechaSeleccionada}`}
                            style={{ maxWidth: getImageWidth(), height: 'auto' }}
                            className="pronostico-imagen shadow-xl rounded-lg border border-gray-300"
                            onError={(e) => { 
                                e.target.onerror = null; 
                                e.target.src = "/placeholder-error.png"; 
                                console.warn(`Archivo de pronóstico no encontrado: ${imageUrl}`);
                            }}
                        />
                    
                        ) : (
                        <div className="imagen-viewer-placeholder p-8 bg-gray-100 rounded-lg text-center text-gray-600 border border-gray-300 w-full max-w-lg">
                            <p className="font-semibold">Seleccione un indicador para ver el pronóstico.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}