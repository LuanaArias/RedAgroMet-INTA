import { useNavigate } from 'react-router-dom';

export function BotonPrueba() {
  const navigate = useNavigate();

  const irAClimatologia = () => {
    navigate('/climatologia'); 
  };

  return (
    <div>
      <button onClick={irAClimatologia}>Prueba</button>
    </div>
  );
}
