# Instrucciones para agentes

## Reglas de contenido

- Mantener el contenido profesional en español e inglés.
- Usar `assets/CV - ES.pdf` como fuente principal para cambios de perfil.
- No inventar métricas, cargos, fechas, tecnologías o enlaces que no estén respaldados por el CV o por el repositorio.
- Cuando se actualice una cadena visible, actualizar las claves equivalentes en ambos idiomas dentro de `assets/js/i18n.js`.
- Conservar los nombres de archivos con espacios de los PDFs existentes: `assets/CV - ES.pdf` y `assets/CV - EN.pdf`.

## Reglas técnicas

- Es un sitio HTML/CSS/JavaScript estático; no agregar dependencias ni un build step sin necesidad.
- Usar rutas relativas compatibles con Cloudflare Pages.
- Mantener `data-i18n` en elementos traducibles y no duplicar lógica de idioma en `index.html`.
- Mantener `lang`, metadatos SEO, JSON-LD, enlaces sociales y descarga de CV consistentes con el perfil.
- Usar `apply_patch` para cambios manuales y revisar el diff antes de terminar.

## Verificación

- Buscar restos de información obsoleta como `6 años`, `Senior Frontend Developer` o proyectos eliminados.
- Comprobar que cada clave `data-i18n` usada en `index.html` exista en español e inglés.
- Comprobar que los enlaces a PDFs y recursos referenciados existan.
- Abrir `index.html` en un navegador o usar un servidor estático para validar navegación, selector de idioma y descarga de CV.
