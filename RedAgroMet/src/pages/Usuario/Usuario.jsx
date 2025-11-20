import { IconAdministrador } from "../../components/ui/IconAdministrador/IconAdministrador"
import { TitlePrincipal } from "../../components/Titles/TitlePrincipal/TitlePrincipal"
import { SubirContenido } from "../SubirContenido/SubirContenido"
import './Usuario.css'

export function Usuario(){
    return(
        <>
            <div className="header-usuario-container">
                <TitlePrincipal text="Panel de usuario" color="#46658C" />
                <button>
                    <IconAdministrador />
                </button>
            </div>
            <SubirContenido />
        </>  
    )
}