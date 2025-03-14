import './Home.css'
import Im from '../../../img/yotas.jpg'


export const Home = () => {
    return (
        <div className='Home'>
            <div className="title">
            <box-icon name='chevron-left' color='#f2e9dd' size="80px"></box-icon>
            <h2>Santiago Gonzalez</h2> 
            <box-icon name='chevron-right' color='#f2e9dd' size="80px"></box-icon>
        </div>
        <div className='view'>
            <img src={Im} alt="" className='Im'/>
            <div className='texto'>
                <h3>
                Soy una persona dedicada y apasionada por el desarrollo de software, siempre en busca de 
                oportunidades para crecer y mejorar mis habilidades. Mi compromiso con la mejora continua 
                y mi entusiasmo por el mundo de la tecnología me impulsan a estar al tanto de las últimas 
                tendencias y prácticas en el campo del desarrollo web y de software.
                </h3>
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