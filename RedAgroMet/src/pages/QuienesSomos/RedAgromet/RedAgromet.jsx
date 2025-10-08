import { SubtitlePrincipal } from "../../../components/Titles/SubtitlePrincipal/SubtitlePrincipal"
import { WhatsappIcon } from '../../../components/ui/WhatsappIcon.jsx'
import { InstagramIcon } from '../../../components/ui/InstagramIcon.jsx'
import { EstacionesTable } from "../../../components/EstacionesTable/EstacionesTable.jsx"
import './RedAgromet.css'
export function RedAgromet(){
    return(
        <>
        <div className="quienes-somos-container">
                <div className="quienes-somos-section">
                    <SubtitlePrincipal text="Red AgroMet" color="#631a3198" />
                    <div className="info-agromet-texto">
                        <p> AgroMet es la Red Agrometeorológica del INTA, un sistema nacional de monitoreo
                        que reúne información meteorológica y agrometeorológica proveniente de las
                        estaciones convencionales y automáticas del Instituto Nacional de Tecnología
                        Agropecuaria. Su objetivo es ofrecer datos actualizados y confiables sobre las
                        condiciones del tiempo y del clima que influyen en la producción agropecuaria de todo
                        el país.
                    </p>
                    <p>
                            A través de la red se registran y procesan variables como temperatura, precipitación,
                        humedad, radiación solar y viento, entre otras, fundamentales para el seguimiento de
                        cultivos, la gestión del riesgo climático y la toma de decisiones en el sector
                        agropecuario.
                    </p>
                    <p>
                            En esta página podés consultar la climatología de los observatorios convencionales de
                        INTA, junto con pronósticos de precipitación, temperatura, heladas, enfriamiento para
                        ovinos y estrés térmico (ITH). También encontrarás informes, herramientas y un
                        espacio educativo con conceptos básicos de agrometeorología y sus aplicaciones en
                        el manejo sostenible de los sistemas productivos.
                    </p>
                    </div>
                    
                        
                    <EstacionesTable /> 
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