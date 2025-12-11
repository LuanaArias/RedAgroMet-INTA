import { TitlePrincipal } from "../../components/Titles/TitlePrincipal/TitlePrincipal";
import { NavMain } from "../../components/Menu/NavMain/NavMain";
import { navMainItemsPronosticos } from "../../constants/navMainItemsPronosticos";
import { PronosticosRoutes } from '../../routes/PronosticosRoutes.jsx';
import './Pronosticos.css'
export function Pronosticos(){
    return (
        <>
            <TitlePrincipal text="Pronósticos" color="#E7B961" />
            <NavMain listItems={navMainItemsPronosticos} textColor="#E7B961" bgColor="rgba(216, 177, 5, 0.11)" activeColor="#f9f5f0ff" hoverColor="#fcfdff" />
            <div className="pronosticos-container">
                <PronosticosRoutes />
            </div>
            
        </>

    );
}