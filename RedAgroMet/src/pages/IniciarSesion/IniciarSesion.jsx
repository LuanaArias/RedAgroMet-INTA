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

        // Simulación temporal (mock)
        const mockUsers = [
            { username: 'admin', password: 'admin123', role: 'admin' },
            { username: 'user', password: 'user123', role: 'user' }
        ];

        const user = mockUsers.find(
            (u) => u.username === username && u.password === password
        );

        if (!user) {
            setError('Credenciales inválidas');
            return;
        }

        // Simula un "token" con el rol incluido
        const tokenData = { username: user.username, role: user.role };
        const token = btoa(JSON.stringify(tokenData)); // codifica en base64

        localStorage.setItem('authToken', token);
        onLogin(token);

        navigate('/dashboard');
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