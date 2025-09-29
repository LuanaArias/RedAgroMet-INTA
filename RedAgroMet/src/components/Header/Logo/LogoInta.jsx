import logoINTA from '@assets/imgs/LogoINTA.png';
import './Logo.css'
export function LogoInta(){
  return(
    <div className="header__logo-container">
      <img src={logoINTA} alt="Logo del INTA-CIRN" />
    </div>
  )
}