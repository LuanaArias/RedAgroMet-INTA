import React from 'react';

import ClimaIcon from '@assets/icons/iconsNavBar/Icono_Climatología.png'; 
import PronosticoIcon from '@assets/icons/iconsNavBar/Icono_Educación.png';
import InformeIcon from '@assets/icons/iconsNavBar/Icono_Informes.png';
import EducacionIcon from '@assets/icons/iconsNavBar/Icono_Pronósticos.png';
import QuienesSomosIcon from '@assets/icons/iconsNavBar/Icono_QuienesSomos.png';

export const navBarItems = [
    {
    name: 'Inicio',
    path: '/',
    icon: QuienesSomosIcon,
    color: '#7ca816ff'
  },
  {
    name: 'Climatología',
    path: '/climatologia',
    icon: ClimaIcon,
    color: '#00998D'
  },
  {
    name: 'Pronósticos',
    path: '/pronosticos',
    icon: PronosticoIcon,
    color: '#E7B961'
  },
  {
    name: 'Informes',
    path: '/informes',
    icon: InformeIcon,
    color: '#E68E27'
  },
  {
    name: 'Educación',
    path: '/educacion',
    icon: EducacionIcon,
    color: '#D7683B'
  },
  {
    name: '¿Quiénes somos?',
    path: '/quienes-somos',
    icon: QuienesSomosIcon,
    color: '#B9305B'
  }
];