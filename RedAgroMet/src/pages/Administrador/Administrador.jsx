import { TitlePrincipal } from "../../components/Titles/TitlePrincipal/TitlePrincipal";
import { NavMain } from "../../components/Menu/NavMain/NavMain";
import { AdministradorRoutes } from "../../routes/AdministradorRoutes";
import { navMainItemsAdministrador } from "../../constants/navMainItemsAdministrador";
export function Administrador(){
    return(
        <>
            <TitlePrincipal text="Panel de administrador" color="#46658C" />
            <NavMain listItems={navMainItemsAdministrador} textColor="#46658C" bgColor="rgba(216, 54, 5, 0.11)" activeColor="#f0f1f9ff" hoverColor="#fcfdff" />
            <AdministradorRoutes />
        </>  
    )
}