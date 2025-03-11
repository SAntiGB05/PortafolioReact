import { NavLink } from "react-router-dom";
import { Home } from "../Pages/Home";
import { TechnicalSkills } from "../Pages/TechnicalSkills";
import { InterpersonalSkills } from "../Pages/InterpersonalSkills";
import { Experience } from "../Pages/Experience";

export const ItemNavbar = () => {
  return (
    <ul>
      <li><NavLink to="/">Inicio</NavLink></li>
      <li><NavLink to="/InterpersonalSkills">Habilidades personales</NavLink></li>
      <li><NavLink to="/TechnicalSkills">Habilidades Técnicas</NavLink></li>
      <li><NavLink to="/Experience">Experiencia</NavLink></li>
    </ul>
  );
};
