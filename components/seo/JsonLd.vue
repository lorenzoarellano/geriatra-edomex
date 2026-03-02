<script setup lang="ts">
/**
 * SeoJsonLd.vue
 * Inyecta múltiples esquemas JSON-LD en el <head> del documento
 * para optimización AEO (Answer Engine), LLMO y GEO.
 *
 * Esquemas incluidos:
 *  1. Physician / MedicalBusiness (con location[] dual-sede)
 *  2. Person (knowledge graph del médico)
 *  3. FAQPage (10 preguntas)
 *  4. MedicalCondition (9 condiciones ICD-10)
 *  5. HowTo (¿Cómo agendar la cita?)
 *  6. Review + AggregateRating (reseñas reales Doctoralia)
 *  7. WebPage con SpeakableSpecification
 *  8. BreadcrumbList (secciones de página)
 */
const site = useSite()

// Horarios dinámicos por sede
const openingHours = site.id === 'arboledas'
  ? [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Thursday'],
        opens: '10:00',
        closes: '18:00',
      },
    ]
  : [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '18:00',
      },
    ]

// ── 1. Physician / MedicalBusiness ─────────────────────────────
const physicianSchema = {
  '@context': 'https://schema.org',
  '@type': ['Physician', 'MedicalBusiness'],
  '@id': `${site.canonicalUrl}/#physician`,
  name: 'Dr. Jorge Eduardo Pacheco Ponce',
  alternateName: 'Dr. Eduardo Pacheco Geriatra',
  description:
    'Médico Geriatra especializado en atención integral al adulto mayor en Esmeralda y Arboledas, Estado de México. Valoración geriátrica, deterioro cognitivo, fragilidad y prevención de caídas.',
  url: site.canonicalUrl,
  image: `${site.canonicalUrl}/hero1.webp`,
  telephone: site.phone,
  medicalSpecialty: 'Geriatrics',
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Licenciatura en Medicina',
      recognizedBy: { '@type': 'Organization', name: 'Instituto Politécnico Nacional' },
      identifier: '11603525',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Especialidad en Geriatría',
      recognizedBy: { '@type': 'Organization', name: 'Universidad Nacional Autónoma de México' },
      identifier: '14012808',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.id === 'arboledas'
      ? 'Calz. de los Jinetes 56, Las Arboledas'
      : 'Cto. Plaza Esmeralda, Bosque Esmeralda',
    addressLocality: site.id === 'arboledas' ? 'Tlalnepantla de Baz' : 'Cd. López Mateos',
    postalCode: site.id === 'arboledas' ? '54020' : '52937',
    addressRegion: 'Estado de México',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  hasMap: site.mapsUrl,
  areaServed: [
    { '@type': 'City', name: 'Cd. López Mateos' },
    { '@type': 'City', name: 'Atizapán de Zaragoza' },
    { '@type': 'City', name: 'Tlalnepantla de Baz' },
    { '@type': 'City', name: 'Naucalpan de Juárez' },
    { '@type': 'City', name: 'Cuautitlán Izcalli' },
    { '@type': 'City', name: 'Huixquilucan' },
  ],
  location: [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://geriatraatizapan.com/#sede-esmeralda',
      name: 'Dr. Eduardo Pacheco Ponce – Geriatra · Centro Médico Esmeralda',
      telephone: '5516632510',
      hasMap: 'https://maps.google.com/?q=place_id:0x85d21b481ea3e46f:0x5b1d211329dd2d8d',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cto. Plaza Esmeralda, Bosque Esmeralda',
        addressLocality: 'Cd. López Mateos',
        postalCode: '52937',
        addressRegion: 'Estado de México',
        addressCountry: 'MX',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '19.559989',
        longitude: '-99.2969219',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '10:00',
          closes: '18:00',
        },
      ],
      medicalSpecialty: 'Geriatrics',
    },
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://geriatriaarboledas.com/#sede-arboledas',
      name: 'Dr. Eduardo Pacheco Ponce – Geriatra · Clínica Médica Arboledas',
      telephone: '5553782878',
      hasMap: 'https://maps.google.com/?q=place_id:0x85d21d0fa272f0db:0x857aad64cbc1a4c6',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calz. de los Jinetes 56, Las Arboledas',
        addressLocality: 'Tlalnepantla de Baz',
        postalCode: '54020',
        addressRegion: 'Estado de México',
        addressCountry: 'MX',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '19.5609322',
        longitude: '-99.2216532',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Tuesday', 'Thursday'],
          opens: '10:00',
          closes: '18:00',
        },
      ],
      medicalSpecialty: 'Geriatrics',
    },
  ],
  openingHoursSpecification: openingHours,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '25',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.doctoralia.com.mx/jorge-eduardo-pacheco-ponce/geriatra-medico-general/ciudad-lopez-mateos',
    'https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/tramitesCedulaAux.action?cedula=11603525',
    'https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/tramitesCedulaAux.action?cedula=14012808',
    'https://geriatraatizapan.com',
    'https://geriatriaarboledas.com',
  ],
}

