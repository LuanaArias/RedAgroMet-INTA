import { useState } from "react";
import { InputTextoLibre } from "../../components/Inputs/InputText/InputText";
import { updateUsername, updatePassword } from '../../services/ConfigurarUsuario/modificarUsuario.js'; 
import './ConfiguracionUsuario.css';

export function ConfiguracionUsuario() {
    // Estados para manejar los campos del formulario
    const [newUsername, setNewUsername] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    
    // Estado para manejar mensajes de feedback
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    // Función genérica para manejar los cambios de estado
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'newUsername') setNewUsername(value);
        if (name === 'currentPassword') setCurrentPassword(value);
        if (name === 'newPassword') setNewPassword(value);
        if (name === 'confirmNewPassword') setConfirmNewPassword(value);
    };


    // manejo de envío de nombre de usuario

    const handleUsernameSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (newUsername.trim() === '') {
            setError('El nuevo nombre de usuario no puede estar vacío.');
            return;
        }

        try {
            await updateUsername(newUsername);
            setMessage('Nombre de usuario actualizado con éxito.');
            setNewUsername('');
        } catch (err) {
            setError(err.message); 
        }
    };

    // manejo de envío de contraseña 

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        // 1. Validaciones
        if (newPassword !== confirmNewPassword) {
            setError('Las nuevas contraseñas no coinciden.');
            return;
        }
        
        if (newPassword.length < 6) {
            setError('La nueva contraseña debe tener al menos 6 caracteres.');
            return;
        }
        
        try {
            await updatePassword(currentPassword, newPassword);
            setMessage('Contraseña actualizada con éxito. Por favor, vuelve a iniciar sesión.');
            setCurrentPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
            
        } catch (err) {
            setError(err.message); 
        }
    };

    return (
        <div className="configuracion-usuario-container">
            <h2>Configuración de Usuario</h2>
            
            {/* Mostrar mensajes de feedback usando clases CSS */}
            {message && <p className={`message-feedback message-success`}>{message}</p>}
            {error && <p className={`message-feedback message-error`}>{error}</p>}

            {/* Formulario de Cambio de Nombre de Usuario */}
            <section>
                <h3>Cambiar Nombre de Usuario</h3>
                <form onSubmit={handleUsernameSubmit}>
                    <InputTextoLibre
                        text="Nuevo Nombre de Usuario"
                        name="newUsername"
                        type="text"
                        value={newUsername}
                        handleChange={handleInputChange} 
                        placeholder="Ej: nuevoUsuario123"
                    />
                    <button type="submit">Actualizar Nombre de Usuario</button>
                </form>
            </section>
            
            <hr />

            {/* Formulario de cambio de contraseña */}
            <section>
                <h3>Cambiar Contraseña</h3>
                <form onSubmit={handlePasswordSubmit}>
                    <InputTextoLibre
                        text="Contraseña Actual"
                        name="currentPassword"
                        type="password" 
                        value={currentPassword}
                        handleChange={handleInputChange}
                    />
                    <InputTextoLibre
                        text="Nueva Contraseña"
                        name="newPassword"
                        type="password" 
                        value={newPassword}
                        handleChange={handleInputChange}
                    />
                    <InputTextoLibre
                        text="Confirmar Nueva Contraseña"
                        name="confirmNewPassword"
                        type="password" 
                        value={confirmNewPassword}
                        handleChange={handleInputChange}
                    />
                    <button type="submit">Actualizar Contraseña</button>
                </form>
            </section>
        </div>
    );
}