import { TitlePrincipal } from "../../components/Titles/TitlePrincipal/TitlePrincipal";
import { NavMain } from "../../components/Menu/NavMain/NavMain";
import { navMainItemsInformes } from "../../constants/navMainItemsInformes";
import { InformesRoutes } from "../../routes/InformesRoutes";
export function Informes(){
    return (
        <>
            <TitlePrincipal text="Informes" color="#E68E27" />
            <NavMain listItems={navMainItemsInformes} textColor="#E68E27" bgColor="rgba(153, 125, 0, 0.14)" activeColor="#f9f5f0ff" hoverColor="#fcfdff" />
            <InformesRoutes />
        </>
        
    );
}