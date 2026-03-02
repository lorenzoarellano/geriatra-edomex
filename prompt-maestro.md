# Prompt Técnico para Nuevo Sitio Web: Dr. Eduardo Pacheco Ponce (Geriatra)

Este documento contiene toda la configuración, estilo visual, stack tecnológico y optimizaciones (SEO, AEO, LLMO, GEO y Performance) extraídas para recrear una arquitectura de sitio médico de alto impacto, enfocado ahora en la especialidad de Geriatría para el **Dr. Eduardo Pacheco Ponce**.

---

## 1. Stack Tecnológico Base
Debe emplearse estrictamente este entorno de desarrollo:
- **Framework Core:** Nuxt 3 (SSR activado, `compatibilityDate: '2026-03-02'`).
- **Frontend / Componentes:** Vue 3 (Composition API).
- **Estilos:** Tailwind CSS 3 (integrando módulos `@tailwindcss/forms` y `@tailwindcss/typography`) + CSS Vainilla para optimizaciones específicas (GPU y scroll).
- **Fueente:** 
Oswald (pesos: 300, 400, 500, 600, 700).

Se utiliza de manera estructurada para H1, H2, H3, H4, H5, H6, títulos generales, llamadas a la acción (botones) y enlaces (links).
Su propósito es dar un aspecto sólido, limpio, imponente y muy enfocado al área médica.
Open Sans (pesos: 300, 400, 500, 600, 700).

Se emplea para el cuerpo de texto base (body), atributos generales como subtítulos y elementos de la interfaz, así como los <p> (párrafos).
Fue elegida para brindar la mayor legibilidad posible, especialmente en dispositivos y pantallas móviles para lecturas prolongadas.

- **Animaciones Interactivas:** GSAP 3 (ScrollTrigger, micro-animaciones complejas) + Animaciones y transiciones de CSS puro extraídas del Tailwind config.
- **Peticiones HTTP:** Axios.
- **Módulos Oficiales de Nuxt:** 
  - `@nuxt/image` (procesamiento de imágenes).
  - `@nuxtjs/google-fonts` (carga optimizada de tipografía).
  - `@nuxtjs/robots` & `@nuxtjs/sitemap` (rastreo e indexación).
  - `@nuxt/eslint` (linting).
- **Iconografía:** Se utilizarán **Lucide Icons** (`lucide-vue-next`).
- **Hospedaje Planificado:** Firebase (`firebase.json`, `firebase-tools`).

---

## 2. Sistema de Diseño y Paleta de Colores
Recrear o extender este sistema de tokens en `tailwind.config.ts` y archivos globales de CSS:

### Paleta de Colores
- **Primary (Azul Pizarra):** Mapeo dominante con el código base `#4874a2`, crea tonalidades segun el color principal.
- **Secondary (Verde Olivo):** Código base `#a4b373`. Utilizado en descripciones, fondos tenues, bordes.
- **Cream (Azul Vibrante/Brillante):** `#cfe3f3`. Utilizado para gradientes, hovers y detalles sutiles.
- **Sugerencias**: Juega con esos colores, los principales son y `#4874a2`y `#a4b373` que se encuentran en el logo del cliente.

### Tipografía
- **Títulos y Encabezados (h1-h6, botones):** Fuente `Oswald` (pesos sugeridos: 300, 400, 500, 600, 700). Da un aspecto imponente y clínico a la vez.
- **Cuerpo de texto / Párrafos:** Fuente `Open Sans` (pesos sugeridos: 300, 400, 500, 600, 700). Para máxima legibilidad en dispositivos móviles.

### UI / Componentes Base a Recrear (clases CSS)
Deben crearse las directivas `@layer components` para inyectar estos estilos:
- **Botones (`.btn-primary`, `.btn-secondary`, `.btn-outline`):** Esquinas redondeadas (`rounded-lg`), sombras (`shadow-lg`), elevación al hover y escalado dinámico (`hover:scale-105 transition-all duration-300`).
- **Tarjetas / Contenedores (`.card`):** Bordes más orgánicos (`rounded-2xl`), sombreado avanzado (`shadow-lg hover:shadow-2xl`), estado hover con elevación en Y (`hover:-translate-y-2`).
- **Glassmorphism (`.glass`, `.backdrop-blur-custom`):** Fondos semitransparentes (`rgba(255, 255, 255, 0.1)`), difuminado profundo `backdrop-filter: blur(10px)` con la propiedad `will-change: backdrop-filter` para aceleración GPU.
- **Efectos Degradados:** 
  - Overlays sobre imágenes de fondo: `bg-gradient-to-r from-primary/90 to-primary/70`.
  - Texto destacado: `bg-gradient-to-r from-primary to-cream bg-clip-text text-transparent`.
