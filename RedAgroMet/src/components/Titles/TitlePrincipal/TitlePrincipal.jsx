import './TitlePrincipal.css';

export function TitlePrincipal({ text, color }) { 
    return (
        <h2 
            className='title-principal__container' 
            style={{ color: color }}
        >
            {text}
        </h2>
    );
}