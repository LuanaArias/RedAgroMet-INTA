import { SubtitlePrincipal } from "../../../components/Titles/SubtitlePrincipal/SubtitlePrincipal"
import { WhatsappIcon } from '../../../components/ui/WhatsappIcon.jsx'
import { InstagramIcon } from '../../../components/ui/InstagramIcon.jsx'
export function RedAgromet(){
    return(
        <>
        <div className="quienes-somos-container">
                <div className="quienes-somos-section">
                    <SubtitlePrincipal text="Red AgroMet" color="#631a3198" />
                    
                </div>
                <div className="quienes-somos-section">
                    <SubtitlePrincipal text="Nuestro equipo" color="#631a3198" />
                </div>
                <div className="quienes-somos-section">
                    <SubtitlePrincipal text="Encontranos en:" color="#631a3198" />
                    <div className="redes-quienes-somos-items">
                        <a href="https://www.whatsapp.com/channel/0029Vb69IuXEQIafXh3cNZ3s" target="_blank" rel="noopener noreferrer">
                            <WhatsappIcon />
                            <p>Canal de WhatsApp</p>
                        </a>
                    </div>
                    <div className="redes-quienes-somos-items">
                        <a href="https://www.instagram.com/inta.argentina/?hl=es" target="_blank" rel="noopener noreferrer" >
                            <InstagramIcon />
                            <p>@inta.argentina</p>
                        </a>
                    </div>
                </div>   
            </div>
        </>
    )
}