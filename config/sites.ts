// ──────────────────────────────────────────────────────────────────
// Configuración de sedes del Dr. Eduardo Pacheco Ponce
// Cambiar la sede activa mediante: NUXT_PUBLIC_SITE_ID=esmeralda | arboledas
// ──────────────────────────────────────────────────────────────────

export interface SiteConfig {
  id: string
  name: string
  tagline: string
  clinicName: string
  logoFile: string        // archivo en /public/
  canonicalUrl: string
  phone: string           // teléfono principal (CTA llamada)
  phoneDisplay: string    // formato para mostrar
  whatsapp: string        // solo el número sin +52
  whatsappDisplay: string
  address: string
  addressShort: string
  mapsIframeSrc: string   // src del iframe embed de Google Maps
  mapsUrl: string         // link directo a Google Maps
  schedule: string
  googleBusinessUrl: string
  doctoraliaUrl: string
  // SEO local
  geo: { lat: string; lng: string; region: string; placename: string }
  seoTitle: string
  seoDescription: string
}

// ──────────────────────────────────────────────────────────────────
// SEDE: Centro Médico Esmeralda (geriatraatizapan.com)
// ──────────────────────────────────────────────────────────────────
const esmeralda: SiteConfig = {
  id: 'esmeralda',
  name: 'Dr. Eduardo Pacheco – Geriatra Esmeralda',
  tagline: 'Consulta geriátrica en Centro Médico Esmeralda, Cd. López Mateos',
  clinicName: 'Centro Médico Esmeralda',
  logoFile: 'esmeralda-logo.png',
  canonicalUrl: 'https://geriatraatizapan.com',
  phone: '5516632510',
  phoneDisplay: '55 1663 2510',
  whatsapp: '5539203393',
  whatsappDisplay: '55 3920 3393',
  address: 'Cto. Plaza Esmeralda, Bosque Esmeralda, C.P. 52937, Cd. López Mateos, Edo. de México',
  addressShort: 'Bosque Esmeralda, Cd. López Mateos',
  mapsIframeSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.5!2d-99.2969219!3d19.559989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21b481ea3e46f:0x5b1d211329dd2d8d!2sCentro+M%C3%A9dico+Esmeralda+CHS.!5e0!3m2!1ses!2smx!4v1740000000000!5m2!1ses!2smx',
  mapsUrl: 'https://maps.google.com/?q=place_id:0x85d21b481ea3e46f:0x5b1d211329dd2d8d',
  schedule: 'Lunes a Viernes · 10:00 – 18:00 h',
  googleBusinessUrl: 'https://search.google.com/local/writereview?placeid=0x85d21b481ea3e46f:0x5b1d211329dd2d8d',
  doctoraliaUrl:
    'https://www.doctoralia.com.mx/jorge-eduardo-pacheco-ponce/geriatra-medico-general/ciudad-lopez-mateos',
  geo: {
    lat: '19.559989',
    lng: '-99.2969219',
    region: 'MX-MEX',
    placename: 'Cd. López Mateos, Estado de México',
  },
  seoTitle:
    'Dr. Eduardo Pacheco Ponce – Geriatra en Cd. López Mateos | Centro Médico Esmeralda',
  seoDescription:
    'Consulta con el Dr. Jorge Eduardo Pacheco Ponce, Médico Geriatra en Centro Médico Esmeralda, Bosque Esmeralda, Cd. López Mateos. Valoración geriátrica integral, deterioro cognitivo, prevención de caídas y más.',
}

// ──────────────────────────────────────────────────────────────────
// SEDE: Clínica Médica Arboledas (geriatriaarboledas.com)
// ──────────────────────────────────────────────────────────────────
const arboledas: SiteConfig = {
  id: 'arboledas',
  name: 'Dr. Eduardo Pacheco – Geriatra Arboledas',
  tagline: 'Consulta geriátrica en Clínica Médica Arboledas, Tlalnepantla de Baz',
  clinicName: 'Clínica Médica Arboledas',
  logoFile: 'arboledas-logo.png',
  canonicalUrl: 'https://geriatriaarboledas.com',
  phone: '5553782878',
  phoneDisplay: '55 5378 2878',
  whatsapp: '5539203393',
  whatsappDisplay: '55 3920 3393',
  address: 'Calz. de los Jinetes 56, Las Arboledas, C.P. 54020, Tlalnepantla de Baz, México',
  addressShort: 'Las Arboledas, Tlalnepantla',
  mapsIframeSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.5!2d-99.2216532!3d19.5609322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d0fa272f0db:0x857aad64cbc1a4c6!2sCentro+Medico+Arboledas!5e0!3m2!1ses!2smx!4v1740000000001!5m2!1ses!2smx',
  mapsUrl: 'https://maps.google.com/?q=place_id:0x85d21d0fa272f0db:0x857aad64cbc1a4c6',
  schedule: 'Martes y Jueves · 10:00 – 18:00 h',
  googleBusinessUrl: 'https://search.google.com/local/writereview?placeid=0x85d21d0fa272f0db:0x857aad64cbc1a4c6',
  doctoraliaUrl:
    'https://www.doctoralia.com.mx/jorge-eduardo-pacheco-ponce/geriatra-medico-general/ciudad-lopez-mateos',
  geo: {
    lat: '19.5609322',
    lng: '-99.2216532',
    region: 'MX-MEX',
    placename: 'Tlalnepantla de Baz, Estado de México',
  },
  seoTitle:
    'Dr. Eduardo Pacheco Ponce – Geriatra en Las Arboledas, Tlalnepantla | Clínica Médica Arboledas',
  seoDescription:
    'Consulta con el Dr. Jorge Eduardo Pacheco Ponce, Médico Geriatra en Clínica Médica Arboledas, Calz. de los Jinetes 56, Tlalnepantla de Baz. Atención especializada al adulto mayor: valoración geriátrica, deterioro cognitivo, fragilidad y más.',
}

// ──────────────────────────────────────────────────────────────────
// Mapa de sedes exportado
// ──────────────────────────────────────────────────────────────────
export const sites: Record<string, SiteConfig> = {
  esmeralda,
  arboledas,
}

export default sites
