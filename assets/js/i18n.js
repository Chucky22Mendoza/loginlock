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
    "header.subtitle": "Soy un <span>Desarrollador Frontend Senior</span> apasionado por la web y las nuevas tecnologías",
    "header.download_cv": "CV",

    // --- ABOUT ---
    "about.section_label": "Sobre mí",
    "about.section_subtitle": "Conoce más sobre mí",
    "about.role": "Desarrollador Frontend Senior &amp; Desarrollador Full Stack",
    "about.intro": "¡Hola! Soy Jesús, desarrollador de software con más de 6 años de experiencia, especializado en frontend con React y Next.js.",
    "about.birthday_label": "Cumpleaños:",
    "about.birthday_val": "05 Nov 1997",
    "about.website_label": "GitHub:",
    "about.phone_label": "Teléfono:",
    "about.phone_val": "+52 1 312 112 52 86",
    "about.city_label": "Ciudad:",
    "about.city_val": "Colima, México",
    "about.age_label": "Edad:",
    "about.degree_label": "Estudios:",
    "about.degree_val": "Ing. en Sistemas Computacionales",
    "about.email_label": "Email:",
    "about.freelance_label": "Disponibilidad:",
    "about.freelance_val": "Disponible",
    "about.p1": "Miembro clave del equipo de desarrollo de la plataforma web AIS en AI27. Lideré el desarrollo Frontend en Xilion.io, logrando mejoras en todos los productos, rendimiento web y creando una plataforma POS unificada.",
    "about.p2": "Especializado en React 18 / Next.js y Java / Spring Framework. Contribuidor open source apasionado por el código limpio, la optimización del rendimiento y las prácticas de desarrollo modernas.",
    "about.p3": "Mi objetivo es seguir creciendo en entornos que me desafíen, aportando soluciones de alto impacto y mentoreando a otros desarrolladores.",
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
    "resume.summary_text": "Desarrollador de software con más de 6 años de experiencia en desarrollo web frontend y backend. Especializado en React 18, Next.js y TypeScript. Apasionado por el open source y las buenas prácticas.",
    "resume.education_title": "Educación",

    "resume.edu1_title": "Ingeniería en Sistemas Computacionales",
    "resume.edu1_dates": "May 2024",
    "resume.edu1_place": "Universidad ICEP, Colima, México.",
    "resume.edu1_desc": "Alumno destacado por conocimientos avanzados sobre la carrera por experiencia profesional.",

    "resume.edu2_title": "Verano de Investigación Delfín",
    "resume.edu2_dates": "2018",
    "resume.edu2_place": "Universidad Politécnica de Querétaro (UPQ), Querétaro, México.",
    "resume.edu2_desc": "Proyecto desarrollado con Mathematica sobre algoritmos de búsqueda voraz para obtener un camino extendido modificado de mínimo costo.",

    "resume.edu3_title": "ENEIT Nacional",
    "resume.edu3_dates": "2017 - 2018",
    "resume.edu3_place": "Tecnológico Nacional de México, Ciudad de México, México.",
    "resume.edu3_desc": "Participación local, regional y nacional con VITA DATA. 1er y 2do lugar. Proyecto para prevenir la 'muerte de cuna' mediante el monitoreo de signos vitales.",

    "resume.edu4_title": "Ingeniería en Sistemas Computacionales",
    "resume.edu4_dates": "2015 - 2021",
    "resume.edu4_place": "Instituto Tecnológico de Colima, Colima, México.",
    "resume.edu4_desc": "Estudiante destacado en la mayoría de las disciplinas impartidas en la carrera.",

    "resume.experience_title": "Experiencia Profesional",

    "resume.job1_title": "Desarrollador Frontend Senior",
    "resume.job1_dates": "Jul 2024 – Presente",
    "resume.job1_place": "AI27 Predictive Intelligence S.A.P.I. de C.V., Ciudad de México.",
    "resume.job1_li1": "Lideré la migración frontend de la plataforma AIS a React 18 con TypeScript, reduciendo la deuda técnica en un 60%.",
    "resume.job1_li2": "Diseñé un sistema de diseño atómico, reduciendo el tiempo de desarrollo en un 40%.",
    "resume.job1_li3": "Integré Zustand para la gestión de estado, mejorando el rendimiento en un 25%.",
    "resume.job1_li4": "Optimicé tiempos de carga de página de 4.5s a 1.2s mediante paginación y lazy loading.",
    "resume.job1_li5": "Logré más del 85% de cobertura de pruebas unitarias con Jest y React Testing Library.",
    "resume.job1_li6": "Integré la API de Here Maps para el rastreo de vehículos en tiempo real.",
    "resume.job1_li7": "Colaboré en contratos de API y mentoré a 3 desarrolladores junior.",

    "resume.job2_title": "Desarrollador Full Stack",
    "resume.job2_dates": "Sep 2018 – Jul 2024",
    "resume.job2_place": "Xilion.io &amp; Kiotrack S.A de C.V., Colima, México.",
    "resume.job2_li1": "Arquitecté una librería de componentes unificada, acelerando la entrega de funcionalidades en un 50%.",
    "resume.job2_li2": "Implementé CI/CD con pm2 y bash scripts, reduciendo el tiempo de despliegue en un 80%.",
    "resume.job2_li3": "Mejoré las puntuaciones de Lighthouse de 45 a 92 para las plataformas Yimi.",
    "resume.job2_li4": "Desarrollé aplicaciones Java de escritorio (JavaFX/Swing) para 200+ usuarios concurrentes.",
    "resume.job2_li5": "Construí y mantuve APIs RESTful con Spring Boot para la gestión de kioscos.",
    "resume.job2_li6": "Diseñé bases de datos relacionales para rastreo en tiempo real con 99.9% de disponibilidad.",
    "resume.job2_li7": "Mentoré desarrolladores junior en Java, Spring y React.",

    "resume.job3_title": "Desarrollador Frontend Semi-Senior",
    "resume.job3_dates": "2017 - 2018",
    "resume.job3_place": "Archivo Histórico del Estado de Colima, México.",
    "resume.job3_li1": "Líder de diseño de base de datos y desarrollo frontend.",
    "resume.job3_li2": "Detección y resolución de incidencias desde la etapa inicial del proyecto.",
    "resume.job3_li3": "Trato directo con el director del desarrollo.",
    "resume.job3_li4": "Supervisé la evaluación de materiales gráficos garantizando calidad y precisión del diseño.",
    "resume.job3_li5": "Propuestas de mejora.",

    // --- OPEN SOURCE ---
    "opensource.section_label": "Open Source",
    "opensource.section_subtitle": "Contribuciones",
    "opensource.intro": "Mantengo paquetes activos en npm con descargas semanales constantes.",
    "opensource.pkg1_desc": "Hook de React para generación de códigos de barras. Más de 50 descargas semanales.",
    "opensource.pkg2_desc": "Kit de utilidades y componentes para desarrollo web. Más de 20 descargas semanales.",
    "opensource.view_npm": "Ver en npm",
    "opensource.view_github": "Ver en GitHub",

    // --- PORTFOLIO ---
    "portfolio.section_label": "Portafolio",
    "portfolio.section_subtitle": "Mi Portafolio",
    // p1 — Documentation Hub
    "portfolio.p1_tags": "Documentación • Frontend",
    "portfolio.p1_desc": "Sitio web para documentación de proyectos personales, con búsqueda y navegación estructurada.",
    // p2 — Tracker Finances
    "portfolio.p2_tags": "Finanzas • Frontend",
    "portfolio.p2_desc": "Aplicación web para el seguimiento y análisis de finanzas personales con gráficas interactivas.",
    // p3 — Chernobyl Exclusion Zone
    "portfolio.p3_tags": "Investigación • Frontend",
    "portfolio.p3_desc": "Diseño, información e investigación sobre la zona de exclusión de Chernobyl para turismo extremo.",
    // p4 — SIDF (Filmotecas)
    "portfolio.p4_tags": "Backend • Frontend • Base de datos",
    "portfolio.p4_desc": "Desarrollo del Frontend público y administrativo, diseño de BD y módulos del Backend.",
    // p5 — VITA DATA
    "portfolio.p5_tags": "Monitoreo de salud • IoT • Frontend",
    "portfolio.p5_desc": "Aplicaciones para la monitorización de signos vitales. Diseño de BD. Desarrollo desktop, móvil y web.",
    // p6 — COVID-19 INFO
    "portfolio.p6_tags": "Backend • Frontend • Rastreo",
    "portfolio.p6_desc": "Página desarrollada durante la pandemia de COVID-19 para monitorear datos en tiempo real.",

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
    "header.subtitle": "I'm a <span>Senior Frontend Developer</span> passionate about the web and new technologies",
    "header.download_cv": "CV",

    // --- ABOUT ---
    "about.section_label": "About Me",
    "about.section_subtitle": "Learn more about me",
    "about.role": "Senior Frontend Developer &amp; Full Stack Developer",
    "about.intro": "Hi! I'm Jesús, a software developer with over 6 years of experience, specialized in frontend with React and Next.js.",
    "about.birthday_label": "Birthday:",
    "about.birthday_val": "Nov 05, 1997",
    "about.website_label": "GitHub:",
    "about.phone_label": "Phone:",
    "about.phone_val": "+52 1 312 112 52 86",
    "about.city_label": "City:",
    "about.city_val": "Colima, México",
    "about.age_label": "Age:",
    "about.degree_label": "Degree:",
    "about.degree_val": "Computer Systems Engineering",
    "about.email_label": "Email:",
    "about.freelance_label": "Availability:",
    "about.freelance_val": "Available",
    "about.p1": "Key member of the development team for the AIS web platform at AI27. Led FrontEnd development at Xilion.io, achieving improvements across all products, web performance, and creating a unified POS platform.",
    "about.p2": "Specialized in React 18 / Next.js and Java / Spring Framework. Passionate open-source contributor with a focus on clean code, performance optimization, and modern development practices.",
    "about.p3": "My goal is to keep growing in environments that challenge me, delivering high-impact solutions and mentoring other developers.",
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
    "resume.summary_text": "Software developer with over 6 years of experience in frontend and backend web development. Specialized in React 18, Next.js and TypeScript. Passionate about open source and best practices.",
    "resume.education_title": "Education",

    "resume.edu1_title": "Computer Systems Engineering — Bachelor's Degree",
    "resume.edu1_dates": "May 2024",
    "resume.edu1_place": "Universidad ICEP, Colima, México.",
    "resume.edu1_desc": "Outstanding student recognized for advanced knowledge stemming from professional experience.",

    "resume.edu2_title": "Delfín Research Summer Program",
    "resume.edu2_dates": "2018",
    "resume.edu2_place": "Universidad Politécnica de Querétaro (UPQ), Querétaro, México.",
    "resume.edu2_desc": "Developed greedy search algorithms in Mathematica for minimum-cost extended path optimization.",

    "resume.edu3_title": "ENEIT National Competition",
    "resume.edu3_dates": "2017 - 2018",
    "resume.edu3_place": "Tecnológico Nacional de México, Mexico City, México.",
    "resume.edu3_desc": "Participated at local, regional and national levels with VITA DATA. 1st and 2nd place. Project to prevent sudden infant death syndrome through vital signs monitoring.",

    "resume.edu4_title": "Computer Systems Engineering",
    "resume.edu4_dates": "2015 - 2021",
    "resume.edu4_place": "Instituto Tecnológico de Colima, Colima, México.",
    "resume.edu4_desc": "Outstanding student in most disciplines of the degree.",

    "resume.experience_title": "Professional Experience",

    "resume.job1_title": "Senior Frontend Developer",
    "resume.job1_dates": "Jul 2024 – Present",
    "resume.job1_place": "AI27 Predictive Intelligence S.A.P.I. de C.V., Mexico City.",
    "resume.job1_li1": "Led front-end migration of AIS platform to React 18 with TypeScript, reducing technical debt by 60%.",
    "resume.job1_li2": "Architected an atomic design system, reducing development time by 40%.",
    "resume.job1_li3": "Integrated Zustand for state management, improving performance by 25%.",
    "resume.job1_li4": "Optimized page load times from 4.5s to 1.2s through pagination and lazy loading.",
    "resume.job1_li5": "Achieved 85%+ unit testing coverage using Jest and React Testing Library.",
    "resume.job1_li6": "Integrated Here Maps API for real-time vehicle tracking.",
    "resume.job1_li7": "Collaborated on API contracts and mentored 3 junior developers.",

    "resume.job2_title": "Full Stack Developer",
    "resume.job2_dates": "Sep 2018 – Jul 2024",
    "resume.job2_place": "Xilion.io &amp; Kiotrack S.A de C.V., Colima, México.",
    "resume.job2_li1": "Architected a unified component library, accelerating feature delivery by 50%.",
    "resume.job2_li2": "Implemented CI/CD using pm2 and bash scripts, reducing deployment time by 80%.",
    "resume.job2_li3": "Improved Lighthouse performance scores from 45 to 92 for Yimi platforms.",
    "resume.job2_li4": "Developed Java desktop applications (JavaFX/Swing) serving 200+ concurrent users.",
    "resume.job2_li5": "Built and maintained RESTful APIs with Spring Boot for kiosk management.",
    "resume.job2_li6": "Designed relational databases for real-time tracking with 99.9% uptime.",
    "resume.job2_li7": "Mentored junior developers on Java, Spring, and React.",

    "resume.job3_title": "Semi-Senior Frontend Developer",
    "resume.job3_dates": "2017 - 2018",
    "resume.job3_place": "Archivo Histórico del Estado de Colima, México.",
    "resume.job3_li1": "Led database design and frontend development.",
    "resume.job3_li2": "Detected and resolved incidents from the initial project stage.",
    "resume.job3_li3": "Direct communication with the development director.",
    "resume.job3_li4": "Supervised evaluation of all graphic materials to ensure design quality and accuracy.",
    "resume.job3_li5": "Proposed improvements throughout the project.",

    // --- OPEN SOURCE ---
    "opensource.section_label": "Open Source",
    "opensource.section_subtitle": "Contributions",
    "opensource.intro": "I maintain active packages on npm with consistent weekly downloads.",
    "opensource.pkg1_desc": "React hook for barcode generation. 50+ weekly downloads.",
    "opensource.pkg2_desc": "Utility and component kit for web development. 20+ weekly downloads.",
    "opensource.view_npm": "View on npm",
    "opensource.view_github": "View on GitHub",

    // --- PORTFOLIO ---
    "portfolio.section_label": "Portfolio",
    "portfolio.section_subtitle": "My Portfolio",
    // p1 — Documentation Hub
    "portfolio.p1_tags": "Documentation • Frontend",
    "portfolio.p1_desc": "Website for personal project documentation, with search and structured navigation.",
    // p2 — Tracker Finances
    "portfolio.p2_tags": "Finances • Frontend",
    "portfolio.p2_desc": "Web app for tracking and analyzing personal finances with interactive charts.",
    // p3 — Chernobyl Exclusion Zone
    "portfolio.p3_tags": "Research • Frontend",
    "portfolio.p3_desc": "Design, information and research about the Chernobyl exclusion zone for extreme tourism.",
    // p4 — SIDF (Filmotecas)
    "portfolio.p4_tags": "Backend • Frontend • Database",
    "portfolio.p4_desc": "Development of public and admin frontend, DB design and backend modules.",
    // p5 — VITA DATA
    "portfolio.p5_tags": "Health monitoring • IoT • Frontend",
    "portfolio.p5_desc": "Applications for vital signs monitoring. DB design. Desktop, mobile and web development.",
    // p6 — COVID-19 INFO
    "portfolio.p6_tags": "Backend • Frontend • Tracking",
    "portfolio.p6_desc": "Page developed during the COVID-19 pandemic to monitor real-time data.",

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
      ? 'Jesús Mendoza Verduzco — Desarrollador Frontend Senior con más de 6 años de experiencia en React 18, Next.js y TypeScript. Disponible para proyectos y oportunidades laborales. Colima, México.'
      : 'Jesús Mendoza Verduzco — Senior Frontend Developer with over 6 years of experience in React 18, Next.js and TypeScript. Available for projects and job opportunities. Colima, México.');
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
