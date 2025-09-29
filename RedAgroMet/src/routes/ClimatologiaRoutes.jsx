import { ListaClimatologia } from "../pages/Climatologia/Lista/ListaClimatologia";
import { MapaClimatologia } from "../pages/Climatologia/Mapa/MapaClimatologia";
import { Route, Routes } from "react-router";
export function ClimatologiaRoutes(){
    return(
        <Routes>
            <Route path="lista" element={<ListaClimatologia />} />
            <Route path="mapa" element={<MapaClimatologia />}/>

            {/* Opcional: ruta por defecto */}
            <Route index element={<MapaClimatologia />} />
        </Routes>
    )
}