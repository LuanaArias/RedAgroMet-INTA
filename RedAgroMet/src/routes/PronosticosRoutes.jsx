import { Routes, Route, Navigate } from 'react-router-dom'; 
import { PerspectivaClimatica } from "../pages/Pronosticos/PerspectivaClimatica/PerspectivaClimatica";
import { PronosticoDiario } from "../pages/Pronosticos/PronosticoDiario/PronosticoDiario";

export function PronosticosRoutes(){
    return(
        <Routes>
            <Route path="diario" element={<PronosticoDiario />} />
            <Route path="perspectiva-climatica" element={<PerspectivaClimatica />}/>

            {/* Opcional: ruta por defecto */}
            <Route index element={<PronosticoDiario />} />
        </Routes>
    )
}