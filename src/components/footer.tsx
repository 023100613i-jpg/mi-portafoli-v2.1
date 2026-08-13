export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {currentYear} [Tu Nombre]. Todos los derechos reservados.</span>
        <div className="footer-links">
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:tu@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
