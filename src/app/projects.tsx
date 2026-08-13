// src/app/projects.tsx
import { projectsData } from "./projects/data";

export default function Projects() {
  return (
    <section id="projects" className="section section-gray">
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          Explora algunos de mis proyectos más recientes donde he aplicado
          mis habilidades para crear soluciones innovadoras.
        </p>
        
        <div className="grid-2">
          {projectsData.map((project) => (
            <a 
              key={project.id} 
              href={`/projects/${project.id}`} 
              className="card" 
              style={{ textDecoration: "none", color: "inherit", display: "block", cursor: "pointer" }}
            >
              <img src={project.image} alt={project.title} />
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <div>
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div style={{ marginTop: "1rem", color: "#2563eb", fontWeight: 500 }}>
                  Ver detalles →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
