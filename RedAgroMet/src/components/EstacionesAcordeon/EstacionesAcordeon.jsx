import { useState } from 'react';
import './EstacionesAcordeon.css'; 
import { EstacionesAutomaticasTable } from '../EstacionesAutTable/EstacionesAutTable.jsx';
import { EstacionesTable } from '../EstacionesTable/EstacionesTable.jsx'; 

const AcordeonItem = ({ title, isActive, onToggle, children }) => {
    return (
        <div className="acordeon-item">
            {/* Título: El botón de despliegue */}
            <div 
                className={`acordeon-title ${isActive ? 'active' : ''}`}
                onClick={onToggle}
            >
                <h3>{title}</h3>
                {/* Indicador de flecha, usando un simple texto por simplicidad */}
                <span>{isActive ? '▲' : '▼'}</span>
            </div>
            
            {/* Contenido: Se muestra o se oculta */}
            <div className={`acordeon-content ${isActive ? 'open' : 'closed'}`}>
                {children}
            </div>
        </div>
    );
};


export function EstacionesAcordeon() {
    // Estado para controlar qué sección está abierta
    const [openSection, setOpenSection] = useState('automaticas'); 

    const handleToggle = (sectionName) => {
        setOpenSection(openSection === sectionName ? null : sectionName);
    };

    return (
        <div className="estaciones-dashboard-container">
            <h2>Gestión de Estaciones</h2>

            {/* Acordeón para Estaciones Automáticas */}
            <AcordeonItem 
                title="Estaciones Automáticas" 
                isActive={openSection === 'automaticas'}
                onToggle={() => handleToggle('automaticas')}
            >
                {/* Contenido: La tabla de estaciones automáticas */}
                <EstacionesAutomaticasTable />
            </AcordeonItem>

            {/* Acordeón para Estaciones Convencionales */}
            <AcordeonItem 
                title="Estaciones Convencionales" 
                isActive={openSection === 'convencionales'}
                onToggle={() => handleToggle('convencionales')}
            >
                {/* Contenido: La tabla de estaciones convencionales/observadores */}
                <EstacionesTable />
            </AcordeonItem>
        </div>
    );
}