import { TitlePrincipal } from "../../components/Titles/TitlePrincipal/TitlePrincipal";
import { CarrouselInicio } from "../../components/CarrouselInicio/CarrouselInicio";
export function Inicio(){
    return (
        <>
            <TitlePrincipal text="Inicio" color="#93A746" />
            <CarrouselInicio />
        </>
        
    );
}