import React, { useState } from 'react';
import { InputSelect } from '../../components/Inputs/InputSelect/InputSelect';
import { InputTextoLibre } from '../../components/Inputs/InputText/InputText';
import { SubtitlePrincipal } from '../../components/Titles/SubtitlePrincipal/SubtitlePrincipal';
import { contentTypesOptions, informeOptions, pronosticoTipoOptions, diarioTipoOptions, perspectivaTipoOptions, trimestralSourceOptions, ensoTypeOptions } from '../../constants/listaSubirContenido';
import './SubirContenido.css'; 

export function SubirContenido() {
    // Estados principales
    const [contentType, setContentType] = useState('informe'); 
    const [formData, setFormData] = useState({});
    const [selectedFile, setSelectedFile] = useState(null); 
    const [message, setMessage] = useState('');

    //  Estados para manejar los selectores anidados
    const [pronosticoTipo, setPronosticoTipo] = useState(''); 
    const [diarioTipo, setDiarioTipo] = useState(''); 
    const [perspectivaTipo, setPerspectivaTipo] = useState(''); 
    const [trimestralSource, setTrimestralSource] = useState(''); 
    const [ensoType, setEnsoType] = useState(''); 
    
    const colorPrincipal = "#7ca816ff";
    
    const handleContentTypeChange = (e) => {
        const newContentType = e.target.value;
        setContentType(newContentType);
        setFormData({});
        setSelectedFile(null); 
        setPronosticoTipo('');
        setDiarioTipo('');
        setPerspectivaTipo('');
        setTrimestralSource('');
        setEnsoType('');
        setMessage('');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    
    const handleNestedSelectChange = (setter) => (e) => {
        setter(e.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(`Subiendo ${contentType}...`);
        
        const finalData = { 
            ...formData, 
            contentType, 
            file: selectedFile,
            ...(contentType === 'informe' && { informeTipo: formData.informeTipo }),
            ...(contentType === 'pronostico' && { 
                pronosticoTipo, 
                diarioTipo, 
                perspectivaTipo, 
                trimestralSource, 
                ensoType 
            })
        };
        
        console.log("Datos a enviar:", finalData); 

        setTimeout(() => {
            setMessage(`¡${contentType.charAt(0).toUpperCase() + contentType.slice(1)} subido con éxito! (Simulación)`);
        }, 1000);
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
            
            <form onSubmit={handleSubmit} className='form-subir-contenido' encType={contentType === 'informe' || contentType === 'pronostico' ? 'multipart/form-data' : 'application/json'}>
                
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

            {message && <p>{message}</p>}
        </div>
    );
}