import { VideoCard } from '../../components/Cards/EducacionCard/VideoCard/VideoCard.jsx';
import { LinkCard } from '../../components/Cards/EducacionCard/LinkCard/LinkCard.jsx';
import { VIDEOS_EDUCATIVOS, LINKS_INFORMATIVOS } from '../../mock/educacion/educacionMockeo.jsx'; 
import './Educacion.css'; 
import { TitlePrincipal } from '../../components/Titles/TitlePrincipal/TitlePrincipal.jsx';
import { IconVideoEducacion } from '../../components/ui/IconsEducacion/IconVideoEducacion';
import { IconLinkEducacion } from '../../components/ui/IconsEducacion/IconLinkEducacion';

export function Educacion() {
    return (
        <>
        <TitlePrincipal text="Educación" color="#D7683B"/>
        <div className="info-main-container">
            <div className="info-column video-column">
                <h2 className="column-title">
                    <IconVideoEducacion />
                    Videos educativos
                </h2>
                <div className="card-grid">
                    {VIDEOS_EDUCATIVOS.map(video => (
                        <VideoCard 
                            key={video.id}
                            {...video} 
                        />
                    ))}
                </div>
            </div>

            <div className="info-column link-column">
                <h2 className="column-title">
                    <IconLinkEducacion />
                    Links informativos
                </h2>
                <div className="card-grid">
                    {LINKS_INFORMATIVOS.map(link => (
                        <LinkCard 
                            key={link.id}
                            {...link}
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
        
    );
}