- **Parallax y Movimiento:** Clases personalizadas `.parallax` (optimizadas: fijas en escritorio, normal en móvil para ahorrar batería y recursos).

---

## 3. SEO, AEO, LLMO y GEO (Arquitectura de Posicionamiento)
La configuración de `app: { head: { ... } }` en Nuxt debe ser exhaustiva, diseñada no solo para Google, sino para agentes de IA y asistentes de voz.

### A. Core SEO & Open Graph
- Meta tags de alto impacto: `description`, `title`, charset, viewport.
- Propiedades Open Graph completas (`og:type`, `og:title`, `og:image`, `og:image:width`, etc.) apuntando a creatividades como `social-share-cover.jpg`.
- Redirecciones Canonical y Twitter Cards.

### B. GEO (Geographic Engine Optimization)
Para SEO Local e indexación orientada a zonas específicas (Ciudad López Mateos / Área Metropolitana):
- Incluir metas: `<meta name="geo.region" content="[REGION-CODE]">`
- `<meta name="geo.placename" content="Ciudad López Mateos">`
- Tags espaciales: `<meta name="ICBM" content="[LATITUD], [LONGITUD]">` y `geo.position`.

### C. AEO (Answer Engine Optimization) & LLMO (Large Language Model Optimization)
Uso agresivo de **JSON-LD (Schema.org)** en la cabecera. Es OBLIGATORIO escupir múltiples esquemas (separados) para facilitar la lectura por LLMs:
1. **`WebPage` con `SpeakableSpecification`:** Marcar selectores CSS (ej: `#inicio h1`, `#faq h3`) para dictado en asistentes de voz (Siri, Alexa).
2. **`Physician` / `MedicalBusiness`:** Definir certificaciones, horarios, geolocalización, rango de precios y especialidad médica (`Geriatrics`).
3. **`FAQPage`:** Listado de preguntas frecuentes orientadas al usuario y a ChatGPT: *¿Qué trata un geriatra?*, *Síntomas de deterioro cognitivo*, *Costos de consulta*.
4. **`MedicalCondition`:** Esquemas específicos desglosando enfermedades usando ICD-10 codes (ej: Alzheimer, Demencia, Osteoporosis en ancianos, Sarcopenia).
5. **`HowTo`:** Un bloque Schema explicando los pasos para agendar la cita (Ubicación, Contacto WhatsApp, Confirmación).
6. **`Review` y `AggregateRating`:** Extraer valoraciones para simular las 5 estrellas (basadas en Doctoralia) directamente en el snippet estructurado.

---

## 4. Guías para Dominar Google PageSpeed Insights (Core Web Vitals)
El sitio debe comportarse como una aplicación ultrarrápida (SPA/PWA) desde el primer Paint. Deben aplicarse las siguientes directrices extraídas:

### Optimización de Recursos (LCP y FCP)
- **Preload Crítico:** Añadir links rel="preload" para las fuentes (`woff2` con configuración `crossorigin="anonymous"`) y para la **imagen principal del LCP (Hero image)**.
- **Resolución DNS y Preconexiones:** `<link rel="dns-prefetch" ...>` a `fonts.googleapis.com`, `fonts.gstatic.com` y tag managers.
- **Formato y Escalado de Imágenes (`@nuxt/image`):** Habilitar los formatos `webp` y `avif`. Definir los quiebres de pantalla (xs, sm, md, lg, xl) en el config para `srcset` automáticos.

