import './EducacionCard.css'

export function EducacionCard({ title, content, timeOrLink, icon, buttonUrl, buttonText = 'Visitar sitio' }) {
    
    // 1. Identificador de acción: Siempre que haya una URL, hay un botón.
    const hasActionUrl = buttonUrl && buttonUrl.length > 0;
    
    // 2. Clasificación visual: Si tiene tiempo, es un video.
    const isVideoCard = timeOrLink && timeOrLink.length > 0;
    
    // 3. Determinar el texto del botón basado en la clasificación.
    const finalButtonText = buttonText === 'Visitar sitio' && isVideoCard 
                            ? 'Ver Video' 
                            : buttonText;

    return (
        <div className={`info-card ${isVideoCard ? 'video-card' : 'link-card'}`}>
            <div className="card-header">
                <div className="card-icon">{icon}</div> 
                <h3 className="card-title">{title}</h3>
            </div>
            
            <div className="card-content">
                <p>{content}</p>
            </div>
            
            <div className="card-footer">
                {hasActionUrl ? (
                    <a 
                        href={buttonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`card-button ${isVideoCard ? 'video-button' : 'link-button'}`}
                    >
                        {finalButtonText}
                    </a>
                ) : (
                    <span className="card-time-link">{timeOrLink}</span>
                )}
            </div>
        </div>
    );
}