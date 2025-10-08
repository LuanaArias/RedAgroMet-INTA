import './InputCheckbox.css'; 
import { VARIABLES_CLIMA } from '../../../constants/listaClimatologia';

const CheckboxesVariables = ({
    variablesSeleccionadas,
    handleVariableChange,
    VARIABLES_CLIMA
}) => (
    <div className='inputGenericos-checkboxes-container'>
        {Object.keys(VARIABLES_CLIMA).map(key => (
            <label key={key} className="inputGenericos-checkbox-label">
                <input
                    type="checkbox"
                    name={key}
                    checked={variablesSeleccionadas[key]}
                    onChange={handleVariableChange}
                    className="inputGenericos-checkbox-input"
                />
                {VARIABLES_CLIMA[key].icono} {VARIABLES_CLIMA[key].label}
            </label>
        ))}
    </div>
);

export default CheckboxesVariables;