const skills = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-white">
      <div className="container">
        <h2 className="section-title">Mis Habilidades</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          Tecnologías y herramientas con las que trabajo diariamente.
        </p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: skill.level + "%" }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