### CSS Estructural y Renderizado (CLS y TBT)
- **Content Visibility:** Las etiquetas `<section>` e `<img>` fuera del viewport deben usar la propiedad `content-visibility: auto;` y `contain-intrinsic-size: auto 500px;` para ignorar su coste de renderizado inicial.
- **Aceleración GPU en Animaciones:** Cualquier interacción de traslación/giro/opacidad debe inyectar `transform: translateZ(0);` y `will-change: transform`.
- **Fallback para Sistemas Antiguos y Accesibilidad:** Añadir query `@media (prefers-reduced-motion: reduce)` que cancele por completo todas las transiciones e iteraciones de `animation-duration: 0.01ms`.
- **Bloqueo Seguro de Estilos:** Modificadores utilitarios como `text-balance` (`text-wrap: balance;`) para los encabezados `<h1>` o `<h2>` evitan saltos de línea antiestéticos (Layout Shifts).

### Scripts de Terceros
- Scripts como Google Tag Manager, Google Analytics u otros trackers **deben diferirse** hasta después del proceso "Hydration" de Vue, o cargarse siempre con propiedades `async` e implementados de forma no bloqueante (usando la ventana `window.dataLayer`).

---

## 5. Reglas de Estructura, Contenido y UI/UX
Para la construcción del sitio web, se deben integrar de forma estricta las siguientes características:

### Navegación y Secciones
- **Estructura del sitio:** El layout debe contar con: Inicio, Acerca de, Servicios, Testimonios, Preguntas Frecuentes, Contacto y un Call to Action (CTA) persistente para WhatsApp.
- **Manejo de Legales y Privacidad:**
  - Política de Privacidad: Se presentará en un **Modal**.
  - Términos y Condiciones: Se presentarán en un **Modal**.
  - Aviso de Cookies: Debe aparecer como un **Popup / Banner** anclado al final (bottom) de la página hasta que el usuario exprese su consentimiento.
- **CTA Flotante:** Disponer de un botón flotante de WhatsApp siempre visible en la esquina inferior derecha (`bottom-right`).

### UI y Componentes Específicos
- **Iconos:** Todo el sistema iconográfico debe usar la librería **Lucide Icons** para asegurar un entorno de diseño cohesivo e intuitivo.
- **Geolocalización:** Cada vez que se listen los domicilios o datos de contacto (footer o página de Contactos), se deberá renderizar **Google Maps** (iframe visual o integraciones mediante API).
- **Diseño de Testimonios:** 
  - Modelar una grilla o slider mostrando las **mejores 9 reseñas** provenientes de Doctoralia.
  - En la posición de la **décima tarjeta**, diseñar un componente interactivo que pase a ser un gran CTA para invitar recurrentemente a solicitar una consulta médica al WhatsApp.
  - Implementar botones y enlaces estratégicos animando/invitando al paciente satisfecho a poder dejar una reseña en **Google Local Business / Google Maps**, mejorando la ficha del Dr.

### Criterios Editoriales y Rendimiento SEO (Texto)
- **Idioma:** Todo el site, la parametrización de etiquetas, código y atributos de accesibilidad debe configurarse **100% en español**.
- **Acentuación / Resaltado Semántico:** Analizar los copys y marcar los conceptos más importantes (síntomas, soluciones o beneficios diferenciales) dentro de etiquetas `<strong>` (negritas). Esto no solo facilita la lectura natural y el escaneo por adultos mayores, sino que prioriza la indexación en motores de búsqueda (SEO/AEO).

---

## 6. Información en Crudo a Plasmar en el Sitio Web
*(En este apartado de la solicitud al Engine Code Generator, anexa todos los textos, currículum, patologías y listado de atenciones completas que te entregará el Dr. Eduardo Pacheco para que la IA estructure y reescriba respetando esta lista de requisitos)*:

> **
Esta es la información de los gustos del Geriatra, el posicionamiento debe aplicar para las zonas que el geriatra radica: Zona Ermeralda, (Centro Méico Esmeralda), Arboledas (Clinica Méxica Arboledas) de Estado de México. 

