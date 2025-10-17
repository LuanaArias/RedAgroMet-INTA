import './Footer.css'; 
import { Logo } from '../Header/Logo/Logo';
import { LogoInta } from '../Header/Logo/LogoInta';
import { InstagramIcon } from '../ui/InstagramIcon';
import { WhatsappIcon } from '../ui/WhatsappIcon';
const Footer = () => {
    const whatsappLink = "https://www.whatsapp.com/channel/0029Vb69IuXEQIafXh3cNZ3s"; 
    const instagramLink = "https://www.instagram.com/inta.argentina/?hl=es"; 
    return (
        <footer className="footer-fijo">
            <div className="footer-contenido">
                <Logo />
                {/* Enlaces a Redes Sociales */}
                <div className="redes-sociales">
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <InstagramIcon />
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <WhatsappIcon />
                    </a>
                </div>
                <LogoInta />
            </div>
        </footer>
    );
};

export default Footer;