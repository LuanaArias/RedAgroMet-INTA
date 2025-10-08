import './VideoCard.css'
export function VideoCard({ title, content, timeOrLink, icon, buttonUrl }) {

    const finalButtonText = 'Ver Video';

    return (
        <div className="educacion-video-card video-card">
            <div className="educacion-video-card-header">
                <div className="educacion-video-card-icon">{icon}</div> 
                <h3 className="educacion-video-card-title">{title}</h3>
            </div>
            
            <div className="educacion-video-card-content">
                <p>{content}</p>
            </div>
            
            <div className="educacion-video-card-footer">
                <span className="educacion-video-card-time-link">{timeOrLink}</span>
                {buttonUrl && (
                    <a 
                        href={buttonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="educacion-video-card-button educacion-video-button" 
                    >
                        {finalButtonText}
                    </a>
                )}
            </div>
        </div>
    );
}