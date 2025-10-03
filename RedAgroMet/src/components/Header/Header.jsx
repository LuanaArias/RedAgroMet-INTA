// src/components/Header/Header.jsx (Asegurando la estructura)

import { Logo } from "./Logo/Logo.jsx"
import { LogoInta} from "./Logo/LogoInta.jsx"
import { NavBar } from "../Menu/NavBar/NavBar.jsx"
import { ButtonHamburguer } from "../Menu/ui/ButtonHamburguer/ButtonHamburguer.jsx"
import { useState } from 'react'
import './Header.css'

export function Header(){
  const [isCollapsed, setIsCollapsed] = useState(true) 

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  }

  return(
    <header className={`header__container ${isCollapsed ? 'collapsed' : ''}`}> 
      <div className="header__top-section">
        <div className="header__logo-container"> 
          <Logo isCollapsed={isCollapsed} /> 
        </div>

        <div className="header__hamburguer-container">
          <ButtonHamburguer setShowNavBar={toggleCollapse} showNavBar={!isCollapsed} />
        </div>
      </div>

      <NavBar isCollapsed={isCollapsed} />
      
      <div className="header__logo-inta-container">
        <LogoInta isCollapsed={isCollapsed} /> 
      </div>
    </header>
  )
}