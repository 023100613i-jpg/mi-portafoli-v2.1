"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      {/* Navbar */}
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

      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Hola, Soy Astrit Fernanda <br />
                <span>Luza Grajeda</span>
              </h1>
              <p className="hero-description">
                Soy una desarrolladora web apasionada, donde la creatividad se encuentra
                con la funcionalidad para crear experiencias digitales únicas.
              </p>
            </div>

            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center" 
                alt="Desarrollo web"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
