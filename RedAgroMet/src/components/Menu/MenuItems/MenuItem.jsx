import './MenuItem.css';

const MenuItem = ({ isOpen }) => {
  return (
    <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
      <li className="menu-item climatologia-item">
        <img src="../../../assets/icons/IconsNavBar/Clima.png" alt="Logo de climatologia" />
        <span>Climatología</span>
      </li>
      <li className="menu-item pronosticos-item">
        <img src="../../../assets/icons/IconsNavBar/ENSO.png" alt="Logo de pronósticos" />
        <span>Pronósticos</span>
      </li>
      <li className="menu-item informes-item">
        <img src="../../../assets/icons/IconsNavBar/Girasol.png" alt="Logo de informes" />
        <span>Pronósticos</span>
      </li>
      <li className="menu-item educacion-item">
        <img src="../../../assets/icons/IconsNavBar/Lluvias.png" alt="Logo de educación" />
        <span>Educación</span>
      </li>
      <li className="menu-item quienes-somos-item">
        <img src="../../../assets/icons/IconsNavBar/Celular.png" alt="Logo de quienes somos" />
        <span>Quiénes somos</span>
      </li>
    </ul>
  );
};

export default MenuItem;