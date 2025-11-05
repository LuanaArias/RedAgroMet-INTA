import { TitlePrincipal } from "../../components/Titles/TitlePrincipal/TitlePrincipal";
import { NavMain } from "../../components/Menu/NavMain/NavMain";
import { AdministradorRoutes } from "../../routes/AdministradorRoutes";
import { navMainItemsAdministrador } from "../../constants/navMainItemsAdministrador";
import { IconAdministrador } from "../../components/ui/IconAdministrador/IconAdministrador";
import './Administrador.css'
export function Administrador(){
    return(
        <>
            <div className="header-administrador-container">
                <TitlePrincipal text="Panel de administrador" color="#46658C" />
                <button>
                    <IconAdministrador />
                </button>
            </div>
            <NavMain listItems={navMainItemsAdministrador} textColor="#46658C" bgColor="rgba(5, 44, 216, 0.11)" activeColor="#f0f1f9ff" hoverColor="#fcfdff" />
            <AdministradorRoutes />
        </>  
    )
}