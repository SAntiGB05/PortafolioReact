import './Header.css'
import { NavLink } from "react-router-dom";
import logo from '../../../img/logo.jpeg'


export const Header = () => {
    return(
        <>
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" className='logo-img' />
                <h1>Portfolio</h1>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/InterpersonalSkills">Habilidades personales</NavLink></li>
                    <li><NavLink to="/TechnicalSkills">Habilidades Técnicas</NavLink></li>
                    <li><NavLink to="/Experience">Experiencia</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}