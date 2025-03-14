import Img from '../../../img/yotas2.webp'
import './Home.css'


export const Home = () => {
    return (
        <div className='Home'>
            <img src={Img} alt="" className='Img'/>
        <div className="title">
            <box-icon name='chevron-left' color='#f2e9dd' size="60px"></box-icon>
            <h2>Santiago Gonzalez  /</h2> 
            <box-icon name='chevron-right' color='#f2e9dd' size="60px"></box-icon>
        </div>
        <div className='view'>
            
            <div className='text-2'>
                <h3>
                Desarrollador FullStack & UI/UX Designer
                </h3>
                <div className='Buttons'>
                    <button className='btt-2'>Proyectos</button>
                    <button className='btt-1'>Sobre Mi</button>
                </div>
            </div>
        </div>
        </div>
    )
}