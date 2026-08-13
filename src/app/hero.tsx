"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <span className="navbar-brand">Mi Portafolio</span>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </div>
        <button className="mobile-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        {isMenuOpen && (
          <div className="mobile-menu open">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      <header className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Hola, Soy <br />
                <span>Astrit Fernanda Luza Grajeda</span>
              </h1>
              <p className="hero-description">
                Soy una estudiante de Ingeniería de Sistemas que está terminando su carrera. 
                Tengo un enfoque que combina la creatividad con las mejores prácticas de 
                desarrollo para entregar resultados excepcionales.
              </p>

              <div className="cta-group">
                <a href="#projects" className="btn-primary">Ver Proyectos</a>
                <a href="#contact" className="btn-secondary">Contáctame</a>
              </div>
            </div>

            <div className="hero-image">
              <div style={{ position: "relative", width: "100%", maxWidth: "400px", margin: "0 auto" }}>
                <Image
                  src="/image/foto-perfil.jpg"
                  alt="Foto de perfil"
                  width={400}
                  height={400}
                  style={{ borderRadius: "1rem", objectFit: "cover" }}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
