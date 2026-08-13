"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Mensaje enviado! Te contactaré pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section section-gray">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="section-underline"></div>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente? ¡Me encantaría saber de ti!
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Email</div>
                <div style={{ fontWeight: 600 }}>023100613i@uandina.edu.pe</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Teléfono</div>
                <div style={{ fontWeight: 600 }}>+51 986195166</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>Ubicación</div>
                <div style={{ fontWeight: 600 }}>Cusco, Perú</div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Envíame un mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn-send">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
