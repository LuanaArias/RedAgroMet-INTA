import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputTextoLibre } from '../../components/Inputs/InputText/InputText';
import { BotonPrueba } from '../../components/ui/BotonPrueba/BotonPrueba';
import './IniciarSesion.css'
export function IniciarSesion({ onLogin }){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Credenciales inválidas.');
            }

            const data = await response.json();
            const token = data.token;
            localStorage.setItem('authToken', token);
            onLogin(token); 
            navigate('/dashboard'); 
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <main className='container-main-login'>
            <div className='container-message-welcome'>
                <h2>Iniciar Sesión</h2>
                <p>Bienvenido/a</p>
            </div>
            <div className='container-form-custom'>
                <form onSubmit={handleSubmit}>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <InputTextoLibre
                        text="Usuario:"
                        name="username"
                        value={username}
                        handleChange={(e) => setUsername(e.target.value)}
                        color="white"     
                        placeholder="Ingresá tu usuario"
                    />
                    <InputTextoLibre
                        text="Contraseña:"
                        name="password"
                        value={password}
                        handleChange={(e) => setPassword(e.target.value)}
                        type="password"      
                        color="white"
                        placeholder="Ingresá tu contraseña"
                    />
                    <button type="submit" className='login-button'>Entrar</button>                 
                </form>
            </div>
            <BotonPrueba />
        </main>
        
    );
}