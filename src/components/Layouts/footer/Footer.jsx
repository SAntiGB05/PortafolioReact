import './Footer.css'
import linkedin from '../../../icon/linkedin.png'
import github from '../../../icon/github.png'
import whatsapp from '../../../icon/social.png'


export const Footer = () => {
    return(
        <>
            <footer className="footer">
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/tu-usuario-linkedin" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://github.com/tu-usuario-github" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="social-icon" />
                    </a>
                    <a href="https://wa.me/tu-numero-whatsapp" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="WhatsApp" className="social-icon" />
                    </a>
                </div>
            </footer>
        </>
    )
}