// ── 2. Person (knowledge graph independiente) ─────────────────
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.canonicalUrl}/#person`,
  name: 'Dr. Jorge Eduardo Pacheco Ponce',
  givenName: 'Jorge Eduardo',
  familyName: 'Pacheco Ponce',
  honorificPrefix: 'Dr.',
  jobTitle: 'Médico Geriatra',
  description: 'Médico Geriatra egresado del IPN y especialista por la UNAM. Atiende a adultos mayores en Cd. López Mateos y Tlalnepantla de Baz, Estado de México.',
  image: `${site.canonicalUrl}/hero1.webp`,
  url: site.canonicalUrl,
  telephone: site.phone,
  nationality: { '@type': 'Country', name: 'México' },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Instituto Politécnico Nacional',
      url: 'https://www.ipn.mx',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Universidad Nacional Autónoma de México',
      url: 'https://www.unam.mx',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Centro Médico Nacional La Raza – IMSS',
    },
  ],
  worksFor: [
    {
      '@type': 'MedicalBusiness',
      name: 'Centro Médico Esmeralda',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Cto. Plaza Esmeralda, Bosque Esmeralda',
        addressLocality: 'Cd. López Mateos',
        postalCode: '52937',
        addressRegion: 'Estado de México',
        addressCountry: 'MX',
      },
    },
    {
      '@type': 'MedicalBusiness',
      name: 'Clínica Médica Arboledas',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calz. de los Jinetes 56, Las Arboledas',
        addressLocality: 'Tlalnepantla de Baz',
        postalCode: '54020',
        addressRegion: 'Estado de México',
        addressCountry: 'MX',
      },
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Cédula Profesional – Médico Cirujano',
      credentialCategory: 'Licenciatura en Medicina',
      recognizedBy: { '@type': 'Organization', name: 'Instituto Politécnico Nacional' },
      identifier: '11603525',
      url: 'https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/tramitesCedulaAux.action?cedula=11603525',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Cédula de Especialidad – Geriatría',
      credentialCategory: 'Especialidad en Geriatría',
      recognizedBy: { '@type': 'Organization', name: 'Universidad Nacional Autónoma de México' },
      identifier: '14012808',
      url: 'https://www.cedulaprofesional.sep.gob.mx/cedula/presidencia/tramitesCedulaAux.action?cedula=14012808',
    },
  ],
  sameAs: [
    'https://www.doctoralia.com.mx/jorge-eduardo-pacheco-ponce/geriatra-medico-general/ciudad-lopez-mateos',
    'https://geriatraatizapan.com',
    'https://geriatriaarboledas.com',
  ],
}

