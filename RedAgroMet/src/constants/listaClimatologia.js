export const PERIODOS_OPCIONES = [
    { id: 'anual', descripcion: 'Anual' },
    { id: 'mensual', descripcion: 'Mensual' },
    { id: 'estacional', descripcion: 'Estacional' },
];

export const LISTAS_DINAMICAS = {
    anual: [
        { id: 2024, descripcion: '2024' },
        { id: 2023, descripcion: '2023' },
        // ... más años
    ],
    mensual: [
        { id: '01', descripcion: 'Enero' },
        { id: '02', descripcion: 'Febrero' },
        { id: '03', descripcion: 'Marzo' },
        { id: '04', descripcion: 'Abril' },
        { id: '05', descripcion: 'Mayo' },
        { id: '06', descripcion: 'Junio' },
        { id: '07', descripcion: 'Julio' },
        { id: '08', descripcion: 'Agosto' },
        { id: '09', descripcion: 'Septiembre' },
        { id: '10', descripcion: 'Octubre' },
        { id: '11', descripcion: 'Noviembre' },
        { id: '12', descripcion: 'Diciembre' },
    ],
    estacional: [
        { id: 'verano', descripcion: 'Verano (Dic-Feb)' },
        { id: 'otono', descripcion: 'Otoño (Mar-May)' },
        { id: 'invierno', descripcion: 'Invierno (Jun-Ago)' },
        { id: 'primavera', descripcion: 'Primavera (Sep-Nov)' },
    ],
};
export const ESTACIONES_OPCIONES = [
    { id: '1', descripcion: 'Estación Paraná', lat: -31.7333, lng: -60.5333 },
    { id: '2', descripcion: 'Estación Santa Fe', lat: -31.6495, lng: -60.7029 },
]; 


export const VARIABLES_CLIMA = {
    'PPmedia': { label: 'PP media', icono: '💧' },
    'TemperaturaMedia': { label: 'Temperatura media', icono: '🌡️' },
    'TemperaturaMax': { label: 'Temperatura máxima', icono: '🌡️' },
    'TemperaturaMin': { label: 'Temperatura mínima', icono: '🌡️' },
    'Heladas': { label: 'Heladas', icono: '❄️' },
};
