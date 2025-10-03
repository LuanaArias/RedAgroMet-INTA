import { TitlePrincipal } from "../../components/Titles/TitlePrincipal/TitlePrincipal";
import { navMainItemsQuienesSomos } from "../../constants/navMainItemsQuienesSomos.js";
import { QuienesSomosRoutes } from '../../routes/QuienesSomosRoutes.jsx'
import { NavMain } from "../../components/Menu/NavMain/NavMain.jsx";
import './QuienesSomos.css'
export function QuienesSomos(){
    return (
        <>
            <TitlePrincipal text="Quiénes somos" color="#B9305B" />
            <NavMain listItems={navMainItemsQuienesSomos} textColor="#B9305B" bgColor="rgba(216, 54, 5, 0.11)" activeColor="#f9f5f0ff" hoverColor="#fcfdff" />
            <QuienesSomosRoutes />
        </>  
    );
}