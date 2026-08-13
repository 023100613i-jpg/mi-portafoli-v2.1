export default function About() {
  return (
    <section id="about" className="section section-white">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="section-underline"></div>
        <div className="about-grid">
          <div className="about-image">
            <img 
             src="/image/foto-perfil.jpg" 
                alt="Foto de perfil"
                width={400}
                height={400}
                style={{ borderRadius: "1rem", objectFit: "cover" }}
            />
          </div>
          <div>
            <p style={{ fontSize: "1.1rem", color: "#4a5568", lineHeight: "1.8" }}>
              Soy una estudiante de Ingeniería de Sistemas que esta terminando su carrera. Tengo un enfoque que combina la 
              creatividad con las mejores prácticas de desarrollo para entregar 
              resultados excepcionales.
            </p>
            <div className="about-info">
              <div className="about-item">
                <div className="label">📍 Ubicación</div>
                <div className="value">Cusco, Perú</div>
              </div>
              <div className="about-item">
                <div className="label">📧 Email</div>
                <div className="value">023100613i@uandina.edu.pe</div>
              </div>
              <div className="about-item">
                <div className="label">💼 Experiencia</div>
                <div className="value">Begginer</div>
              </div>
              <div className="about-item">
                <div className="label">✅ Disponibilidad</div>
                <div className="value" style={{ color: "#22c55e" }}>Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
