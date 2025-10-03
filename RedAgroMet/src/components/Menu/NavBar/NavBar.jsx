import { navBarItems } from '@constants/navBarItems.js'
import './NavBar.css'
import { NavLink } from 'react-router-dom';

function Item({item, isCollapsed}){
  return(
    <NavLink className={
      ({ isActive }) =>
        `nav-bar__container-item${isActive ? ' active' : ''}`
      } 
      to={item.path}
      style={{backgroundColor: item.color}}
    >
      <img src={item.icon} alt={item.name} className="nav-bar__icon" />

      {/* El texto se ocultará solo con CSS basado en la clase del padre Header */}
      <span className='nav-bar__item-text'>{item.name}</span>
    </NavLink>
  )
}

// Recibe la propiedad isCollapsed del componente Header
export function NavBar({isCollapsed}){
  return(
    // Ya no se necesita la clase 'show'/'hidden', el control de ancho y texto es del Header
    <ul className="nav-bar__contenainer-list"> 
      {
        navBarItems.map((item,index) =>
        // Pasamos isCollapsed solo si el Item lo necesitara, aunque se manejará con CSS
        <Item key={index} item={item} isCollapsed={isCollapsed}/> 
        )
      }
    </ul>
  )
}