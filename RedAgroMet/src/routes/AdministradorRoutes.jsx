import { Route, Routes } from "react-router";
import { CrearUsuario } from "../pages/CrearUsuario/CrearUsuario"
import { SubirContenido } from "../pages/SubirContenido/SubirContenido"

export function AdministradorRoutes(){
    return(
        <Routes>
            <Route path="crear-usuario" element={<CrearUsuario />} />
            <Route path="subir" element={<SubirContenido />}/>

            {/* Opcional: ruta por defecto */}
            <Route index element={<SubirContenido />} />
        </Routes>
    )
}