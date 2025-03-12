import { NavLink } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { TechnicalSkills } from "../Pages/TechnicalSkills/TechnicalSkills";
import { InterpersonalSkills } from "../Pages/InterpersonalSkills/InterpersonalSkills";
import { Experience } from "../Pages/Experience/Experience";

export const ItemNavbar = () => {
  return (
    <>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><NavLink to="/">Inicio</NavLink></li>
        <li className="nav-item"><NavLink to="/InterpersonalSkills">Habilidades personales</NavLink></li>
        <li className="nav-item"><NavLink to="/TechnicalSkills">Habilidades Técnicas</NavLink></li>
        <li className="nav-item"><NavLink to="/Experience">Experiencia</NavLink></li>
      </ul>
    </nav>
    </>
  );
};
