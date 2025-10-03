const VideoIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5.14001V19.14L19 12.14L8 5.14001Z" fill="#D7683B"/>
</svg>

);

const LinkIcon = () => (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.55556 2.45028C7.80604 2.45028 8.04626 2.53633 8.22338 2.6895C8.4005 2.84268 8.5 3.05042 8.5 3.26704C8.5 3.48366 8.4005 3.69141 8.22338 3.84458C8.04626 3.99775 7.80604 4.0838 7.55556 4.0838H1.88889V13.0682H12.2778V8.1676C12.2778 7.95099 12.3773 7.74324 12.5544 7.59007C12.7315 7.43689 12.9717 7.35084 13.2222 7.35084C13.4727 7.35084 13.7129 7.43689 13.89 7.59007C14.0672 7.74324 14.1667 7.95099 14.1667 8.1676V13.0682C14.1667 13.5014 13.9677 13.9169 13.6134 14.2232C13.2592 14.5296 12.7787 14.7017 12.2778 14.7017H1.88889C1.38792 14.7017 0.907478 14.5296 0.553243 14.2232C0.199007 13.9169 0 13.5014 0 13.0682V4.0838C0 3.65057 0.199007 3.23507 0.553243 2.92873C0.907478 2.62238 1.38792 2.45028 1.88889 2.45028H7.55556ZM16.0556 0C16.306 0 16.5463 0.0860513 16.7234 0.239224C16.9005 0.392396 17 0.600142 17 0.81676V4.90056C17 5.11718 16.9005 5.32493 16.7234 5.4781C16.5463 5.63127 16.306 5.71732 16.0556 5.71732C15.8051 5.71732 15.5648 5.63127 15.3877 5.4781C15.2106 5.32493 15.1111 5.11718 15.1111 4.90056V2.78842L7.27883 9.56181C7.10071 9.71059 6.86214 9.79292 6.61451 9.79106C6.36688 9.7892 6.13 9.7033 5.95489 9.55186C5.77979 9.40043 5.68046 9.19558 5.67831 8.98142C5.67616 8.76727 5.77135 8.56096 5.94339 8.40691L13.7757 1.63352H11.3333C11.0829 1.63352 10.8426 1.54747 10.6655 1.3943C10.4884 1.24112 10.3889 1.03338 10.3889 0.81676C10.3889 0.600142 10.4884 0.392396 10.6655 0.239224C10.8426 0.0860513 11.0829 0 11.3333 0H16.0556Z" fill="#D7683B"/>
    </svg>
);

export const VIDEOS_EDUCATIVOS = [
    {
        id: 'v1',
        title: 'Introducción a la Meteorología Agrícola',
        content: 'Conceptos básicos sobre cómo los factores meteorológicos afectan la agricultura.',
        timeOrLink: '15 min',
        icon: <VideoIcon />,
        buttonUrl: 'https://youtu.be/IZ67ZXk_7t4?si=cdI1KACTlQV4Uf2C', 
        buttonText: 'Ver Video',
    },
    {
        id: 'v2',
        title: 'Gestión del Riesgo Hídrico en Cultivos',
        content: 'Técnicas y modelos para la predicción de sequías y excesos hídricos.',
        timeOrLink: '22 min',
        icon: <VideoIcon />,
        buttonUrl: 'https://youtu.be/3hhJVH--E5I?si=Svoqeb7C2AHGOARJ',
        buttonText: 'Ver Video',
    },
    {
        id: 'v3',
        title: 'Impacto del Fenómeno ENSO (El Niño/La Niña)',
        content: 'Análisis de cómo El Niño y La Niña influyen en el clima de la región pampeana.',
        timeOrLink: '8 min',
        icon: <VideoIcon />,
        buttonUrl: 'https://www.youtube.com/watch?v=EjemploID3',
        buttonText: 'Ver Video',
    },
    {
        id: 'v4',
        title: 'Uso de Estaciones Meteorológicas Automáticas',
        content: 'Curso rápido sobre la interpretación de datos de estaciones automáticas del INTA.',
        timeOrLink: '30 min',
        icon: <VideoIcon />,
        buttonUrl: 'https://www.youtube.com/watch?v=EjemploID4',
        buttonText: 'Ver Video',
    },
];

export const LINKS_INFORMATIVOS = [
    {
        id: 'l1',
        title: 'Servicio Meteorológico Nacional (SMN)',
        content: 'Portal oficial del SMN con pronósticos, alertas e información climatológica oficial.',
        icon: <LinkIcon />,
        buttonUrl: 'https://www.smn.gob.ar/',
        buttonText: 'Visitar sitio SMN',
    },
    {
        id: 'l2',
        title: 'INTA - Clima y Agua',
        content: 'Informes técnicos, mapas de humedad y pronósticos de mediano plazo enfocados en el sector agropecuario.',
        icon: <LinkIcon />,
        buttonUrl: 'https://inta.gob.ar/areas/clima-y-agua',
        buttonText: 'Visitar INTA',
    },
    {
        id: 'l3',
        title: 'Bolsa de Cereales de Buenos Aires (BCBA)',
        content: 'Informes semanales sobre estado de cultivos, avance de siembra y condiciones climáticas.',
        icon: <LinkIcon />,
        buttonUrl: 'https://www.bolsadecereales.com/',
        buttonText: 'Visitar BCBA',
    },
    {
        id: 'l4',
        title: 'Mapas de Sequía de la ONU (SMD)',
        content: 'Monitoreo global de sequías que puede ser útil para contexto regional.',
        icon: <LinkIcon />,
        buttonUrl: 'https://www.example.org/onu-sequia',
        buttonText: 'Ver Monitoreo',
    },
];