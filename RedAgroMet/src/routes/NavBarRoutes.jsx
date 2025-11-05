import { Routes, Route, Navigate } from 'react-router-dom'; 
import { Inicio } from '../pages/Inicio/Inicio.jsx';
import { Climatologia } from '../pages/Climatologia/Climatologia.jsx';
import { Pronosticos } from '../pages/Pronosticos/Pronosticos.jsx';
import { Informes } from '../pages/Informes/Informes.jsx';
import { Educacion } from '../pages/Educacion/Educacion.jsx';
import { QuienesSomos } from '../pages/QuienesSomos/QuienesSomos.jsx';
import { IniciarSesion } from '../pages/IniciarSesion/IniciarSesion.jsx';
import { SubirContenido } from '../pages/SubirContenido/SubirContenido.jsx';
import { PrivateRoute } from '../pages/PrivateRoutes/PrivateRoutes.jsx';
import { Administrador } from '../pages/Administrador/Administrador.jsx';
import { ConfiguracionUsuario } from '../pages/ConfiguracionUsuario/ConfiguracionUsuario.jsx'

export function NavBarRoutes({ isAuthenticated, userRole, onLogin }) {
  return (
    <Routes>      
      <Route path='/inicio' element={<Inicio />} />

      <Route path='/climatologia/*' element={<Climatologia />}/>
      <Route path='/climatologia' element={<Navigate to={'/climatologia/mapa'}/>}/>
      

      <Route path='/educacion' element={<Educacion />} />

      <Route path='/quienes-somos/*' element={<QuienesSomos />} />
      <Route path='/quienes-somos' element={<Navigate to={'/quienes-somos/red-agromet'} />} />
      
      <Route path='/pronosticos' element={<Navigate to='/pronosticos/diario' />} />
      <Route path='/pronosticos/*' element={<Pronosticos />} />

      <Route path='/informes' element={<Navigate to='/informes/semanal' />} />
      <Route path='/informes/*' element={<Informes />} />

      <Route path='/iniciar-sesion' element={<IniciarSesion onLogin={onLogin}/>} />

      {/* Ruta privada para subir contenido (cualquier usuario logueado) */}
      <Route path='/subir' element={
        <PrivateRoute isAuthenticated={isAuthenticated} userRole={userRole}>
          <SubirContenido />
        </PrivateRoute>
      } />

      {/* Ruta solo para admin */}
      <Route path='/administrador' element={
        <PrivateRoute isAuthenticated={isAuthenticated} userRole={userRole} requiredRole="admin">
          <Administrador />
        </PrivateRoute>
      } />
      <Route path='/administrador/*' element={
        <PrivateRoute isAuthenticated={isAuthenticated} userRole={userRole} requiredRole="admin">
          <Administrador />
        </PrivateRoute>
      } />
      
      <Route path='/configuracionUsuario' element={
        <PrivateRoute isAuthenticated={isAuthenticated} userRole={userRole}>
          <ConfiguracionUsuario />
        </PrivateRoute>
      } />

      <Route path="/" element={<Navigate to="/inicio" />} />
      <Route path="*" element={<Navigate to="/inicio" />} />
    </Routes>
  );
}