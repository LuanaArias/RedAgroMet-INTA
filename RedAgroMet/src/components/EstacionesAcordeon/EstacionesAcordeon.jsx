import { useState } from 'react';
import './EstacionesAcordeon.css'; 
import { EstacionesAutomaticasTable } from '../EstacionesAutTable/EstacionesAutTable.jsx';
import { EstacionesTable } from '../EstacionesTable/EstacionesTable.jsx';
import { FlechaAbajoEstacion } from './ui/FlechaAbajoEstacion.jsx';
import { FlechaArribaEstacion } from './ui/FlechaArribaEstacion.jsx';
import { SubtitlePrincipal } from '../Titles/SubtitlePrincipal/SubtitlePrincipal.jsx';

const AcordeonItem = ({ title, isActive, onToggle, children }) => {
    return (
        <div className="acordeon-item">
            <div 
                className={`acordeon-title ${isActive ? 'active' : ''}`}
                onClick={onToggle}
            >
                <SubtitlePrincipal text={title} color="#ffffffff" />
                <span>{isActive ? <FlechaArribaEstacion /> : <FlechaAbajoEstacion />}</span>
            </div>

            <div className={`acordeon-content ${isActive ? 'open' : 'closed'}`}>
                {children}
            </div>
        </div>
    );
};


export function EstacionesAcordeon() {
    // Inicializa el estado a null para que ninguna sección esté abierta al inicio.
    const [openSection, setOpenSection] = useState(null); 

    const handleToggle = (sectionName) => {
        setOpenSection(openSection === sectionName ? null : sectionName);
    };

    return (
        <div className="estaciones-dashboard-container">
            <div className="estaciones-titulo">
                 <SubtitlePrincipal text="Gestion de estaciones" color="#B9305B" />
            </div>
           

            {/* Acordeón para Estaciones Automáticas */}
            <AcordeonItem 
                title="Estaciones Automáticas" 
                isActive={openSection === 'automaticas'}
                onToggle={() => handleToggle('automaticas')}
            >
                <EstacionesAutomaticasTable />
            </AcordeonItem>

            {/* Acordeón para Estaciones Convencionales */}
            <AcordeonItem 
                title="Estaciones Convencionales" 
                isActive={openSection === 'convencionales'}
                onToggle={() => handleToggle('convencionales')}
            >
                <EstacionesTable />
            </AcordeonItem>
        </div>
    );
}