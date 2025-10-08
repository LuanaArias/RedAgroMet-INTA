import './EstacionesTable.css'; 
import { LISTA_OBSERVADORES } from '../../constants/listaObservadores.js'
export function EstacionesTable({ data = LISTA_OBSERVADORES }) {
    if (!data || data.length === 0) {
        return <p>No hay datos de estaciones disponibles para mostrar.</p>;
    }
    const headers = Object.keys(data[0]);
    return (
        <div className="table-responsive-container">
            <table className="estaciones-table">
                <thead>
                    <tr>
                        {headers.map(header => (
                            <th key={header}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {headers.map(header => (
                                <td key={header}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}