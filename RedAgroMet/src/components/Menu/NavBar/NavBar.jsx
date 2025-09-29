import { navBarItems } from '@constants/navBarItems.js'
import './NavBar.css'
import { ButtonHamburguer } from '../ui/ButtonHamburguer/ButtonHamburguer'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Item({item}){
  return(
    <NavLink className={
      ({ isActive }) =>
        `nav-bar__container-item${isActive ? ' active' : ''}`
      } 
      to={item.path}
      style={{backgroundColor: item.color}}
    >
      <img src={item.icon} alt={item.name} className="nav-bar__icon" />

      <span className='nav-bar__item-text'>{item.name}</span>
    </NavLink>
  )
}

export function NavBar(){
  const [showNavBar,setShowNavBar] = useState(false)

  return(
    <nav className="header__nav-bar-container">
      <div className="burguer__nav-bar-container">
        <ButtonHamburguer setShowNavBar= {setShowNavBar} showNavBar = {showNavBar}/>
      </div>
      <ul className={`nav-bar__contenainer-list ${showNavBar ? 'show' : 'hidden'}`}>
        {
          navBarItems.map((item,index) =>
          <Item key={index} item={item}/>
          )
        }
      </ul>
    </nav>
  )
}