import '../InputBase.css'

export function InputSelect({text, color, listaDeOpciones, handleChange, value, name}){
    const labelStyle = color ? { color: color } : {};
    return (
        <div className='input-container'>
            <label htmlFor={text} style={labelStyle}>{text}</label>
            <select name={name} id={text} value={value} onChange={handleChange}>
                {listaDeOpciones.map( (o,index ) => <option key={index} value={o.id}> {o.descripcion} </option>)}
            </select>
        </div>
    )
}