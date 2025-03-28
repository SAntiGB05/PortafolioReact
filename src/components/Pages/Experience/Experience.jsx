import './Experience.css';
import atlas from '../../../img/atlas.png'
import EdDravel from '../../../img/Ed-Dravel.png'
import musicstore from '../../../img/music-store.png'
import diccionariotraductor from '../../../img/diccionario-traductor.png'

export const Experience = () => {
    const projects = [
        {
            id: 1,
            name: "Atlas",
            image: [atlas],
            link: "https://atlas-ten-beta.vercel.app/"
        },
        {
            id: 2,
            name: "Ed-Dravel",
            image: [EdDravel],
            link: "https://taller-rozo.vercel.app/"
        },
        {
            id: 3,
            name: "music-store",
            image: [musicstore],
            link: "https://music-store-khaki.vercel.app/"
        },
        {
            id: 4,
            name: "diccionario-traductor",
            image: [diccionariotraductor],
            link: "https://diccionario-traductor.vercel.app/"
        }
    ];

    return (
        <div className="projects-container">
            {projects.map((project) => (
                <div key={project.id} className="card">
                    <img src={project.image} alt={project.name} className="image" />
                    <h3 className="name">{project.name}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="button">Ver Proyecto</a>
                </div>
            ))}
        </div>
    );
};
