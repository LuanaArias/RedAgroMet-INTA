import { Logo } from "./Logo/Logo.jsx"
import { LogoInta} from "./Logo/LogoInta.jsx"
import { NavBar } from "../Menu/NavBar/NavBar.jsx"
import './Header.css'

export function Header(){
  return(
    <header className="header__container">
      <div className="header__logo-container">
        <Logo />
      </div>
      <NavBar />
      <div className="header__logo-inta-container">
        <LogoInta />
      </div>
    </header>
  )
}