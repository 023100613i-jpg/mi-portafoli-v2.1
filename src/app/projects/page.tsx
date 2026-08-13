// src/app/projects/page.tsx
import Link from "next/link";
import { projectsData } from "./data";

export default function ProjectsList() {
  return (
    <div className="container" style={{ paddingTop: "100px", paddingBottom: "3rem" }}>
      <h1 className="section-title">Todos los Proyectos</h1>
      <div className="section-underline"></div>
      <p className="section-subtitle">
        Explora todos mis proyectos y descubre las soluciones que he creado.
      </p>
      
      <div className="grid-2">
        {projectsData.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="card" style={{ textDecoration: "none", color: "inherit" }}>
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
          </Link>
        ))}
      </div>
    </div>
  );
}
