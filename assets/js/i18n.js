/**
 * i18n — Language system for portfolio (ES / EN)
 * Jesús Mendoza Verduzco
 */

const translations = {
  es: {
    // --- NAV ---
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.resume": "Currículum",
    "nav.portfolio": "Portafolio",
    "nav.opensource": "Open Source",
    "nav.contact": "Contacto",

    // --- HEADER ---
    "header.subtitle": "Soy un <span>Ingeniero de Software FullStack</span> con enfoque en frontend",
    "header.download_cv": "CV",

    // --- ABOUT ---
    "about.section_label": "Sobre mí",
    "about.section_subtitle": "Conoce más sobre mí",
    "about.role": "Ingeniero de Software FullStack — Enfoque Frontend",
    "about.intro": "¡Hola! Soy Jesús, ingeniero de software FullStack con más de 7 años de experiencia, especializado en frontend con React, TypeScript y Next.js.",
    "about.birthday_label": "Cumpleaños:",
    "about.birthday_val": "05 Nov 1997",
    "about.website_label": "GitHub:",
    "about.phone_label": "Teléfono:",
    "about.phone_val": "+52 312 112 52 86",
    "about.city_label": "Ciudad:",
    "about.city_val": "Colima, México",
    "about.age_label": "Edad:",
    "about.degree_label": "Estudios:",
    "about.degree_val": "Lic. en Ingeniería en Sistemas Computacionales",
    "about.email_label": "Email:",
    "about.freelance_label": "Disponibilidad:",
    "about.freelance_val": "Disponible",
    "about.p1": "En AI27 lidero la modernización del frontend y el desarrollo de funcionalidades de AIS con React y TypeScript, incluyendo rutas, monitoreo y flujos operativos.",
    "about.p2": "Tengo experiencia práctica en backend con Java, Spring Boot, Spring MVC, JSP, Node.js, Express, Laravel y PHP, además de bases de datos, APIs, CI/CD e infraestructura cloud.",
    "about.p3": "Me interesa construir software mantenible y de alto rendimiento, colaborar en equipos Agile/Scrum, hacer code review y compartir conocimiento mediante mentoring.",
    "about.p4": "Si quieres saber más sobre mí, conecta conmigo en LinkedIn, mándame un correo o escríbeme por WhatsApp.",

    // --- SKILLS ---
    "skills.section": "Habilidades",

    // --- INTERESTS ---
    "interests.section": "Intereses",
    "interests.videogames": "Videojuegos",
    "interests.ml": "Machine Learning",
    "interests.music": "Música",
    "interests.frontend": "Frontend",
    "interests.databases": "Bases de datos",
    "interests.soccer": "Futbol",
    "interests.selftaught": "Autodidacta",
    "interests.webdev": "Desarrollo Web",
    "interests.fitness": "Fit Life",
    "interests.anime": "Anime &amp; Manga",
    "interests.tech": "Tecnología",
    "interests.ai": "Inteligencia Artificial",

    // --- RESUME ---
    "resume.section_label": "Currículum",
    "resume.section_subtitle": "Revisa mi currículum",
    "resume.summary_title": "Resumen",
    "resume.summary_text": "Ingeniero de Software FullStack con más de 7 años de experiencia desarrollando aplicaciones web, APIs REST, aplicaciones de escritorio y servicios en la nube, con enfoque principal en frontend. Especializado en React, TypeScript y Next.js.",
    "resume.education_title": "Educación",

    "resume.edu1_title": "Licenciatura en Ingeniería en Sistemas Computacionales",
    "resume.edu1_dates": "2024",
    "resume.edu1_place": "Universidad ICEP, Colima, México.",
    "resume.edu1_desc": "Formación profesional en ingeniería de software y sistemas computacionales.",

    "resume.edu2_title": "Ingeniería en Sistemas Computacionales",
    "resume.edu2_dates": "2021",
    "resume.edu2_place": "Tecnológico Nacional de México, Campus Colima.",
    "resume.edu2_desc": "Formación en sistemas computacionales, desarrollo de software y tecnologías de la información.",

    "resume.edu3_title": "Vita-Data — Proyecto de Innovación ENEIT 2017",
    "resume.edu3_dates": "2017",
    "resume.edu3_place": "Tecnológico Nacional de México, Campus Colima.",
    "resume.edu3_desc": "1.er lugar en etapa local y regional, con reconocimiento en etapa nacional.",

    "resume.experience_title": "Experiencia Profesional",

    "resume.job1_title": "Ingeniero de Software FullStack — Enfoque Frontend",
    "resume.job1_dates": "Jul 2024 – Sep 2026",
    "resume.job1_place": "AI27 Predictive Intelligence S.A.P.I. de C.V., Ciudad de México.",
    "resume.job1_li1": "Lideré la modernización del frontend y el desarrollo de funcionalidades de AIS con React y TypeScript.",
    "resume.job1_li2": "Desarrollé funcionalidades para embarques, líneas de transporte, operadores, dispositivos, licencias, rutas y monitoreo.",
    "resume.job1_li3": "Migré parte importante del manejo de estado compartido de React Context hacia Zustand.",
    "resume.job1_li4": "Integré HERE Maps para rutas, polylines, validación de coordenadas y parámetros de routing.",
    "resume.job1_li5": "Mejoré el rendimiento mediante paginación, optimización de renderizado y una interacción más eficiente con APIs y estado.",
    "resume.job1_li6": "Implementé y mantuve pruebas unitarias y prácticas de calidad de código.",
    "resume.job1_li7": "Participé en servicios backend con Java 17 y Spring Boot, incluyendo APIs REST, lógica de negocio y pruebas.",

    "resume.job2_title": "Ingeniero de Software FullStack — Enfoque Frontend",
    "resume.job2_dates": "Sep 2018 – Jul 2024",
    "resume.job2_place": "Xilion.io &amp; Kiotrack S.A de C.V., Colima, México.",
    "resume.job2_li1": "Desarrollé aplicaciones web, backend y desktop para múltiples productos, trabajando también con bases de datos e infraestructura.",
    "resume.job2_li2": "Desarrollé aplicaciones web con React y Next.js, componentes reutilizables y herramientas compartidas.",
    "resume.job2_li3": "Desarrollé aplicaciones Java Desktop con JavaFX/FXML y Swing, integrando NFC, QR, impresión, sincronización y Linux.",
    "resume.job2_li4": "Desarrollé servicios REST y aplicaciones backend con Java 8, Spring MVC, JSP, Laravel y PHP.",
    "resume.job2_li5": "Lideré iniciativas de rendimiento web para Yimi Web y Yimi POS, implementando dashboards y estrategias de optimización.",
    "resume.job2_li6": "Implementé prácticas de CI/CD que redujeron los tiempos de despliegue en más de un 80%.",
    "resume.job2_li7": "Administré máquinas virtuales de GCP y entornos Linux con Nginx, reverse proxy, PM2, SSL/TLS y despliegues.",

    "resume.job3_title": "Desarrollador FullStack",
    "resume.job3_dates": "Feb 2018 – Sep 2018",
    "resume.job3_place": "Archivo Histórico del Estado de Colima, México.",
    "resume.job3_li1": "Desarrollé una plataforma para la administración de filmes.",
    "resume.job3_li2": "Diseñé su base de datos MySQL y optimicé consultas.",
    "resume.job3_li3": "Migré información desde Excel.",
    "resume.job3_li4": "Propuse e implementé soluciones técnicas de acuerdo con los requerimientos del cliente.",
    "resume.job3_li5": "",

    // --- OPEN SOURCE ---
    "opensource.section_label": "Open Source",
    "opensource.section_subtitle": "Contribuciones",
    "opensource.intro": "Mantengo paquetes activos en npm con descargas semanales constantes.",
    "opensource.pkg1_desc": "Hook de React para generación de códigos de barras. Más de 50 descargas semanales.",
    "opensource.pkg2_desc": "Kit de utilidades y componentes para desarrollo web. Más de 20 descargas semanales.",
    "opensource.pkg3_desc": "Herramienta CLI para facilitar y estandarizar la creación de módulos estructurales.",
    "opensource.view_npm": "Ver en npm",
    "opensource.view_github": "Ver en GitHub",

    // --- PORTFOLIO ---
    "portfolio.section_label": "Portafolio",
    "portfolio.section_subtitle": "Mi Portafolio",
    // p1 — Documentation Hub
    "portfolio.p1_tags": "Next.js • React • Prisma • APIs",
    "portfolio.p1_desc": "CRM con dashboards, citas, reportes, Google Calendar, recordatorios por WhatsApp y servicios de correo con Resend.",
    // p2 — Tracker Finances
    "portfolio.p2_tags": "Node.js • Express • TypeScript • Prisma",
    "portfolio.p2_desc": "API REST con modelos de datos, operaciones CRUD, invitaciones y validaciones.",
    // p3 — Chernobyl Exclusion Zone
    "portfolio.p3_tags": "React • Node.js • Stripe",
    "portfolio.p3_desc": "Integración de pagos con webhooks, autenticación, configuración para producción y frontend responsive.",
    // p4 — SIDF (Filmotecas)
    "portfolio.p4_tags": "Hardware • Software • Salud",
    "portfolio.p4_desc": "Proyecto multidisciplinario para monitoreo de pacientes en tiempo real, con contribución en sistemas e integración.",
    // p5 — VITA DATA
    "portfolio.p5_tags": "ENEIT 2017 • Innovación",
    "portfolio.p5_desc": "Proyecto reconocido con 1.er lugar en etapa local y regional, y reconocimiento en etapa nacional.",
    // p6 — COVID-19 INFO
    "portfolio.p6_tags": "React • Node.js • Stripe",
    "portfolio.p6_desc": "Implementación de pagos, webhooks, autenticación, configuración para producción y frontend responsive.",

    // --- CONTACT ---
    "contact.section_label": "Contacto",
    "contact.section_subtitle": "Contáctame",
    "contact.city": "Mi ciudad",
    "contact.city_val": "Colima, México.",
    "contact.social": "Perfiles sociales",
    "contact.email_label": "Manda un correo",
    "contact.phone_label": "Llámame",

    // --- MODAL ---
    "modal.close": "Cerrar",
  },

  en: {
    // --- NAV ---
    "nav.home": "Home",
    "nav.about": "About",
    "nav.resume": "Resume",
    "nav.portfolio": "Portfolio",
    "nav.opensource": "Open Source",
    "nav.contact": "Contact",

    // --- HEADER ---
    "header.subtitle": "I'm a <span>FullStack Software Engineer</span> focused on frontend development",
    "header.download_cv": "CV",

    // --- ABOUT ---
    "about.section_label": "About Me",
    "about.section_subtitle": "Learn more about me",
    "about.role": "FullStack Software Engineer — Frontend Focus",
    "about.intro": "Hi! I'm Jesús, a FullStack Software Engineer with over 7 years of experience, focused on frontend development with React, TypeScript and Next.js.",
    "about.birthday_label": "Birthday:",
    "about.birthday_val": "Nov 05, 1997",
    "about.website_label": "GitHub:",
    "about.phone_label": "Phone:",
    "about.phone_val": "+52 312 112 52 86",
    "about.city_label": "City:",
    "about.city_val": "Colima, México",
    "about.age_label": "Age:",
    "about.degree_label": "Degree:",
    "about.degree_val": "Bachelor's Degree in Computer Systems Engineering",
    "about.email_label": "Email:",
    "about.freelance_label": "Availability:",
    "about.freelance_val": "Available",
    "about.p1": "At AI27, I lead frontend modernization and AIS feature development with React and TypeScript, including routes, monitoring and operational workflows.",
    "about.p2": "I have hands-on backend experience with Java, Spring Boot, Spring MVC, JSP, Node.js, Express, Laravel and PHP, plus databases, APIs, CI/CD and cloud infrastructure.",
    "about.p3": "I enjoy building maintainable, high-performance software, collaborating in Agile/Scrum teams, reviewing code and sharing knowledge through mentoring.",
    "about.p4": "If you want to know more about me, connect with me on LinkedIn, send me an email, or message me on WhatsApp.",

    // --- SKILLS ---
    "skills.section": "Skills",

    // --- INTERESTS ---
    "interests.section": "Interests",
    "interests.videogames": "Video Games",
    "interests.ml": "Machine Learning",
    "interests.music": "Music",
    "interests.frontend": "Frontend",
    "interests.databases": "Databases",
    "interests.soccer": "Soccer",
    "interests.selftaught": "Self-taught",
    "interests.webdev": "Web Development",
    "interests.fitness": "Fit Life",
    "interests.anime": "Anime &amp; Manga",
    "interests.tech": "Technology",
    "interests.ai": "Artificial Intelligence",

    // --- RESUME ---
    "resume.section_label": "Resume",
    "resume.section_subtitle": "Check my resume",
    "resume.summary_title": "Summary",
    "resume.summary_text": "FullStack Software Engineer with over 7 years of experience developing web applications, REST APIs, desktop applications and cloud services, with a primary focus on frontend. Specialized in React, TypeScript and Next.js.",
    "resume.education_title": "Education",

    "resume.edu1_title": "Bachelor's Degree in Computer Systems Engineering",
    "resume.edu1_dates": "2024",
    "resume.edu1_place": "Universidad ICEP, Colima, México.",
    "resume.edu1_desc": "Professional training in software engineering and computer systems.",

    "resume.edu2_title": "Computer Systems Engineering",
    "resume.edu2_dates": "2021",
    "resume.edu2_place": "Tecnológico Nacional de México, Colima Campus.",
    "resume.edu2_desc": "Training in computer systems, software development and information technologies.",

    "resume.edu3_title": "Vita-Data — ENEIT 2017 Innovation Project",
    "resume.edu3_dates": "2017",
    "resume.edu3_place": "Tecnológico Nacional de México, Colima Campus.",
    "resume.edu3_desc": "1st place at local and regional stages, with recognition at the national stage.",

    "resume.experience_title": "Professional Experience",

    "resume.job1_title": "FullStack Software Engineer — Frontend Focus",
    "resume.job1_dates": "Jul 2024 – Sep 2026",
    "resume.job1_place": "AI27 Predictive Intelligence S.A.P.I. de C.V., Mexico City.",
    "resume.job1_li1": "Led frontend modernization and AIS feature development using React and TypeScript.",
    "resume.job1_li2": "Developed features for shipments, transport lines, operators, devices, licenses, routes and monitoring.",
    "resume.job1_li3": "Migrated a significant part of shared state management from React Context to Zustand.",
    "resume.job1_li4": "Integrated HERE Maps for routes, polylines, coordinate validation and routing parameters.",
    "resume.job1_li5": "Improved performance through pagination, render optimization and more efficient API and state interactions.",
    "resume.job1_li6": "Implemented and maintained unit tests and code quality practices.",
    "resume.job1_li7": "Contributed to backend services with Java 17 and Spring Boot, including REST APIs, business logic and testing.",

    "resume.job2_title": "FullStack Software Engineer — Frontend Focus",
    "resume.job2_dates": "Sep 2018 – Jul 2024",
    "resume.job2_place": "Xilion.io &amp; Kiotrack S.A de C.V., Colima, México.",
    "resume.job2_li1": "Developed web, backend and desktop applications for multiple products, also working with databases and infrastructure.",
    "resume.job2_li2": "Built modern web applications with React and Next.js, reusable components and shared tools.",
    "resume.job2_li3": "Developed Java Desktop applications with JavaFX/FXML and Swing, integrating NFC, QR, printing, synchronization and Linux.",
    "resume.job2_li4": "Developed REST services and backend applications with Java 8, Spring MVC, JSP, Laravel and PHP.",
    "resume.job2_li5": "Led web performance initiatives for Yimi Web and Yimi POS, implementing monitoring dashboards and optimization strategies.",
    "resume.job2_li6": "Implemented CI/CD practices that reduced deployment times by more than 80%.",
    "resume.job2_li7": "Administered GCP virtual machines and Linux environments with Nginx, reverse proxy, PM2, SSL/TLS and deployments.",

    "resume.job3_title": "FullStack Developer",
    "resume.job3_dates": "Feb 2018 – Sep 2018",
    "resume.job3_place": "Archivo Histórico del Estado de Colima, México.",
    "resume.job3_li1": "Developed a platform for film administration.",
    "resume.job3_li2": "Designed its MySQL database and optimized queries.",
    "resume.job3_li3": "Migrated information from Excel.",
    "resume.job3_li4": "Proposed and implemented technical solutions based on client requirements.",
    "resume.job3_li5": "",

    // --- OPEN SOURCE ---
    "opensource.section_label": "Open Source",
    "opensource.section_subtitle": "Contributions",
    "opensource.intro": "I maintain active packages on npm with consistent weekly downloads.",
    "opensource.pkg1_desc": "React hook for barcode generation. 50+ weekly downloads.",
    "opensource.pkg2_desc": "Utility and component kit for web development. 20+ weekly downloads.",
    "opensource.pkg3_desc": "CLI tool to facilitate and standardize the creation of structural modules.",
    "opensource.view_npm": "View on npm",
    "opensource.view_github": "View on GitHub",

    // --- PORTFOLIO ---
    "portfolio.section_label": "Portfolio",
    "portfolio.section_subtitle": "My Portfolio",
    // p1 — Documentation Hub
    "portfolio.p1_tags": "Next.js • React • Prisma • APIs",
    "portfolio.p1_desc": "CRM with dashboards, appointments, reports, Google Calendar, WhatsApp reminders and email services with Resend.",
    // p2 — Tracker Finances
    "portfolio.p2_tags": "Node.js • Express • TypeScript • Prisma",
    "portfolio.p2_desc": "REST API with data models, CRUD operations, invitations and validations.",
    // p3 — Chernobyl Exclusion Zone
    "portfolio.p3_tags": "React • Node.js • Stripe",
    "portfolio.p3_desc": "Payment integration with webhooks, authentication, production configuration and responsive frontend.",
    // p4 — SIDF (Filmotecas)
    "portfolio.p4_tags": "Hardware • Software • Healthcare",
    "portfolio.p4_desc": "Multidisciplinary project for real-time patient monitoring, contributing to the software and solution integration.",
    // p5 — VITA DATA
    "portfolio.p5_tags": "ENEIT 2017 • Innovation",
    "portfolio.p5_desc": "Project recognized with 1st place at local and regional stages and recognition at the national stage.",
    // p6 — COVID-19 INFO
    "portfolio.p6_tags": "React • Node.js • Stripe",
    "portfolio.p6_desc": "Payment integration, webhooks, authentication, production configuration and responsive frontend.",

    // --- CONTACT ---
    "contact.section_label": "Contact",
    "contact.section_subtitle": "Get in touch",
    "contact.city": "My city",
    "contact.city_val": "Colima, México.",
    "contact.social": "Social Profiles",
    "contact.email_label": "Send an email",
    "contact.phone_label": "Call me",

    // --- MODAL ---
    "modal.close": "Close",
  }
};