1. Identidad Visual y Concepto* Paleta de Colores: Dado que sus dos principales sedes son Centro Médico Esmeralda (colores verde oliva y azul) y Clínica médica Arboledas (colores azul marino y blanco), el doctor desea mantener parte de esa línea visual.
* Estilo de Diseño: Prefiere un perfil más sobrio y profesional.
* Identidad Digital: El nombre de dominio será geriatraatizapan.com y geriatriaarboledas.com.
* Escalabilidad: Se requiere la posibilidad de duplicar el website y modificarlo a geriatriaarboledas porque también consulta ahí dos días a la semana.2. Estructura de Contenidos (Copywriting Clínico)* Mensaje Principal (Inicio): “Geriatría integral enfocada en prevención, funcionalidad y calidad de vida, con atención centrada en la persona y acompañamiento familiar.”.Perfil del Especialista (Acerca de):
* Nombre: Dr. Jorge Eduardo Pacheco Ponce.
* Ubicación: Médico Geriatra en Esmeralda y Arboledas, Estado de México.
* Enfoque: Atención integral al adulto mayor con enfoque humanista, centrado en la persona y orientado a la prevención, funcionalidad y calidad de vida. Considera no solo las enfermedades, sino también el estado funcional, mental, emocional y social de cada paciente.
* Metodología: Valoración geriátrica integral para identificar de manera temprana fragilidad, riesgo de caídas, deterioro cognitivo, problemas de memoria, polifarmacia y descontrol de enfermedades crónicas. Trabajo conjunto con la familia para planes de manejo personalizados.Formación Académica y Registro:
* Licenciatura en Medicina – [Universidad Nacional Autónoma de México (UNAM)].
* Especialidad en Geriatría – [Centro Medico Nacional La Raza].
* Cédula profesional: [11603525].
* Cédula de especialidad: [14012808].3. Catálogo de Servicios DetalladoEl médico solicita que los servicios se muestren con íconos + texto breve en tarjetas (título corto y 1–2 líneas), mostrando 6 principales inicialmente y el resto bajo un botón de "ver más" para mantener una estética premium.* Consulta geriátrica integral (Valoración Geriátrica Integral): Evaluación médica completa del adulto mayor, incluyendo funcionalidad, memoria, estado emocional, nutrición, marcha y riesgo de caídas.
* Control y seguimiento de enfermedades crónicas: Diabetes, hipertensión, enfermedad cardiovascular, enfermedad renal crónica, EPOC y otros padecimientos frecuentes, con metas y tratamiento adaptados a la edad y a la funcionalidad.
* Evaluación de memoria y deterioro cognitivo: Detección y abordaje de problemas de memoria, demencia, delirium y cambios conductuales, con orientación a la familia y plan de seguimiento.
* Prevención de caídas y trastornos de la marcha: Valoración de equilibrio, fuerza, seguridad en casa, calzado y auxiliares para caminar; plan preventivo y rehabilitación dirigida.
* Revisión de medicamentos (polifarmacia y prescripción inapropiada): Depuración y optimización de tratamientos para reducir efectos adversos, interacciones y riesgo de hospitalizaciones.
* Manejo de fragilidad y sarcopenia: Intervención integral con actividad física, nutrición y seguimiento para recuperar fuerza, resistencia y funcionalidad.
* Evaluación nutricional del adulto mayor: Detección de malnutrición, pérdida de peso, riesgo de deshidratación y plan nutricional individualizado.
* Atención a síndromes geriátricos: Caídas, inmovilidad, incontinencia, estreñimiento crónico, trastornos del sueño, dolor crónico, úlceras por presión y deterioro funcional.
* Plan de acción geriátrico y acompañamiento familiar: Objetivos claros, recomendaciones prácticas, educación a cuidadores y seguimiento para mantener la mejor calidad de vida posible.
* Atención domiciliaria: Valoración y seguimiento en domicilio en Esmeralda y Arboledas, cuando el paciente tiene limitación para trasladarse.4. Funcionalidades y Estilo de Comunicación* Biblioteca de Salud: Desea incluir pequeñas explicaciones sobre las enfermedades que trata, utilizando el material ya elaborado en su perfil de Doctoralia: https://www.doctoralia.com.mx/jorge-eduardo-pacheco-ponce/geriatra-medico-general/ciudad-lopez-mateos#news-section.Canales de Contacto:
* WhatsApp: 5539203393.
* Recepción Esmeralda: 5516632510.
* Recepción Arboledas: 55 5378 2878.
* Redes Sociales: No tiene actualmente, solicita conectar a su perfil de Doctoralia.
* Tono de voz: Cercano y amigable.
* Social Proof: Sí desea incluir testimonios de pacientes (pueden ser generados o tomados de referencia).
* Cumplimiento Legal: No cuenta con registro de publicidad COFEPRIS y le gustaría obtenerlo.
No tiene redes sociales aun, no poner iconos de redes sociales excepto doctoralia.
El medico indica que las CTA son mas propensas a llamada telefonica en lugar de whatsapp po rlo cual solo debemos tener una CTA de whatsapp para whatsapp debemos tener una funcion similar a esta.

