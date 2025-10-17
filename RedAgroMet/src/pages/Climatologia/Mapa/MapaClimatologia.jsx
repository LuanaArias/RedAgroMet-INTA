import React, { useState } from 'react';
import { InputSelect } from '../../../components/Inputs/InputSelect/InputSelect.jsx';
import ClimatologiaCard from '../../../components/Cards/ClimatologiaCard/ClimatologiaCard.jsx';
import InputCheckbox from '../../../components/Inputs/InputCheckbox/InputCheckbox.jsx';
import { EstacionMapaSelector } from './EstacionMapaSelector/EstacionMapaSelector.jsx'; 
import { 
    ESTACIONES_OPCIONES, 
    PERIODOS_OPCIONES, 
    LISTAS_DINAMICAS, 
    VARIABLES_CLIMA 
} from '../../../constants/listaClimatologia.js';
import '../Lista/ListaClimatologia.css'; 


export function MapaClimatologia() { 
    const [filtros, setFiltros] = useState({
        estacion: null, 
        periodoTipo: PERIODOS_OPCIONES[0].id, 
        periodoValor: LISTAS_DINAMICAS.anual[0].id, 
    });

    const [variablesSeleccionadas, setVariablesSeleccionadas] = useState(
        Object.keys(VARIABLES_CLIMA).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    const handleVariableChange = (event) => {
        const { name, checked } = event.target;
        setVariablesSeleccionadas(prevVariables => ({
            ...prevVariables,
            [name]: checked,
        }));
    };

    const handleFiltroChange = (event) => {
        const { name, value } = event.target;
        setFiltros(prevFiltros => {
            if (name === 'periodoTipo') {
                const nuevoTipo = value;
                const nuevasOpciones = LISTAS_DINAMICAS[nuevoTipo];
                return {
                    ...prevFiltros,
                    [name]: nuevoTipo, 
                    periodoValor: nuevasOpciones[0].id, 
                };
            }
            return {
                ...prevFiltros,
                [name]: value,
            };
        });
    };
    
    const handleEstacionSelect = (estacionId) => {
        setFiltros(prevFiltros => ({
            ...prevFiltros,
            estacion: estacionId,
        }));
    };

    const renderPeriodoSelector = () => {
        const tipo = filtros.periodoTipo;
        const listaOpciones = LISTAS_DINAMICAS[tipo] || [];
        let textoLabel = '';
        if (tipo === 'anual') { textoLabel = 'Seleccionar año'; } 
        else if (tipo === 'mensual') { textoLabel = 'Seleccionar mes'; } 
        else if (tipo === 'estacional') { textoLabel = 'Seleccionar estación'; } 
        else { return null; }
        
        return (
            <InputSelect
                text={textoLabel}
                color="#00998D"
                name="periodoValor" 
                value={filtros.periodoValor}
                handleChange={handleFiltroChange}
                listaDeOpciones={listaOpciones}
            /> 
        );
    };
    
    const resultadosDummy = { /* ... tus datos dummy ... */ };
    const estacionNombre = ESTACIONES_OPCIONES.find(o => o.id === filtros.estacion)?.descripcion || 'Estación Desconocida';
    const periodoNombre = PERIODOS_OPCIONES.find(o => o.id === filtros.periodoTipo)?.descripcion || 'Período';
    const valorNombre = LISTAS_DINAMICAS[filtros.periodoTipo]?.find(o => o.id?.toString() === filtros.periodoValor?.toString())?.descripcion || 'Valor';


    return (
        <div className='climatologia-lista-container'>
            <div className='mapa-selector-wrapper'> 
                <label className='mapa-selector-label'>Seleccionar estación en el mapa</label>
                <EstacionMapaSelector
                    estaciones={ESTACIONES_OPCIONES}
                    estacionSeleccionadaId={filtros.estacion}
                    onEstacionSelect={handleEstacionSelect}
                />
            </div>
            
            <div className='filtros-container'> 
                
                {/*SELECTOR PRINCIPAL DE PERÍODO (Anual/Mensual/Estacional)*/}
                <InputSelect
                    text="Seleccionar tipo de período"
                    color="#00998D"
                    name="periodoTipo" 
                    value={filtros.periodoTipo} 
                    handleChange={handleFiltroChange} 
                    listaDeOpciones={PERIODOS_OPCIONES}
                />
                
                {/*SELECTOR SECUNDARIO (Renderizado Condicional) */}
                {renderPeriodoSelector()}

            </div>

            {/* VARIABLES A MOSTRAR: CLASE HOMOGENEIZADA */}
            <div className='variables-mostrar-wrapper'> 
                <label className='variables-mostrar-label'>Variables a mostrar:</label>
                <InputCheckbox
                    variablesSeleccionadas={variablesSeleccionadas}
                    handleVariableChange={handleVariableChange}
                    VARIABLES_CLIMA={VARIABLES_CLIMA} 
                />
            </div>

            {/* TARJETA DE RESULTADOS */}
            <ClimatologiaCard
                estacionNombre={estacionNombre}
                periodoNombre={periodoNombre}
                valorNombre={valorNombre}
                variablesSeleccionadas={variablesSeleccionadas}
                resultadosDummy={resultadosDummy}
                VARIABLES_CLIMA={VARIABLES_CLIMA} 
            />
            
        </div>
    );
}