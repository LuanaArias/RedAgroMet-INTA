import { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header.jsx';
import { NavBarRoutes } from './routes/NavBarRoutes.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            try {
                // Cuando tenga JWT reemplazar por decodificación real
                // const payload = JSON.parse(atob(token.split('.')[1]));
                const payload = JSON.parse(atob(token));
                setUserRole(payload.role);
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Error al decodificar token:', error);
                localStorage.removeItem('authToken');
            }
        }
    }, []);

    // Función para login 
    const handleLogin = (token) => {
        try {
            const payload = JSON.parse(atob(token)); 
            setUserRole(payload.role);
            setIsAuthenticated(true);
            localStorage.setItem('authToken', token);
        } catch (error) {
            console.error('Error al decodificar token:', error);
        }
    };

    // Función para logout 
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setUserRole(null);
        setIsAuthenticated(false);
    };

    const toggleCollapse = () => setIsCollapsed(prev => !prev);

    return (
        <div className="app-container">
            <Header isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} onLogout={handleLogout} />
            <main className={`main-content ${isCollapsed ? 'collapsed' : ''}`}>
                <NavBarRoutes
                    isAuthenticated={isAuthenticated}
                    userRole={userRole}
                    onLogin={handleLogin}
                />
            </main>
            <Footer isCollapsed={isCollapsed} />
        </div>
    );
}

export default App;
