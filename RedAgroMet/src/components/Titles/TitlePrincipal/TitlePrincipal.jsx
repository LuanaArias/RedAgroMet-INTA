import './TitlePrincipal.css';

export function TitlePrincipal({ text, color }) { 
    return (
        <div className="titlePrincipal-div-container">
            <h2 
            className='title-principal__container' 
            style={{ color: color }}
            >
                {text}
            </h2>
        </div>
        
    );
}