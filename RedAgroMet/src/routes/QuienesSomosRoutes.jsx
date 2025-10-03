import { Routes, Route, Navigate } from 'react-router-dom'; 
import { RedAgromet } from '../pages/QuienesSomos/RedAgromet/RedAgromet.jsx';
import { NuestroEquipo } from '../pages/QuienesSomos/NuestroEquipo/NuestroEquipo.jsx';

export function QuienesSomosRoutes(){
    return(
        <Routes>
            <Route path="red-agromet" element={<RedAgromet />} />
            <Route path="nuestro-equipo" element={<NuestroEquipo />}/>

            {/* Opcional: ruta por defecto */}
            <Route index element={<RedAgromet />} />
        </Routes>
    )
}