// ── 3. FAQPage ─────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es un médico geriatra y qué trata?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un médico geriatra es un especialista en la salud integral de personas mayores de 65 años. Atiende enfermedades crónicas, deterioro cognitivo, demencia, fragilidad, riesgo de caídas, polifarmacia y síndromes geriátricos, considerando el estado funcional, cognitivo y social del paciente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo debo llevar a mi familiar con un geriatra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se recomienda una consulta geriátrica si su familiar presenta pérdida de memoria, caídas frecuentes, pérdida de peso, uso de múltiples medicamentos, cambios de ánimo o dificultad para actividades cotidianas. También como revisión preventiva anual a partir de los 65 años.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la Valoración Geriátrica Integral?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Valoración Geriátrica Integral evalúa el estado funcional, cognitivo, emocional, nutricional y social del adulto mayor, además de revisar sus medicamentos y riesgo de caídas, para diseñar un plan de manejo personalizado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la polifarmacia y por qué es peligrosa en adultos mayores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La polifarmacia es el uso simultáneo de 5 o más medicamentos. En adultos mayores puede provocar caídas, confusión, daño renal o interacciones graves. El Dr. Pacheco revisa y optimiza los tratamientos para reducir estos riesgos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Ofrece atención domiciliaria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El Dr. Pacheco ofrece atención domiciliaria en Zona Esmeralda (Cd. López Mateos y Atizapán) y Las Arboledas (Tlalnepantla de Baz) para pacientes con dificultad de traslado. Comuníquese al WhatsApp 55 3920 3393 para coordinar la visita.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta la consulta con el Dr. Eduardo Pacheco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La consulta con el Dr. Jorge Eduardo Pacheco Ponce es de carácter particular. Para conocer el costo vigente comuníquese directamente al consultorio: Esmeralda 55 1663 2510, Arboledas 55 5378 2878 o por WhatsApp 55 3920 3393.',
      },
    },
    {
      '@type': 'Question',
      name: '¿El Dr. Pacheco atiende en IMSS, ISSSTE o solo consulta particular?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El consultorio del Dr. Pacheco en Centro Médico Esmeralda y Clínica Médica Arboledas opera como consulta privada particular. No se atiende directamente mediante derechohabiencia IMSS o ISSSTE en estos consultorios.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia hay entre demencia y Alzheimer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La demencia es un síndrome general que describe la pérdida de funciones cognitivas suficiente para interferir con la vida diaria. El Alzheimer es el tipo más frecuente de demencia (60–70% de los casos) y se caracteriza por la acumulación de placas amiloides en el cerebro. Existen otros tipos: demencia vascular, demencia de Lewy y demencia frontotemporal, entre otras.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué debo llevar a la primera consulta geriátrica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para la primera consulta con el Dr. Pacheco le recomendamos llevar: (1) Lista completa de medicamentos actuales con dosis, (2) estudios de laboratorio recientes (menos de 6 meses), (3) electrocardiograma si lo tiene, (4) resumen de hospitalizaciones previas y (5) un familiar o cuidador que pueda aportar información sobre la evolución del paciente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿A partir de qué edad se recomienda visitar al geriatra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se recomienda una valoración geriátrica preventiva a partir de los 65 años, o antes si existen enfermedades crónicas múltiples, deterioro funcional, caídas recurrentes o uso de 5 o más medicamentos. El objetivo es identificar riesgos antes de que generen complicaciones.',
      },
    },
  ],
}

// ── 4. MedicalCondition (ICD-10) ───────────────────────────────
const conditionsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Condiciones médicas tratadas por el Dr. Eduardo Pacheco',
  itemListElement: [
    {
      '@type': 'MedicalCondition',
      name: 'Enfermedad de Alzheimer',
      alternateName: 'Alzheimer',
      code: { '@type': 'MedicalCode', code: 'G30', codingSystem: 'ICD-10' },
      description: 'Tipo más frecuente de demencia en adultos mayores, con pérdida progresiva de memoria y funciones cognitivas.',
    },
    {
      '@type': 'MedicalCondition',
      name: 'Demencia',
      code: { '@type': 'MedicalCode', code: 'F03', codingSystem: 'ICD-10' },
      description: 'Síndrome caracterizado por deterioro cognitivo que afecta la memoria, el lenguaje y la conducta.',
    },
    {
      '@type': 'MedicalCondition',
      name: 'Sarcopenia',
      code: { '@type': 'MedicalCode', code: 'M62.5', codingSystem: 'ICD-10' },
      description: 'Pérdida de masa y fuerza muscular asociada al envejecimiento, que aumenta el riesgo de caídas.',
    },
    {
      '@type': 'MedicalCondition',
      name: 'Fragilidad del adulto mayor',
      code: { '@type': 'MedicalCode', code: 'R54', codingSystem: 'ICD-10' },
      description: 'Estado de vulnerabilidad fisiológica que incrementa el riesgo de caídas, hospitalización y mortalidad.',
    },
    {
      '@type': 'MedicalCondition',
      name: 'Hipertensión arterial en el adulto mayor',
      code: { '@type': 'MedicalCode', code: 'I10', codingSystem: 'ICD-10' },
      description: 'Elevación crónica de la presión arterial. En adultos mayores requiere manejo especializado para evitar hipotensión ortostática y caídas.',
    },
    {
      '@type': 'MedicalCondition',
      name: 'Diabetes mellitus tipo 2 en tercera edad',
      code: { '@type': 'MedicalCode', code: 'E11', codingSystem: 'ICD-10' },
      description: 'Trastorno metabólico frecuente en adultos mayores que requiere ajuste de objetivos glucémicos y revisión de medicamentos hipoglucemiantes.',
    },
    {
      '@type': 'MedicalCondition',
      name: 'Depresión geriátrica',
      code: { '@type': 'MedicalCode', code: 'F32', codingSystem: 'ICD-10' },
      description: 'Trastorno del estado de ánimo frecuentemente subdiagnosticado en personas mayores, asociado a deterioro funcional y mayor riesgo de demencia.',
    },
    {
      '@type': 'MedicalCondition',
      name: 'Osteoporosis',
      code: { '@type': 'MedicalCode', code: 'M81', codingSystem: 'ICD-10' },
      description: 'Disminución de la densidad ósea que aumenta el riesgo de fracturas por fragilidad, especialmente de cadera y columna vertebral.',
    },
    {
      '@type': 'MedicalCondition',
      name: 'Incontinencia urinaria',
      code: { '@type': 'MedicalCode', code: 'N39.3', codingSystem: 'ICD-10' },
      description: 'Pérdida involuntaria de orina frecuente en adultos mayores. El geriatra evalúa las causas reversibles y coordina el tratamiento multidisciplinario.',
    },
  ],
}

