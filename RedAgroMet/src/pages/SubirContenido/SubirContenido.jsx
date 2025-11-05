import React, { useState } from 'react';
import { InputSelect } from '../../components/Inputs/InputSelect/InputSelect';
import { InputTextoLibre } from '../../components/Inputs/InputText/InputText';
import { SubtitlePrincipal } from '../../components/Titles/SubtitlePrincipal/SubtitlePrincipal';
import { uploadContent } from '../../services/ConfigurarUsuario/subirContenido.js';
import { contentTypesOptions, informeOptions, pronosticoTipoOptions, diarioTipoOptions, perspectivaTipoOptions, trimestralSourceOptions, ensoTypeOptions } from '../../constants/listaSubirContenido';
import './SubirContenido.css'; 

export function SubirContenido() {
    // Estados principales
    const [contentType, setContentType] = useState('informe'); 
    const [formData, setFormData] = useState({});
    const [selectedFile, setSelectedFile] = useState(null); 
    
    // Estados para feedback
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false); 

    // Estados para manejar los selectores anidados
    const [pronosticoTipo, setPronosticoTipo] = useState(''); 
    const [diarioTipo, setDiarioTipo] = useState(''); 
    const [perspectivaTipo, setPerspectivaTipo] = useState(''); 
    const [trimestralSource, setTrimestralSource] = useState(''); 
    const [ensoType, setEnsoType] = useState(''); 
    
    const colorPrincipal = "#7ca816ff";
    
    const resetFormStates = () => {
        setFormData({});
        setSelectedFile(null); 
        setPronosticoTipo('');
        setDiarioTipo('');
        setPerspectivaTipo('');
        setTrimestralSource('');
        setEnsoType('');
        setMessage('');
        setIsError(false);
    }
    
    const handleContentTypeChange = (e) => {
        const newContentType = e.target.value;
        setContentType(newContentType);
        // Resetear todos los estados al cambiar el tipo principal
        resetFormStates();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        // Resetear el input file si no se selecciona nada
        setSelectedFile(e.target.files ? e.target.files[0] : null); 
    };
    
    const handleNestedSelectChange = (setter) => (e) => {
        setter(e.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(`Subiendo ${contentType}...`);
        setIsError(false);
        
        // Compila todos los datos necesarios para el servicio
        const finalData = { 
            ...formData, 
            contentType, 
            file: selectedFile,
            // Incluir todos los estados anidados, el servicio se encarga de filtrar los vacíos
            pronosticoTipo, 
            diarioTipo, 
            perspectivaTipo, 
            trimestralSource, 
            ensoType,
        };

        try {
            await uploadContent(finalData); 
            
            setMessage(`¡${contentType.charAt(0).toUpperCase() + contentType.slice(1)} subido con éxito!`);
            setIsError(false);
            resetFormStates(); 
            e.target.reset(); 
            
        } catch (error) {
            setMessage(`Error al subir contenido: ${error.message}`);
            setIsError(true);
            console.error('Error de subida:', error);
        }
    };
    
    const renderContentForm = () => {
        switch (contentType) {
            case 'informe':
                return (
                    <>
                        <InputSelect
                            text="Frecuencia del Informe"
                            name="informeTipo"
                            value={formData.informeTipo || ''}
                            handleChange={handleChange}
                            listaDeOpciones={informeOptions}
                            color={colorPrincipal}
                        />
                        <InputTextoLibre 
                            text="Archivo PDF" 
                            name="informeFile" 
                            type="file" 
                            handleChange={handleFileChange} 
                            color={colorPrincipal} 
                        />
                    </>
                );

            case 'pronostico':
                return (
                    <>
                        <InputTextoLibre 
                            text="Archivo PDF del Pronóstico" 
                            name="pronosticoFile" 
                            type="file" 
                            handleChange={handleFileChange} 
                            color={colorPrincipal} 
                        />

                        <InputSelect
                            text="Tipo de Pronóstico"
                            name="pronosticoTipo"
                            value={pronosticoTipo}
                            handleChange={handleNestedSelectChange(setPronosticoTipo)}
                            listaDeOpciones={pronosticoTipoOptions}
                            color={colorPrincipal}
                        />

                        {pronosticoTipo === 'diario' && (
                            <InputSelect
                                text="Variable Diaria"
                                name="diarioTipo"
                                value={diarioTipo}
                                handleChange={handleNestedSelectChange(setDiarioTipo)}
                                listaDeOpciones={diarioTipoOptions}
                                color={colorPrincipal}
                            />
                        )}

                        {pronosticoTipo === 'perspectiva' && (
                            <>
                                <InputSelect
                                    text="Perspectiva"
                                    name="perspectivaTipo"
                                    value={perspectivaTipo}
                                    handleChange={handleNestedSelectChange(setPerspectivaTipo)}
                                    listaDeOpciones={perspectivaTipoOptions}
                                    color={colorPrincipal}
                                />
                                
                                {perspectivaTipo === 'trimestral' && (
                                    <InputSelect
                                        text="Fuente Trimestral"
                                        name="trimestralSource"
                                        value={trimestralSource}
                                        handleChange={handleNestedSelectChange(setTrimestralSource)}
                                        listaDeOpciones={trimestralSourceOptions}
                                        color={colorPrincipal}
                                    />
                                )}
                                
                                {perspectivaTipo === 'enso' && (
                                    <InputSelect
                                        text="Tipo de ENSO"
                                        name="ensoType"
                                        value={ensoType}
                                        handleChange={handleNestedSelectChange(setEnsoType)}
                                        listaDeOpciones={ensoTypeOptions}
                                        color={colorPrincipal}
                                    />
                                )}
                            </>
                        )}
                        
                        <InputTextoLibre text="Título del Pronóstico" name="title" type="text" value={formData.title || ''} handleChange={handleChange} placeholder="Título" color={colorPrincipal} />
                    </>
                );

            case 'educacion':
                return (
                    <>
                        <InputTextoLibre text="Título del Video/Material" name="title" type="text" value={formData.title || ''} handleChange={handleChange} placeholder="Título" color={colorPrincipal} />
                        <InputTextoLibre text="Link a Video" name="videoUrl" type="url" value={formData.videoUrl || ''} handleChange={handleChange} placeholder="https://www.youtube.com/watch?v=..." color={colorPrincipal} />
                    </>
                );
            default:
                return <p>Selecciona un tipo de contenido para comenzar.</p>;
        }
    };
    
    return (
        <div className='subir-contenido-container'>
            <SubtitlePrincipal text="Subir nuevo contenido" color={colorPrincipal}/>
            <form onSubmit={handleSubmit} className='form-subir-contenido'>
                
                <InputSelect
                    text="Tipo de Contenido Principal"
                    name="contentType"
                    value={contentType}
                    handleChange={handleContentTypeChange}
                    listaDeOpciones={contentTypesOptions}
                    color={colorPrincipal}
                />
                
                <div className='dynamic-fields-container'>
                    {renderContentForm()}
                </div>

                <button type="submit" className="submit-button">
                    Subir Contenido
                </button>
            </form>
            {message && (
                <p className={`message-feedback ${isError ? 'message-error' : 'message-success'}`}>
                    {message}
                </p>
            )}
        </div>
    );
}