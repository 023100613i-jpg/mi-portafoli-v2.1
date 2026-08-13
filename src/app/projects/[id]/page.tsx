import { notFound } from "next/navigation";
import { projectsData } from "../data";

// Generar rutas estáticas para todos los proyectos
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

// Función para encontrar el proyecto por ID
function getProject(id: string) {
  return projectsData.find((p) => p.id === id);
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id);

  // Si el proyecto no existe, mostrar 404
  if (!project) {
    notFound();
  }

  return (
    <div className="container" style={{ paddingTop: "100px", paddingBottom: "3rem" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
        <a href="/" style={{ color: "#6b7280", textDecoration: "none" }}>
          ← Inicio
        </a>
        <span style={{ color: "#6b7280" }}>/</span>
        <a href="/projects" style={{ color: "#2563eb", fontWeight: 500, textDecoration: "none" }}>
          Proyectos
        </a>
        <span style={{ color: "#6b7280" }}>/</span>
        <span style={{ color: "#1a202c" }}>{project.title}</span>
      </div>

      <div className="project-detail-grid">
        {/* Imagen del proyecto */}
        <div>
          <img 
            src={project.image} 
            alt={project.title}
            style={{ width: "100%", borderRadius: "1rem", boxShadow: "0 20px 40px -12px rgba(0,0,0,0.2)" }}
          />
        </div>

        {/* Información del proyecto */}
        <div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "0.5rem", color: "#1a202c" }}>
            {project.title}
          </h1>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>

          <p style={{ fontSize: "1.1rem", color: "#4a5568", lineHeight: "1.8", marginBottom: "1.5rem" }}>
            {project.fullDescription}
          </p>

          {/* Detalles del proyecto */}
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "1rem", 
            marginBottom: "2rem"
          }}>
            <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.75rem" }}>
              <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Cliente</div>
              <div style={{ fontWeight: 600 }}>{project.client}</div>
            </div>
            <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.75rem" }}>
              <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Rol</div>
              <div style={{ fontWeight: 600 }}>{project.role}</div>
            </div>
            <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.75rem" }}>
              <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Fecha</div>
              <div style={{ fontWeight: 600 }}>{project.date}</div>
            </div>
            <div style={{ background: "#f8fafc", padding: "1rem", borderRadius: "0.75rem" }}>
              <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Tecnologías</div>
              <div style={{ fontWeight: 600 }}>{project.technologies.length} tecnologías</div>
            </div>
          </div>

          {/* Tecnologías usadas */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Tecnologías utilizadas</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.technologies.map((tech) => (
                <span key={tech} style={{ 
                  background: "#eff6ff", 
                  color: "#2563eb", 
                  padding: "0.25rem 0.75rem", 
                  borderRadius: "9999px", 
                  fontSize: "0.85rem",
                  fontWeight: 500
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Características */}
          <div style={{ marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Características principales</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {project.features.map((feature, index) => (
                <li key={index} style={{ padding: "0.25rem 0", color: "#4a5568" }}>
                  ✅ {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Ver Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Ver Código
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}