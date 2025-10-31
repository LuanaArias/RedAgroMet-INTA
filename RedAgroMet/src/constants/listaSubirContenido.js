// Opciones para el selector principal de Contenido
    export const contentTypesOptions = [
        { id: 'informe', descripcion: 'Informe' },
        { id: 'pronostico', descripcion: 'Pronóstico' },
        { id: 'educacion', descripcion: 'Educación' },
    ];

    // Opciones estáticas para los selectores anidados
    export const informeOptions = [
        { id: 'semanal', descripcion: 'Semanal' },
        { id: 'mensual', descripcion: 'Mensual' },
        { id: 'anual', descripcion: 'Anual' },
    ];
    
    // Opciones para Pronósticos
    export const pronosticoTipoOptions = [
        { id: 'diario', descripcion: 'Pronóstico Diario' },
        { id: 'perspectiva', descripcion: 'Perspectiva Climática' },
    ];

    export const diarioTipoOptions = [
        { id: 'precipitacion', descripcion: 'Precipitación Media' },
        { id: 'heladas', descripcion: 'Heladas' },
        { id: 'maxima', descripcion: 'Temperatura Máxima' },
        { id: 'minima', descripcion: 'Temperatura Mínima' },
        { id: 'ovinos', descripcion: 'Ovinos (Específico)' },
    ];
    
    export const perspectivaTipoOptions = [
        { id: 'trimestral', descripcion: 'Trimestral' },
        { id: 'enso', descripcion: 'ENSO' },
    ];

    export const trimestralSourceOptions = [
        { id: 'smn', descripcion: 'SMN' },
        { id: 'iri', descripcion: 'IRI' },
    ];

    export const ensoTypeOptions = [
        { id: 'barras', descripcion: 'Barras' },
        { id: 'plumas', descripcion: 'Plumas' },
        { id: 'estado', descripcion: 'Estado' },
    ];