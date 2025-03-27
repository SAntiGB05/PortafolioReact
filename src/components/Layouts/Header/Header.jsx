import './Header.css'
import { NavLink } from "react-router-dom";
import logo from '../../../img/logo.png'


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
                    <li><NavLink to="/TechnicalSkills">Habilidades</NavLink></li>
                    <li><NavLink to="/Experience">Proyectos</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}