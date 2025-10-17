import './LinkCard.css'
import '../CardBase.css'
export function LinkCard({ title, content, icon, buttonUrl, buttonText = 'Visitar sitio' }) {
    return (
        <div className="educacion-card link-card">
            <div className="card-header">
                <div className="card-icon">{icon}</div> 
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-content">
                <p>{content}</p>
            </div>
            <div className="card-footer link-card-footer"> 
                {buttonUrl && (
                    <a 
                        href={buttonUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="card-button link-button" 
                    >
                        {buttonText}
                    </a>
                )}
            </div>
        </div>
    );
}