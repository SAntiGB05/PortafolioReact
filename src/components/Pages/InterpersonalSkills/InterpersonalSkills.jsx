import './AboutMe.css'
import Im from '../../../img/yotas.jpg'

export const InterpersonalSkills = () => {
    return (
        <div className='AboutMe'>
                    <div className="title">
                    <box-icon name='chevron-left' color='#f2e9dd' size="80px"></box-icon>
                    <h2>QUIEN SOY</h2> 
                    <box-icon name='chevron-right' color='#f2e9dd' size="80px"></box-icon>
                </div>
                <div className='view'>
                    <img src={Im} alt="" className='Im'/>
                    <div className='texto'>
                        <p>
                        Soy una persona apasionada y comprometida con el desarrollo de software, 
                        en constante búsqueda de crecimiento y mejora. Me motiva la actualización 
                        continua en tendencias, metodologías y mejores prácticas del sector. <br /><br /> Disfruto 
                        enfrentando desafíos, resolviendo problemas complejos y creando soluciones 
                        innovadoras. Valoro el trabajo en equipo y la colaboración, ya que el intercambio 
                        de conocimientos es clave para el crecimiento profesional. Mi entusiasmo por la 
                        tecnología me impulsa a explorar nuevas herramientas y enfoques para desarrollar 
                        productos de alta calidad y eficiencia.
                        </p>
                    </div>
                </div>
        
                <div className='final'> 
                    <box-icon name='chevron-left' color='#f2e9dd' size="80px"></box-icon>
                    <h2>/</h2>
                    <box-icon name='chevron-right' color='#f2e9dd' size="80px"></box-icon>
                </div>
                   
                </div>
                
                
    )
}