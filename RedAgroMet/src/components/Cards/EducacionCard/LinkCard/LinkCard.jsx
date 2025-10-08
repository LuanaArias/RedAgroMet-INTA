import './LinkCard.css'
export function LinkCard({ title, content, icon, buttonUrl, buttonText = 'Visitar sitio' }) {
    return (
        <div className="educacion-card link-card">
            <div className="card-header">
                <div className="card-icon">{icon}</div> 
                <h3 className="card-title">{title}</h3>
            </div>
            
            <div className="educacion-link-card-content">
                <p>{content}</p>
            </div>
            
            <div className="educacion-link-card-footer">
                {buttonUrl && (
                    <a 
                        href={buttonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="educacion-link-card-button educacion-link-button" 
                    >
                        {buttonText}
                    </a>
                )}
            </div>
        </div>
    );
}