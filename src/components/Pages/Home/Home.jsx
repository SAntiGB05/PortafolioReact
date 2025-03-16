import Img from '../../../img/yotas2.webp';
import { InterpersonalSkills } from '../InterpersonalSkills/InterpersonalSkills';
import './Home.css';

export const Home = () => {
  // Función para hacer scroll hasta InterpersonalSkills
  const scrollToInterpersonalSkills = () => {
    const element = document.getElementById('interpersonal-skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
    }
  };

  return (
    <div className='container-home'>
      <div className='Home'>
        <img src={Img} alt="" className='Img' />
        <div className="title">
          <box-icon name='chevron-left' color='#f2e9dd' size="60px"></box-icon>
          <h2>Santiago Gonzalez  /</h2>
          <box-icon name='chevron-right' color='#f2e9dd' size="60px"></box-icon>
        </div>
        <div className='view'>
          <div className='text-2'>
            <p className='p-title'>
              Desarrollador FullStack & UI/UX Designer
            </p>
            <div className='Buttons'>
              <button className='btt-2'>Proyectos</button>
              {/* Botón "Sobre Mí" con scroll suave */}
              <button className='btt-1' onClick={scrollToInterpersonalSkills}>Sobre Mí</button>
            </div>
          </div>
        </div>
      </div>
      <div id="interpersonal-skills">
        <InterpersonalSkills />
      </div>
    </div>
  );
};