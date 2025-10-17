import { navBarItems } from '@constants/navBarItems.js'
import './NavBar.css'
import { NavLink } from 'react-router-dom';

function Item({ item, isCollapsed }) {
    const IconComponent = typeof item.icon === 'function' ? item.icon : null;
    return (
        <NavLink className={
            ({ isActive }) =>
                `nav-bar__container-item${isActive ? ' active' : ''}`
        }
        to={item.path}
        style={{ backgroundColor: item.color }}
        >
            {IconComponent ? (
                <IconComponent className="nav-bar__icon" />
            ) : (
                <img src={item.icon} alt={item.name} className="nav-bar__icon" />
            )}
            <span className='nav-bar__item-text'>{item.name}</span>
        </NavLink>
    );
}


export function NavBar({isCollapsed}){

    const visibilityClass = isCollapsed ? ' hidden' : ' show';

  return(
    <ul className={`nav-bar__container-list${visibilityClass}`}> 
      {
        navBarItems.map((item,index) =>
        <Item key={index} item={item} isCollapsed={isCollapsed}/> 
        )
      }
    </ul>
  )
}