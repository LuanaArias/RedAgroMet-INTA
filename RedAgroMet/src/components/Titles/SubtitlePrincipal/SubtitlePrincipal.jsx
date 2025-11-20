import './SubtitlePrincipal.css'
export function SubtitlePrincipal({text, color}){
    return(
        <div className="subtitle-principal-container">
            <h3 style={{ color: color }}>
                {text}
            </h3>
        </div>
        
    )
}