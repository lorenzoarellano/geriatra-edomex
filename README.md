# Dr. Eduardo Pacheco Ponce · Geriatra — Sitio Web Oficial

Sitio web estático multi-dominio para el **Dr. Jorge Eduardo Pacheco Ponce**, médico geriatra con consultorio en Ciudad López Mateos y Tlalnepantla de Baz, Estado de México. Construido con una arquitectura centrada en **SEO técnico avanzado, AEO, LLMO y GEO** para maximizar visibilidad en buscadores tradicionales, motores de respuesta y modelos de lenguaje de gran escala.

---

## Stack Tecnológico

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | [Nuxt 3](https://nuxt.com/) | 3.21.1 |
| Runtime | [Nitro](https://nitro.unjs.io/) — preset `static` | 2.13.1 |
| UI Framework | [Vue 3](https://vuejs.org/) Composition API | 3.5.x |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) | 3.4.x |
| Animaciones | [GSAP](https://gsap.com/) | 3.12.x |
| Iconos | [Lucide Vue Next](https://lucide.dev/) | 0.468.x |
| Imágenes | [@nuxt/image](https://image.nuxt.com/) | 1.8.x |
| Fuentes | [@nuxtjs/google-fonts](https://google-fonts.nuxtjs.org/) | 3.2.x |
| Robots | [@nuxtjs/robots](https://nuxtseo.com/robots) | 5.7.x |
| Sitemap | [@nuxtjs/sitemap](https://nuxtseo.com/sitemap) | 7.6.x |
| Analytics | Google Analytics 4 (`G-32EHWN9LFP`) | — |
| HTTP Client | [Axios](https://axios-http.com/) | 1.7.x |
| Tipado | TypeScript | 5.7.x |
| Linter | ESLint + @nuxt/eslint | 0.7.x |
| Deploy | [Firebase Hosting](https://firebase.google.com/docs/hosting) | 13.35.x |
| CI/Scripts | [cross-env](https://github.com/kentcdodds/cross-env) | 7.0.x |

---

## Arquitectura SEO / AEO / LLMO / GEO

Este proyecto implementa una estrategia completa de posicionamiento en cuatro dimensiones.

### SEO Técnico

- **SSR → Static generation** (`nuxt generate`): HTML pre-renderizado con todo el contenido en el primer byte; sin JavaScript necesario para indexación.
- **Canonical URLs** dinámicas por dominio via composable `useSite()`.
- **Meta tags** completos: `title`, `description`, `og:*`, `twitter:card`, `geo.*`, `ICBM` — generados por dominio en tiempo de ejecución.
- **`robots.txt`** y **`sitemap.xml`** generados automáticamente por `@nuxtjs/robots` y `@nuxtjs/sitemap`.
- **Preload** de imágenes críticas (LCP): `hero1.webp`, `acercade.webp`.
- **Cache headers** agresivos para assets estáticos (`max-age=31536000, immutable`) configurados en `firebase.json`.
- **Google Fonts auto-hosted**: las fuentes se descargan en build time y se sirven localmente (elimina dependencia de terceros para FCP).

### AEO (Answer Engine Optimization)

Optimización para **Google SGE, Bing Copilot, Perplexity** y demás motores de respuesta con búsqueda generativa. Se inyectan **8 esquemas JSON-LD independientes** en el `<head>` mediante el componente headless `components/seo/JsonLd.vue`:

| # | Tipo Schema.org | Propósito |
|---|---|---|
| 1 | `Physician` + `MedicalBusiness` | Entidad médica principal con credenciales, ubicaciones duales, horarios dinámicos y `areaServed` (6 ciudades) |
| 2 | `Person` | Knowledge graph del médico: `alumniOf` (IPN, UNAM, La Raza), `worksFor`, `hasCredential` con URLs SEP |
| 3 | `FAQPage` | 10 preguntas y respuestas sobre geriatría, costos, IMSS, Alzheimer, demencia |
| 4 | `ItemList` de `MedicalCondition` | 9 condiciones con código **ICD-10**: Alzheimer, Demencia, Sarcopenia, Fragilidad, HTA, DM2, Depresión, Osteoporosis, Incontinencia |
| 5 | `HowTo` | 4 pasos para agendar consulta (rich result accionable) |
| 6 | `MedicalOrganization` + `Review` + `AggregateRating` | 6 reseñas reales de Doctoralia, `reviewCount: 25`, `ratingValue: 5` |
| 7 | `WebPage` + `SpeakableSpecification` | Selectores CSS marcados para asistentes de voz (Siri, Alexa, Google Assistant) |
| 8 | `BreadcrumbList` | 6 secciones de la página como breadcrumbs canonicos |

### LLMO (Large Language Model Optimization)

Estrategia para ser **citado y referenciado por ChatGPT, Claude, Gemini y Perplexity** como fuente autoritativa:

- **Entidad única verificable**: credenciales académicas con identificadores únicos (cédula SEP `11603525` y `14012808`) y URLs de verificación oficial.
- **`sameAs` array** con referencias cruzadas: Doctoralia, SEP, ambos dominios — permite a los LLMs triangular la identidad del médico.
- **Texto denso en contexto**: descripciones medicamente precisas en todas las propiedades `description` de Schema.org para alimentar el contexto de los modelos.
- **ICD-10 explícito** en cada condición médica: los modelos reconocen la terminología clínica internacional y aumentan la confianza en la entidad.
- **Nombres alternativos** (`alternateName`) que cubren variaciones de búsqueda natural.
- **`SpeakableSpecification`** activa el marcado de fragmentos preferibles para respuestas de voz y síntesis de LLMs.

### GEO (Generative Engine Optimization)

Señales geográficas implementadas para captura de búsquedas locales en el contexto de IA generativa:

- **`GeoCoordinates`** reales en cada sede:
  - Esmeralda: `19.559989, -99.2969219`
  - Arboledas: `19.5609322, -99.2216532`
- **`hasMap`** con Google Maps Place ID real en cada `MedicalBusiness`:
  - Esmeralda: `place_id:0x85d21b481ea3e46f:0x5b1d211329dd2d8d`
  - Arboledas: `place_id:0x85d21d0fa272f0db:0x857aad64cbc1a4c6`
- **Meta tags `geo.*` e `ICBM`** en el `<head>` por sede.
- **`areaServed`** cubre 6 municipios: Cd. López Mateos, Atizapán de Zaragoza, Tlalnepantla de Baz, Naucalpan de Juárez, Cuautitlán Izcalli, Huixquilucan.
- **Horarios dinámicos por sede** en `OpeningHoursSpecification` (Esmeralda: Lun–Vie; Arboledas: Mar y Jue).
- **Direcciones PostalAddress** con `streetAddress`, `addressLocality`, `postalCode`, `addressRegion`, `addressCountry` completos para geocodificación precisa.

---

## Arquitectura Multi-Dominio

El sitio sirve **dos dominios independientes desde el mismo codebase**:

```
geriatraatizapan.com   →  sede Esmeralda (Cd. López Mateos)
geriatriaarboledas.com →  sede Arboledas (Tlalnepantla de Baz)
```

La detección del sitio activo ocurre en runtime via `composables/useSite.ts`:

1. **SSR**: lee el header `Host` de la request HTTP
2. **Cliente**: lee `window.location.hostname`
3. **Fallback**: variable de entorno `NUXT_PUBLIC_SITE_ID`

Cada sitio retorna su propia configuración: título SEO, descripción, canonical URL, teléfono, dirección, coordenadas y URLs de Google Business.

---

## Estructura del Proyecto

```
/
├── components/
│   ├── seo/
│   │   └── JsonLd.vue          # 8 schemas JSON-LD (headless)
│   ├── layout/
│   │   ├── AppHeader.vue       # Nav + 2 CTAs de llamada diferenciados
│   │   └── AppFooter.vue       # Footer con ambas sedes
│   └── sections/
│       ├── HeroSection.vue
│       ├── AboutSection.vue
│       ├── ServicesSection.vue
│       ├── HealthLibrary.vue
│       ├── TestimonialsSection.vue
│       ├── FaqSection.vue
│       └── ContactSection.vue
├── composables/
│   ├── useSite.ts              # Runtime domain detection
│   ├── useWhatsapp.ts
│   └── useModals.ts
├── config/
│   └── sites.ts                # Datos reales por sede (coords, phones, etc.)
├── pages/
│   └── index.vue               # GA4 via useHead()
├── public/                     # Assets estáticos (imágenes .webp, .png)
├── assets/css/
│   └── main.css                # Tailwind + clases custom
├── nuxt.config.ts
├── firebase.json               # Firebase Hosting (2 targets, static)
└── .firebaserc
```

---

## Scripts

```bash
# Desarrollo local
npm run dev

# Generar sitio estático
npm run generate          # Output → dist/

# Deploy a producción
npm run deploy:esmeralda  # → geriatraatizapan (Firebase)
npm run deploy:arboledas  # → geriatriaarboledas (Firebase)
```

---

## Variables de Entorno

| Variable | Valores | Uso |
|---|---|---|
| `NUXT_PUBLIC_SITE_ID` | `esmeralda` \| `arboledas` | Selecciona la configuración del sitio en build time (fallback de `useSite`) |

---

## Firebase Hosting

Dos targets independientes en `firebase.json`, ambos sirviendo el directorio `dist/`:

- **`geriatraatizapan`** → `geriatraatizapan.com`
- **`geriatriaarboledas`** → `geriatriaarboledas.com`

Rewrites SPA (`** → /index.html`) + cache headers para assets estáticos.

---

## Créditos y Verificabilidad

| Credencial | ID | Verificación |
|---|---|---|
| Cédula Médico Cirujano (IPN) | `11603525` | [SEP](https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/tramitesCedulaAux.action?cedula=11603525) |
| Cédula Especialidad Geriatría (UNAM) | `14012808` | [SEP](https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/tramitesCedulaAux.action?cedula=14012808) |
| Perfil Doctoralia | — | [Ver perfil](https://www.doctoralia.com.mx/jorge-eduardo-pacheco-ponce/geriatra-medico-general/ciudad-lopez-mateos) |

---

*Sitio desarrollado con foco en posicionamiento avanzado: SEO técnico, AEO para motores de respuesta generativa, LLMO para citación por modelos de lenguaje y GEO para búsquedas locales con IA.*
