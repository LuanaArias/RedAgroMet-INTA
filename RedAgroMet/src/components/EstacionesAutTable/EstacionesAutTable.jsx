import { useEstacionesAut } from '../../hook/RedAgromet/useGetEstacionesAut.js'; 
import '../EstacionesTable/EstacionesTable.css'; 

export function EstacionesAutomaticasTable() {
    const { data, isLoading, error } = useEstacionesAut();

    if (isLoading) {
        return <p>Cargando datos de estaciones automáticas...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    if (!data || data.length === 0) {
        return <p>No hay datos de estaciones automáticas disponibles para mostrar.</p>;
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