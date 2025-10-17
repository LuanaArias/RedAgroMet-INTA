import React from 'react';
import { IconEducacion } from '../components/ui/IconsMenu/IconEducacion';
import { IconInformes } from '../components/ui/IconsMenu/IconInformes';
import { IconInicio } from '../components/ui/IconsMenu/IconInicio';
import { IconQuienesSomos } from '../components/ui/IconsMenu/IconQuienesSomos';
import ClimaIcon from '@assets/icons/iconsNavBar/Icono_Climatología.png'; 
import PronosticoIcon from '@assets/icons/iconsNavBar/Icono_Pronósticos.png';

export const navBarItems = [
    {
    name: 'Inicio',
    path: '/',
    icon: IconInicio,
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
    icon: IconInformes,
    color: '#E68E27'
  },
  {
    name: 'Educación',
    path: '/educacion',
    icon: IconEducacion,
    color: '#D7683B'
  },
  {
    name: '¿Quiénes somos?',
    path: '/quienes-somos',
    icon: IconQuienesSomos,
    color: '#B9305B'
  }
];