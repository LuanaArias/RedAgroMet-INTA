import { ListaClimatologia } from "../pages/Climatologia/Lista/ListaClimatologia";
import { MapaClimatologia } from "../pages/Climatologia/Mapa/MapaClimatologia";
import { Route, Routes } from "react-router";
import { InformeSemanal } from "../pages/Informes/InformeSemanal/InformeSemanal";
import { InformeMensual } from "../pages/Informes/InformeMensual/InformeMensual";
import { InformeEspecial } from "../pages/Informes/InformeEspecial/InformeEspecial";
export function InformesRoutes(){
    return(
        <Routes>
            <Route path="semanal" element={<InformeSemanal />} />
            <Route path="mensual" element={<InformeMensual />}/>
            <Route path="especiales" element={<InformeEspecial />}/>

            {/* Opcional: ruta por defecto */}
            <Route index element={<InformeSemanal />} />
        </Routes>
    )
}