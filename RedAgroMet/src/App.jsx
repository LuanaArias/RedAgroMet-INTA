import { useState } from 'react'; 
import './App.css';
import { Header } from './components/Header/Header.jsx';
import { NavBarRoutes } from './routes/NavBarRoutes.jsx';

function App() {
    const [isCollapsed, setIsCollapsed] = useState(true); 
    const toggleCollapse = () => {
        setIsCollapsed(prev => !prev);
    };

    return (
        <>
            <div className="app-container">
                <Header isCollapsed={isCollapsed} toggleCollapse={toggleCollapse} /> 

                <main className={`main-content ${isCollapsed ? 'collapsed' : ''}`}> 
                    <NavBarRoutes />
                </main>
            </div>
        </>
    );
}

export default App;