// src/app/projects/data.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  date: string;
  client: string;
  role: string;
  technologies: string[];
  link?: string;
  github?: string;
  features: string[];
}

export const projectsData: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico con carrito de compras, pagos y panel de administración.",
    fullDescription: "Una plataforma completa de comercio electrónico desarrollada con tecnologías modernas. Incluye sistema de autenticación, carrito de compras, procesamiento de pagos, panel de administración y análisis de ventas en tiempo real.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    date: "2024",
    client: "Tienda Online S.A.",
    role: "Desarrollador Full Stack",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
    features: [
      "Sistema de autenticación con JWT",
      "Carrito de compras persistente",
      "Procesamiento de pagos con Stripe",
      "Panel de administración",
      "Dashboard de ventas en tiempo real",
      "Sistema de inventario"
    ]
  },
  {
    id: "mobile-app-design",
    title: "Mobile App Design",
    description: "Aplicación móvil para descubrir restaurantes locales con recomendaciones personalizadas.",
    fullDescription: "Aplicación móvil que utiliza inteligencia artificial para recomendar restaurantes basados en preferencias del usuario, ubicación y reseñas. Incluye sistema de reseñas, fotos y mapas interactivos.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    tags: ["Flutter", "Firebase"],
    date: "2024",
    client: "FoodTech Startup",
    role: "Desarrollador Mobile",
    technologies: ["Flutter", "Firebase", "Google Maps API", "TensorFlow", "Dart"],
    features: [
      "Recomendaciones personalizadas con IA",
      "Sistema de reseñas y calificaciones",
      "Mapas interactivos",
      "Chat en tiempo real",
      "Notificaciones push",
      "Modo offline"
    ]
  },
  {
    id: "landing-page-fitness",
    title: "Landing Page Fitness",
    description: "Landing page promocional para campaña de verano con formulario de registro.",
    fullDescription: "Landing page de alto impacto diseñada para una campaña de marketing de verano. Incluye animaciones, formulario de registro, integración con email marketing y analytics para seguimiento de conversiones.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    tags: ["Next.js", "Tailwind"],
    date: "2023",
    client: "Gym Fit Center",
    role: "Desarrollador Frontend",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React Hook Form", "Google Analytics"],
    features: [
      "Animaciones fluidas con Framer Motion",
      "Formulario con validación",
      "Integración con Mailchimp",
      "SEO optimizado",
      "Analytics de conversiones",
      "Diseño mobile-first"
    ]
  },
  {
    id: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "Panel de control interactivo para visualización de datos y métricas empresariales.",
    fullDescription: "Dashboard interactivo que permite a los equipos de negocio visualizar y analizar métricas clave en tiempo real. Incluye gráficos personalizables, filtros avanzados y exportación de datos.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Vue.js", "D3.js"],
    date: "2023",
    client: "DataCorp Inc.",
    role: "Desarrollador Frontend",
    technologies: ["Vue.js", "D3.js", "Chart.js", "Express", "PostgreSQL", "WebSockets"],
    features: [
      "Gráficos interactivos y personalizables",
      "Actualización en tiempo real con WebSockets",
      "Filtros avanzados",
      "Exportación a PDF y Excel",
      "Responsive design",
      "Sistema de notificaciones"
    ]
  }
];
