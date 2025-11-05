import React, { useState } from 'react';
import { InputSelect } from '../../components/Inputs/InputSelect/InputSelect';
import { InputTextoLibre } from '../../components/Inputs/InputText/InputText';
import { SubtitlePrincipal } from '../../components/Titles/SubtitlePrincipal/SubtitlePrincipal';
import { createNewUser } from '../../services/ConfigurarUsuario/crearUsuario';
import './CrearUsuario.css'

export function CrearUsuario() {
    const [formData, setFormData] = useState({
        user: '',
        password: '',
        role: 'user' 
    });
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false); 
    const rolesOptions = [
        { id: 'user', descripcion: 'Usuario Estándar' },
        { id: 'admin', descripcion: 'Administrador' }
    ];

    const colorPrincipal = "#7ca816ff";

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Creando usuario...');
        setIsError(false);

        try {
            await createNewUser(formData);
            setMessage(`Usuario ${formData.username} creado con éxito.`);
            setIsError(false);
            // Limpiar formulario
            setFormData({ username: '', email: '', password: '', role: 'user' });
        } catch (error) {
            setMessage(`Error al crear usuario: ${error.message}`);
            setIsError(true);
            console.error('Error al enviar la petición:', error);
        }
    };

    return (
        <div className='section-crear-usuario-container'>
            <SubtitlePrincipal text="Crear Usuario" color={colorPrincipal}/>
            <form onSubmit={handleSubmit} className='form-container-administrador-crear-usuario'>
                
                {/* Nombre de Usuario */}
                <InputTextoLibre
                    text="Nombre de Usuario"
                    name="user"
                    type="text"
                    value={formData.username}
                    handleChange={handleChange}
                    placeholder="ej. nombre.apellido"
                    color={colorPrincipal}
                />
                
                {/* Contraseña */}
                <InputTextoLibre
                    text="Contraseña"
                    name="password"
                    type="password"
                    value={formData.password}
                    handleChange={handleChange}
                    placeholder="Mínimo 8 caracteres"
                    color={colorPrincipal}
                />

                {/* Rol */}
                <InputSelect
                    text="Rol del Usuario"
                    name="role"
                    value={formData.role}
                    handleChange={handleChange}
                    listaDeOpciones={rolesOptions}
                    color={colorPrincipal}
                />

                <button 
                    type="submit" 
                    className="submit-button-crear-usuario" 
                >
                    Registrar Usuario
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