// ─── Engine ────────────────────────────────────────────────────────────────

const DEFAULT_LANG = 'es';
let currentLang = localStorage.getItem('lang') || DEFAULT_LANG;

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // Update meta description for SEO
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', lang === 'es'
      ? 'Jesús Mendoza Verduzco — Ingeniero de Software FullStack con más de 7 años de experiencia, especializado en frontend con React, TypeScript y Next.js. Colima, México.'
      : 'Jesús Mendoza Verduzco — FullStack Software Engineer with over 7 years of experience, focused on frontend development with React, TypeScript and Next.js. Colima, México.');
  }

  // Translate all data-i18n elements (text content)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = translations[lang][key];
    if (value !== undefined) {
      el.setAttribute('placeholder', value);
    }
  });

  // Update CV download link
  const cvLink = document.getElementById('cv-download-link');
  if (cvLink) {
    cvLink.setAttribute('href', lang === 'es' ? 'assets/CV - ES.pdf' : 'assets/CV - EN.pdf');
  }

  // Update language toggle button appearance
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Calculate and display dynamic age
  const ageEl = document.getElementById('dynamic-age');
  if (ageEl) {
    const birth = new Date(1997, 10, 5); // Nov 5, 1997 (month is 0-indexed)
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    ageEl.textContent = age;
  }

  // Calculate years of experience
  const expEl = document.getElementById('years-experience');
  if (expEl) {
    const start = new Date(2018, 8, 1); // Sep 2018
    const now = new Date();
    const years = Math.floor((now - start) / (1000 * 60 * 60 * 24 * 365.25));
    expEl.textContent = years + '+';
  }
}

function toggleLanguage(lang) {
  applyTranslations(lang);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
});
