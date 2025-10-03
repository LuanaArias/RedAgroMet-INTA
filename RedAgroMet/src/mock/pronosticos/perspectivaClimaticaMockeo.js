export const URL_BASE_PERSPECTIVA = '/pronosticos/perspectivaClimatica/'; 

export const OPCIONES_PRINCIPALES = [
    { id: 'Trimestral', descripcion: 'Trimestral' },
    { id: 'ENSO', descripcion: 'ENSO' },
];

export const OPCIONES_SECUNDARIAS = {
    'Trimestral': [
        { id: 'SMN', descripcion: 'SMN', file_path: 'trimestralSMN.jpg' }, 
        //{ id: 'IRI', descripcion: 'IRI', file_path: 'Trimestral/trimestralIRI.jpg' }, 
    ],
    'ENSO': [
        { id: 'Estado', descripcion: 'Estado', file_path: 'ENSOEstado.jpg' }, 
        { id: 'Barras', descripcion: 'Barras', file_path: 'ENSOBarras.jpg' },
        { id: 'Plumas', descripcion: 'Plumas', file_path: 'ENSOPlumas.jpg' },
    ],
};