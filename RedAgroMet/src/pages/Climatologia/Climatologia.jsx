import { NavMain } from "../../components/Menu/NavMain/NavMain.jsx";
import { TitlePrincipal } from "../../components/Titles/TitlePrincipal/TitlePrincipal";
import { navMainItemsClimatologia } from "../../constants/navMainItemsClimatologia";
import { ClimatologiaRoutes } from "../../routes/ClimatologiaRoutes.jsx";
export function Climatologia(){
    return (
        <>
            <TitlePrincipal text="Climatologia" color="#00998D" />
            <NavMain listItems={navMainItemsClimatologia} textColor="#00998D" bgColor="rgba(0, 153, 140, 0.14)" activeColor="#F0F2F9" hoverColor="#fcfdff" />
            <ClimatologiaRoutes />
        </>
        
    )
}