function loginNotification(us) {
            const now = new Date();
            let hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes().toString().padStart(2, '0');
            let seconds = now.getSeconds().toString().padStart(2, '0');

            let hora = `${hours}:${minutes}:${seconds}`;
            let mensaje = `Click sitio web en el boton agendar cita a las: ${hora}`;


            axios({
                method: 'post',
                url: 'https://cybertbot.com/masivo',
                data: {
                    number: "AQUI EL NUMERO PRINCIPAL DEL MEDICO",
                    message: mensaje
                }
            })
                .then(() => {
                    console.log("ok");
                })
                .catch((error) => {
                    console.error("Error en la petición:", error);
                });

   
        }
**

---

## 7. Recursos y Assets Multimedia
A continuación se deben proporcionar los enlaces o referencias exactas a los assets visuales del Dr. Eduardo Pacheco Ponce para su correcta integración y optimización (`@nuxt/image`):

- **Logotipo Principal (Light/Dark mode):** `logo-main.webp`
- **Imagen Principal (Hero / Above the fold):** `hero1.webp`
- **Imagen Principal (Acerca de / Above the fold):** `acercade.webp`
- **Imagen Principal (Footer/ Above the fold):** `footer.webp`
- **Social Share Cover (Open Graph / Twitter Card):** `social-media-share.webp` *(Dimensiones sugeridas: 1200x630px)*

### Logos de Sedes (multi-sitio)
- **Logo sede Esmeralda:** `esmeralda-logo.png`
  - *Uso sugerido:* Mostrado dinámicamente en el `AppHeader` y `AppFooter` cuando `NUXT_PUBLIC_SITE_ID=esmeralda`. En la sección de Acerca de / Contacto, dentro de la tarjeta de la sede Centro Médico Esmeralda.
- **Logo sede Arboledas:** `arboledas-logo.png`
  - *Uso sugerido:* Mostrado dinámicamente en el `AppHeader` y `AppFooter` cuando `NUXT_PUBLIC_SITE_ID=arboledas`. En la sección de Acerca de / Contacto, dentro de la tarjeta de la sede Clínica Médica Arboledas.

### Logos Instituciones Académicas (fondo blanco — requieren contenedor con fondo claro o pill blanco)
- **Logo UNAM:** `unam.webp`
  - *Uso sugerido:* Sección "Acerca de" en un bloque de **"Formación Académica"**. Mostrado junto al texto "Licenciatura en Medicina – Universidad Nacional Autónoma de México". Contenedor con `bg-white rounded-xl shadow p-3` para aislar el fondo blanco.
- **Logo Centro Médico Nacional La Raza (IMSS):** `laraza.webp`
  - *Uso sugerido:* Mismo bloque de "Formación Académica", junto al texto "Especialidad en Geriatría – Centro Médico Nacional La Raza". Mismo tratamiento de contenedor blanco.



**Preguntas de posicionamiento antes de comennzar:**
-El sitio web tendrá dos dominios geriatraatizapan.com y  geriatriaarboledas.com estará alojado en firebase hosting y el dominio se encuentra en namcheap. ¿Como se maneja este doble posicionamiento?


Si tu tienes preguntas antes de comenzar hasmelas saber.

---

**Instrucción Final para el Engine Code Generator:**
Construye el proyecto respetando esta exactitud técnica, reemplazando la metadata, contenido médico y copywriter original por datos orientados al Dr. Eduardo Pacheco Ponce (Geriatra). El sistema visual debe sentirse de vanguardia pero transmitiendo extrema confianza, propio de un enfoque holístico en salud de la tercera edad.
