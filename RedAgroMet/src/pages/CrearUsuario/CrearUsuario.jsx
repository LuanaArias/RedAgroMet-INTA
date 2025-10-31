import React, { useState } from 'react';
import { InputSelect } from '../../components/Inputs/InputSelect/InputSelect';
import { InputTextoLibre } from '../../components/Inputs/InputText/InputText';
import { SubtitlePrincipal } from '../../components/Titles/SubtitlePrincipal/SubtitlePrincipal';
import './CrearUsuario.css'
export function CrearUsuario() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user' 
    });
    const [message, setMessage] = useState('');

    // Opciones para el InputSelect de Rol
    const rolesOptions = [
        { id: 'user', descripcion: 'Usuario Estándar' },
        { id: 'admin', descripcion: 'Administrador' }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('Creando usuario...');
        // url de api para crear usuario
        const API_URL = 'https://...'; 
        const authToken = localStorage.getItem('authToken'); 

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`, 
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(`Usuario ${formData.username} creado con éxito.`);
                setFormData({ username: '', email: '', password: '', role: 'user' });
            } else {
                setMessage(`Error al crear usuario: ${data.message || response.statusText}`);
            }
        } catch (error) {
            setMessage('Error de conexión con el servidor.');
            console.error('Error al enviar la petición:', error);
        }
    };

    return (
        <div>
            <SubtitlePrincipal text="Crear Usuario" color="#7ca816ff"/>
            <form onSubmit={handleSubmit} className='form-container-administrador-crear-usuario'>
                
                {/* Nombre de Usuario */}
                <InputTextoLibre
                    text="Nombre de Usuario"
                    name="username"
                    type="text"
                    value={formData.username}
                    handleChange={handleChange}
                    placeholder="ej. nombre.apellido"
                    color="#7ca816ff"
                />
                
                {/* Contraseña */}
                <InputTextoLibre
                    text="Contraseña"
                    name="password"
                    type="password"
                    value={formData.password}
                    handleChange={handleChange}
                    placeholder="Mínimo 8 caracteres"
                    color="#7ca816ff"
                />

                {/* Rol */}
                <InputSelect
                    text="Rol del Usuario"
                    name="role"
                    value={formData.role}
                    handleChange={handleChange}
                    listaDeOpciones={rolesOptions}
                    color="#7ca816ff"
                />

                <button 
                    type="submit" 
                    style={{ 
                        padding: '10px 20px', 
                        backgroundColor: '#7ca816ff', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: 'pointer',
                        marginTop: '20px' 
                    }}
                >
                    Registrar Usuario
                </button>
            </form>

            {message && (
                <p style={{ 
                    marginTop: '15px', 
                    color: message.startsWith('Error') ? 'red' : 'green',
                    fontWeight: 'bold'
                }}>
                    {message}
                </p>
            )}
        </div>
    );
}