// ── 5. HowTo: Cómo agendar una cita ───────────────────────────
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo agendar una consulta con el Dr. Eduardo Pacheco, Geriatra',
  description: 'Pasos para agendar su consulta geriátrica en Esmeralda o Arboledas.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Elija su sede',
      text: 'Seleccione la sede de su preferencia: Centro Médico Esmeralda (Lun–Vie) o Clínica Médica Arboledas (Mar y Jue).',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Contacte al consultorio',
      text: `Llame a Esmeralda al 55 1663 2510, a Arboledas al 55 5378 2878, o escriba por WhatsApp al 55 3920 3393.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Confirme su cita',
      text: 'El equipo de recepción le proporcionará la fecha y hora disponible más próxima.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Acuda a su consulta',
      text: 'Llegue a la sede elegida con 10 minutos de anticipación y lleve sus estudios previos y lista de medicamentos actuales.',
    },
  ],
}

// ── 6. Review + AggregateRating (reseñas reales de Doctoralia) ──
const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Dr. Jorge Eduardo Pacheco Ponce – Geriatra',
  url: site.canonicalUrl,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '25',
    bestRating: '5',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'José Hernández R.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      datePublished: '2026-01',
      reviewBody: 'Atiende a mi Mamá que tiene 85 años, padece de osteoporosis aunado a la presión alta. El tratamiento fue excelente, ya que gracias a ello se mantiene estable. En todo momento ha mostrado esa parte humana, la motiva mucho y le habla de una manera muy cordial y amigable. Muy profesional en su ramo y excelente persona.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Vero Tagle' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      datePublished: '2026-01',
      reviewBody: 'Excelente geriatra, dedicado, paciente y muy humano. Estamos felices de que mamá sea su paciente, no puede estar en mejores manos. Sumamente profesional.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Alma Delia Ávila' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      datePublished: '2026-01',
      reviewBody: 'He quedado muy satisfecha con la atención que le ha dado a mi mamá. Ha estado muy al pendiente, sus explicaciones han sido muy claras y ha tenido mucha paciencia. Excelente Doctor.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Alfonso Fernández' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      datePublished: '2026-01',
      reviewBody: 'El Dr. Pacheco acudió al domicilio para consulta de mi papá. Se tomó todo el tiempo necesario para revisarlo, escuchar y explicar todas las dudas. Quedamos muy satisfechos con su visita y su trato profesional.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Maria Isabel' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      datePublished: '2026-01',
      reviewBody: 'Excelente doctor, explica detalladamente las dudas que surgen en la consulta. Humano y carismático, fue muy amable al atender a mi abuelita. Sin duda volvería a acudir con él.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Perla Zúñiga G.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      datePublished: '2026-01',
      reviewBody: 'Excelente médico, muy humano y dedicado. Ampliamente recomendado.',
    },
  ],
}

// ── 7. WebPage + SpeakableSpecification ───────────────────────
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${site.canonicalUrl}/#webpage`,
  url: site.canonicalUrl,
  name: site.seoTitle,
  description: site.seoDescription,
  inLanguage: 'es-MX',
  isPartOf: { '@type': 'WebSite', url: site.canonicalUrl },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: [
      'h1',
      '.section-title',
      '#preguntas-frecuentes button[aria-expanded]',
      '#acerca-de h2',
      '#acerca-de h3',
      '#servicios h3',
    ],
  },
}

// ── 8. BreadcrumbList (secciones de la página) ──────────────────
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: `${site.canonicalUrl}/#inicio`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Acerca del Dr. Pacheco',
      item: `${site.canonicalUrl}/#acerca-de`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Servicios de Geriatría',
      item: `${site.canonicalUrl}/#servicios`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Testimonios de Pacientes',
      item: `${site.canonicalUrl}/#testimonios`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Preguntas Frecuentes',
      item: `${site.canonicalUrl}/#preguntas-frecuentes`,
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Contacto y Ubicación',
      item: `${site.canonicalUrl}/#contacto`,
    },
  ],
}

// Inyectar todos los schemas en el <head>
useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(physicianSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(personSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(faqSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(conditionsSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(reviewSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(webPageSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(breadcrumbSchema) },
  ],
})
</script>

<template>
  <!-- Componente headless: solo inyecta JSON-LD, sin HTML renderizado -->
</template>
