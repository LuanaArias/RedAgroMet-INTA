import '../InputBase.css'

import '../InputBase.css'

export function InputTextoLibre({ 
  text,           // Texto de la etiqueta
  color,          // Color opcional para la etiqueta
  handleChange,   // Función para manejar cambios
  value,          // Valor actual
  name,           // Nombre del campo
  type = 'text',  // Tipo de input (por defecto "text")
  placeholder     
}) {
  const labelStyle = color ? { color } : {};

  return (
    <div className='inputGenericos-input-container'>
      <label htmlFor={name} style={labelStyle}>{text}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
