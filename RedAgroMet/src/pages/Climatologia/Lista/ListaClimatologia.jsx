import React, { useState } from 'react';
import { InputSelect } from '../../../components/Inputs/InputSelect/InputSelect.jsx';
import { ESTACIONES_OPCIONES, PERIODOS_OPCIONES, LISTAS_DINAMICAS, VARIABLES_CLIMA } from '../../../constants/listaClimatologia.js'
import './ListaClimatologia.css'; 
import ClimatologiaCard from '../../../components/Cards/ClimatologiaCard/ClimatologiaCard.jsx'
import InputCheckbox from '../../../components/Inputs/InputCheckbox/InputCheckbox.jsx'


export function ListaClimatologia() {
    const [filtros, setFiltros] = useState({
        estacion: ESTACIONES_OPCIONES[0].id,
        periodoTipo: PERIODOS_OPCIONES[0].id, 
        periodoValor: LISTAS_DINAMICAS.anual[0].id, 
    });

    const [variablesSeleccionadas, setVariablesSeleccionadas] = useState(
        // Inicializa todas las variables como seleccionadas (true)
        Object.keys(VARIABLES_CLIMA).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    //Manejadores
    const handleFiltroChange = (event) => {
        const { name, value } = event.target;
        setFiltros(prevFiltros => {
            //Si cambia el tipo de período (Anual/Mensual/Estacional)
            if (name === 'periodoTipo') {
                const nuevoTipo = value;
                const nuevasOpciones = LISTAS_DINAMICAS[nuevoTipo];
                return {
                    ...prevFiltros,
                    [name]: nuevoTipo, 
                    // Resetea el valor del select secundario al primer elemento de la nueva lista
                    periodoValor: nuevasOpciones[0].id, 
                };
            }
            return {
                ...prevFiltros,
                [name]: value,
            };
        });
        // Aquí se dispararía la llamada a la API con los nuevos filtros (filtros + value)
    };

    const handleVariableChange = (event) => {
        const { name, checked } = event.target;
        setVariablesSeleccionadas(prevVariables => ({
            ...prevVariables,
            [name]: checked,
        }));
    };


    // La función renderPeriodoSelector se mantiene para la lógica de selección condicional
    const renderPeriodoSelector = () => {
        const tipo = filtros.periodoTipo;
        const listaOpciones = LISTAS_DINAMICAS[tipo] || [];
        let textoLabel = '';
        
        if (tipo === 'anual') {
            textoLabel = 'Seleccionar año';
        } else if (tipo === 'mensual') {
            textoLabel = 'Seleccionar mes';
        } else if (tipo === 'estacional') {
            textoLabel = 'Seleccionar estación';
        } else {
            return null;
        }
        
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

    const resultadosDummy = { 
        PPmedia: '12,4', Humedad: '12,4', VentanaLluvia: '5', PPacumulada: '186.3',
        Temperatura: '20.5', Heladas: '2', HsFrio: '150', ITH: '70', Viento: '10'
    };
    
    const estacionNombre = ESTACIONES_OPCIONES.find(o => o.id === filtros.estacion)?.descripcion || 'Estación Desconocida';
    const periodoNombre = PERIODOS_OPCIONES.find(o => o.id === filtros.periodoTipo)?.descripcion || 'Período';
    const valorNombre = LISTAS_DINAMICAS[filtros.periodoTipo]?.find(o => o.id.toString() === filtros.periodoValor.toString())?.descripcion || 'Valor';


    return (
        <div className='climatologia-lista-container'>
            
            {/* 1. SELECTORES DE FILTRO */}
            <div className='filtros-container'>
                
                {/*SELECTOR DE ESTACIÓN*/}
                <InputSelect
                    text="Seleccionar estación"
                    color="#00998D" 
                    name="estacion"
                    value={filtros.estacion} 
                    handleChange={handleFiltroChange} 
                    listaDeOpciones={ESTACIONES_OPCIONES} 
                />
                
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

            {/*VARIABLES A MOSTRAR - Ahora usa el componente CheckboxesVariables */}
            <div className='variables-container' style={{ marginBottom: '30px' }}>
                <label style={{ color: '#00998D', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>Variables a mostrar:</label>
                <InputCheckbox
                    variablesSeleccionadas={variablesSeleccionadas}
                    handleVariableChange={handleVariableChange}
                    VARIABLES_CLIMA={VARIABLES_CLIMA} // Pasa la constante
                />
            </div>

            {/*TARJETA DE RESULTADOS (CONTENIDO DINÁMICO) - Ahora usa el componente CardResultados */}
            <ClimatologiaCard
                estacionNombre={estacionNombre}
                periodoNombre={periodoNombre}
                valorNombre={valorNombre}
                variablesSeleccionadas={variablesSeleccionadas}
                resultadosDummy={resultadosDummy}
                VARIABLES_CLIMA={VARIABLES_CLIMA} // Pasa la constante
            />
            
        </div>
    );
}