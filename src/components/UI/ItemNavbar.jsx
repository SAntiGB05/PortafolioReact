import { NavLink } from "react-router-dom"

export const ItemNavbar = () => {
    return(
    <>
    <ul>

        <li><NavLink to={<Home />}>Inicio</NavLink></li>
        <li><NavLink to={<InterpersonalSkills />}>Habilidades personales</NavLink></li>
        <li><NavLink to={<TechnicalSkills />}>Habilidades Tecnicas</NavLink></li>
        <li><NavLink to={<Experience />}>Experiencia</NavLink></li>

    </ul>
    </>    
    )
}