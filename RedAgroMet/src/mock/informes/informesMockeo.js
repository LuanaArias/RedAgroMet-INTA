const BASE_URL = '/informes/'; 

export const TIPOS_INFORME = [
    { id: 'semanal', descripcion: 'Semanal' },
    { id: 'mensual', descripcion: 'Mensual' },
    { id: 'especiales', descripcion: 'Especiales' },
];

export const OPCIONES_DINAMICAS = {
    semanal: [
        { 
            id: 'septiembre2025', 
            descripcion: 'Septiembre 2025', 
            url: BASE_URL + 'informeSemanalSeptiembre2025.pdf' 
        },
    ],
    
    mensual: [
        { 
            id: 'agosto2025', 
            descripcion: 'Agosto 2025', 
            url: BASE_URL + 'AgroMet_mensual_AGOSTO2025.pdf' 
        },
        { 
            id: 'enero2025', 
            descripcion: 'Enero 2025', 
            url: BASE_URL + 'Informe_lluvias_ENERO2025.pdf' 
        },
    ],
    especiales: [
        { 
            id: 'lluviasConurbanoMarzo2024', 
            descripcion: 'Lluvias Conurbano Mar. 2024', 
            url: BASE_URL + 'Informe_lluvias_conurbano_20240313.pdf' 
        },
    ],
};