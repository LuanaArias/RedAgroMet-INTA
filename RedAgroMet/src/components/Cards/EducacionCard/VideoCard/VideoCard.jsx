import './VideoCard.css'
import '../CardBase.css'
export function VideoCard({ title, content, timeOrLink, icon, buttonUrl }) {
    const finalButtonText = 'Ver Video';
    return (
        <div className="educacion-card video-card">
            <div className="card-header">
                <div className="card-icon">{icon}</div> 
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-content">
                <p>{content}</p>
            </div>
            <div className="card-footer video-card-footer"> 
                <span className="video-time-link">{timeOrLink}</span> 
                {buttonUrl && (
                    <a 
                        href={buttonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="card-button video-button" 
                    >
                        {finalButtonText}
                    </a>
                )}
            </div>
        </div>
    );
}