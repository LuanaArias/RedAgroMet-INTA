import './NavMain.css';
import { NavLink } from 'react-router';

export function NavMain({ listItems, bgColor, textColor, activeColor, hoverColor }) { 
    const styleVariables = {
        '--nav-bg-color': bgColor || '#b7bcc48a',
        '--nav-text-color': textColor || '#000000', 
        '--active-color' : activeColor || '#b7bcc43b',
        '--hover-color' : hoverColor || '#b7bcc425'
    };

    return(
        <nav 
            className="nav-main__container" 
            style={styleVariables} 
        >
            <ul className="nav-main__list-container">
                {
                    listItems?.map((item, index) => 
                        <NavLink 
                            className={({ isActive }) => `nav-main__list-item-container ${isActive ? 'activeLink' : ''}`}
                            key={index} 
                            to={item.path}>
                            {item.name}
                        </NavLink>
                    )
                }
            </ul>
        </nav>
    );
}