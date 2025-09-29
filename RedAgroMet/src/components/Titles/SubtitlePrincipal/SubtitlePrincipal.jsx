import './SubTitlePrincipal.css'
export function SubtitlePrincipal({text, color}){
    return(
        <h3 className="sub-title-principal__container" style={{ color: color }}>
            {text}
        </h3>
    )
}