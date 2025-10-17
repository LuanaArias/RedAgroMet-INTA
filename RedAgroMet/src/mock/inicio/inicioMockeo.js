import ImgClimatologia from '@assets/imgs/inicio/inicio_climatologia.JPG'; 
import ImgEducacion from '@assets/imgs/inicio/inicio_educacion.jpg'; 
import ImgInformes from '@assets/imgs/inicio/inicio_informes.jpeg'; 
import ImgPronosticos from '@assets/imgs/inicio/inicio_pronosticos.jpg'; 

export const CAROUSEL_DATA = [
    {
        id: 1,
        image: ImgClimatologia, 
        title: 'Climatologia',
        text: 'Consultá la información histórica de los observatorios convencionales de INTA. Encontrá datos de temperatura, precipitación y otras variables que permiten conocer el comportamiento climático de distintas regiones del país.',
        link: '/climatologia/mapa'
    },
    {
        id: 2,
        image: ImgInformes, 
        title: 'Informes',
        text: 'Revisá los informes semanales, mensuales y especiales sobre la situación agroclimática del país. Incluyen análisis de eventos meteorológicos, monitoreo de sequías y evaluaciones del impacto sobre los sistemas productivos.',
        link: '/informes/semanal'
    },
    {
        id: 3,
        image: ImgPronosticos, 
        title: 'Pronosticos',
        text: 'Accedé a los pronósticos elaborados por INTA: precipitaciones, temperaturas, heladas, enfriamiento para ovinos y estrés térmico (ITH). Información actualizada para anticipar condiciones que afectan la producción agropecuaria.',
        link: '/pronosticos/diario'
    },
    {
        id: 4,
        image: ImgEducacion, 
        title: 'Educacion',
        text: 'Explorá recursos didácticos y materiales de capacitación para comprender los conceptos básicos de la agrometeorología y su aplicación en la gestión del riesgo y la toma de decisiones en el ámbito agropecuario.',
        link: '/educacion'
    }
];
