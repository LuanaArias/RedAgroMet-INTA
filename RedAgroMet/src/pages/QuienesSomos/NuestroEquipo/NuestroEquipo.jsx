import { LISTA_INTEGRANTES_TEAM, LISTA_RESPONSABLES_OBSERVACIONES } from "../../../constants/listaIntegrantesEquipo.js"
import { TeamCard } from "../../../components/Cards/TeamCard/TeamCard"
import './NuestroEquipo.css'
import { SubtitlePrincipal } from "../../../components/Titles/SubtitlePrincipal/SubtitlePrincipal"
export function NuestroEquipo(){
    const mainTeam = LISTA_INTEGRANTES_TEAM
    return(
        <>
            <SubtitlePrincipal text="Nuestro equipo" color="#631a3198" />
            <div className="main-team-members-grid">
                {mainTeam.map(member => (
                    <TeamCard 
                        key={member.id}
                        name={member.name}
                        title={member.title}
                        activity={member.activity}
                        photo={member.photo}
                    />
                ))}
            </div>
            <div className="section-divider"></div>

            <h2 className="team-section-title">Responsables de Observaciones y Mapeo</h2>
            <div className="other-responsables-container">
                <div className="other-responsables-block">
                    <p className="block-instruction">
                        Responsables de observaciones meteorológicas, carga de datos y mapeo:
                    </p>
                    <ul className="responsable-list">
                        {LISTA_RESPONSABLES_OBSERVACIONES.map(person => (
                            <li key={person.id}>{person.name}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
        
    )
}