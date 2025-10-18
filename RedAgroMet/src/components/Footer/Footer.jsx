import './Footer.css'; 
import { Logo } from '../Header/Logo/Logo';
import { LogoInta } from '../Header/Logo/LogoInta';
import { InstagramIcon } from '../ui/InstagramIcon';
import { WhatsappIcon } from '../ui/WhatsappIcon';
const Footer = ({ isCollapsed }) => {
    const whatsappLink = "https://www.whatsapp.com/channel/0029Vb69IuXEQIafXh3cNZ3s"; 
    const instagramLink = "https://www.instagram.com/inta.argentina/?hl=es"; 
    const footerClass = `footer-fijo ${isCollapsed ? 'collapsed' : ''}`;
    return (
        <footer className={footerClass}>
            <div className="footer-contenido">
                <Logo />
                {/* Enlaces a Redes Sociales */}
                <div className="footer-redes-sociales">
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <InstagramIcon />
                        <p>Instagram</p>
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <WhatsappIcon />
                        <p>WhatsApp</p>
                    </a>
                </div>
                <LogoInta />
            </div>
        </footer>
    );
};

export default Footer;