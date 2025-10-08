import './ClimatologiaCard.css';

const ClimatologiaCard = ({
    estacionNombre,
    periodoNombre,
    valorNombre,
    variablesSeleccionadas,
    resultadosDummy,
    VARIABLES_CLIMA
}) => {
    const resultadosJSX = Object.keys(VARIABLES_CLIMA).map(key => {
        // Solo renderiza la variable si el checkbox está marcado
        if (variablesSeleccionadas[key]) {
            const { label, icono } = VARIABLES_CLIMA[key];
            // Si el valor no está definido, usa 'N/D'
            const valor = resultadosDummy[key] !== undefined ? resultadosDummy[key] : 'N/D';

            return (
                <div key={key} className="variable-item-cardClimatologia">
                    <span className="variable-icono-cardClimatologia">{icono}</span>
                    {label}: <strong className="variable-valor-cardClimatologia">{valor}</strong>
                </div>
            );
        }
        return null;
    }).filter(Boolean); // Elimina los `null`

    return (
        <div className='cardClimatologia-resultados'>
            <h3 className="cardClimatologia-titulo">{estacionNombre}</h3>
            <p className="cardClimatologia-periodo">Período: {periodoNombre} - {valorNombre}</p>
            
            <hr className="cardClimatologia-separador"/>
            <div className='resultadosCardClimatologia-grid'>
                {/* Muestra un mensaje si no hay variables seleccionadas para renderizar */}
                {resultadosJSX.length > 0 ? resultadosJSX : <p className="mensaje-vacio-cardClimatologia">Selecciona variables para ver resultados.</p>}
            </div>
        </div>
    );
};

export default ClimatologiaCard;