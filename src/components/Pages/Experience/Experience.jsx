import './Experience.css';

export const Experience = () => {
    const projects = [
        {
            id: 1,
            name: "CRUD en C#",
            image: "/images/crud-csharp.jpg",
            link: "https://github.com/tuusuario/crud-csharp"
        },
        {
            id: 2,
            name: "E-Commerce en React",
            image: "/images/ecommerce-react.jpg",
            link: "https://github.com/tuusuario/ecommerce-react"
        },
        {
            id: 3,
            name: "Sistema de Inventario",
            image: "/images/inventario.jpg",
            link: "https://github.com/tuusuario/sistema-inventario"
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
