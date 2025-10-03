import { Routes, Route, Navigate } from 'react-router-dom'; 
import { Inicio } from '../pages/Inicio/Inicio.jsx';
import { Climatologia } from '../pages/Climatologia/Climatologia.jsx';
import { Pronosticos } from '../pages/Pronosticos/Pronosticos.jsx';
import { Informes } from '../pages/Informes/Informes.jsx';
import { Educacion } from '../pages/Educacion/Educacion.jsx';
import { QuienesSomos } from '../pages/QuienesSomos/QuienesSomos.jsx';

export function NavBarRoutes() {
  return (
    <Routes>
      <Route path='/pronosticos/*' element={<Pronosticos />} />
      <Route path='/informes/*' element={<Informes />} />
      
      <Route path='/inicio' element={<Inicio />} />
      {/*Climatologia*/}
      <Route path='/climatologia/*' element={<Climatologia />}/>
      <Route path='/climatologia' element={<Navigate to={'/climatologia/mapa'}/>}/>
      

      <Route path='/educacion' element={<Educacion />} />
      <Route path='/quienes-somos/*' element={<QuienesSomos />} />
      
      <Route path='/pronosticos' element={<Navigate to='/pronosticos/diario' />} />
      <Route path='/informes' element={<Navigate to='/informes/semanal' />} />
      
      <Route path="/" element={<Navigate to="/inicio" />} />
      <Route path="*" element={<Navigate to="/inicio" />} />
    </Routes>
  );
}