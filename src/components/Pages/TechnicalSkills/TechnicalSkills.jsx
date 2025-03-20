import html from './../../../icon/html.png'
import css from './../../../icon/css.png'
import js from './../../../icon/js.png'
import ts from './../../../icon/ts.png'
import java from './../../../icon/java.png'
import react from './../../../icon/react.png'
import MySql from './../../../icon/mysql.png'
import mongo from './../../../icon/mongo.png'
import git from './../../../icon/git.png'

import './TechnicalSkills.css'; // Asegúrate de que la ruta sea correcta


export const TechnicalSkills = () => {
    return (
    <section className='Technical'>

        <div className="technical-skills">

        <h2>Habilidades Técnicas</h2>
        <p class="skills-description">
            Como programador junior, manejo herramientas y tecnologías clave para el desarrollo web y software:
        </p>
        <ul class="skills-list">
            <li><strong>HTML y CSS:</strong> Creo estructuras web semánticas y diseños responsivos.</li>
            <li><strong>JavaScript y TypeScript:</strong> Desarrollo funcionalidades dinámicas y mantengo código robusto con tipos estáticos.</li>
            <li><strong>Java:</strong> Tengo experiencia en programación orientada a objetos y aplicaciones de consola.</li>
            <li><strong>React:</strong> Construyo interfaces modernas con componentes reutilizables y gestión de estado.</li>
            <li><strong>Git:</strong> Uso control de versiones para trabajo colaborativo y organización del código.</li>
            <li><strong>MySQL y MongoDB:</strong> Diseño y gestiono bases de datos relacionales y NoSQL.</li>
        </ul>
        <p class="skills-focus">
            Mi enfoque es seguir aprendiendo, escribir código limpio y resolver problemas de manera eficiente.
        </p>

        </div>

        <div className="technical-skills">

        <div className="title-Skills">
            <h3>HERRAMIENTAS TECNICAS.</h3>
        </div>
        
        <div className="conteiner-technical-skills">

            <div className="img-technical-skills">
                <img src={html} alt=""/>
                <progress className="progress" value="60" max="100"></progress>
            </div>

            <div className="img-technical-skills">
                <img src={css} alt=""/>
                <progress className="progress" value="50" max="100"></progress>
            </div>

            <div className="img-technical-skills">
                <img src={js} alt=""/>
                <progress className="progress" value="60" max="100"></progress>
            </div>

            <div className="img-technical-skills">
                <img src={ts} alt=""/>
                <progress className="progress" value="30" max="100"></progress>
            </div>

            <div className="img-technical-skills">
                <img src={java} alt=""/>
                <progress className="progress" value="65" max="100"></progress>
            </div>

            <div className="img-technical-skills">
                <img src={react} alt=""/>
                <progress className="progress" value="35" max="100"></progress>
            </div>

            <div className="img-technical-skills">
                <img src={git} alt=""/>
                <progress className="progress" value="55" max="100"></progress>
            </div>

            <div className="img-technical-skills">
                <img src={MySql} alt=""/>
                <progress className="progress" value="70" max="100"></progress>
            </div>

            <div className="img-technical-skills">
                <img src={mongo} alt=""/>
                <progress className="progress" value="40" max="100"></progress>
            </div>

        </div>
        </div>
            
    </section>
    )
}