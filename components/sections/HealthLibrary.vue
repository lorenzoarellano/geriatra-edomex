<template>
  <section class="relative overflow-hidden section-padding" aria-labelledby="salud-heading">

    <!-- Fondo: geriatric-back.webp con zoom-in lento GSAP -->
    <div class="absolute inset-0 z-0" aria-hidden="true">
      <img
        ref="libBg"
        src="/geriatric-back.webp"
        alt=""
        class="w-full h-full object-cover object-center will-change-transform"
        loading="lazy"
      />
      <!-- Overlay verde para mantener paleta y legibilidad -->
      <div class="absolute inset-0 bg-secondary-900/70" />
    </div>

    <div class="relative z-10 max-w-7xl mx-auto">

      <!-- Encabezado -->
      <div class="text-center mb-14">
        <span class="inline-flex items-center gap-1.5 bg-white/15 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          <BookOpen :size="12" aria-hidden="true" />
          Biblioteca de Salud
        </span>
        <h2 id="salud-heading" class="section-title mx-auto text-white">
          Información sobre <span class="text-secondary-200">enfermedades geriátricas</span>
        </h2>
        <p class="section-subtitle mx-auto mt-3 text-secondary-100">
          Artículos educativos para pacientes y familiares. Más información disponible en el perfil del Dr. en Doctoralia.
        </p>
      </div>

      <!-- Grid de artículos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(article, idx) in articles"
          :key="article.title"
          class="relative rounded-3xl p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-white/20 shadow-card hover:shadow-card-hover hover:border-white/40"
          style="background: rgba(255,255,255,0.10); backdrop-filter: blur(16px) saturate(1.4); -webkit-backdrop-filter: blur(16px) saturate(1.4);"
          :aria-label="article.title"
        >
          <!-- Reflejo superior liquid glass -->
          <div
            class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none"
            aria-hidden="true"
          />
          <!-- Icono grande centrado sin fondo -->
          <div aria-hidden="true">
            <component
              :is="article.icon"
              :size="56"
              class="text-white drop-shadow"
            />
          </div>

          <span
            class="inline-flex items-center gap-1 bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full w-fit border border-white/30"
          >
            {{ article.category }}
          </span>

          <h3 class="font-heading font-bold text-lg leading-snug text-white drop-shadow-sm">
            {{ article.title }}
          </h3>

          <p class="font-body text-sm leading-relaxed text-white/75">
            {{ article.excerpt }}
          </p>

          <!-- CTA leer más → Doctoralia -->
          <a
            :href="doctoraliaUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors mt-1 text-secondary-200 hover:text-white"
            :aria-label="`Leer más sobre ${article.title} en Doctoralia`"
          >
            Leer más
            <ArrowRight :size="14" aria-hidden="true" />
          </a>
        </article>
      </div>

      <!-- Ver todos en Doctoralia -->
      <div class="text-center mt-10">
        <a
          :href="doctoraliaUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/60 text-white font-heading font-semibold text-sm hover:bg-white/15 transition-colors"
          aria-label="Ver más artículos en Doctoralia"
        >
          <BookOpen :size="16" aria-hidden="true" />
          Ver más en Doctoralia
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { BookOpen, ArrowRight, Brain, Heart, Activity, Pill, Salad, BedDouble } from 'lucide-vue-next'

const libBg = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (import.meta.client) {
    const { gsap } = await import('gsap')
    gsap.fromTo(
      libBg.value,
      { scale: 1.12, transformOrigin: 'center center' },
      { scale: 1, duration: 8, ease: 'power1.out' },
    )
  }
})

const doctoraliaUrl =
  'https://www.doctoralia.com.mx/jorge-eduardo-pacheco-ponce/geriatra-medico-general/ciudad-lopez-mateos#news-section'

const articles = [
  {
    title: '¿Qué es el Alzheimer y cómo reconocerlo a tiempo?',
    excerpt:
      'El Alzheimer es la causa más frecuente de demencia en adultos mayores. Conocer sus síntomas tempranos puede hacer una gran diferencia en la calidad de vida.',
    category: 'Deterioro Cognitivo',
    icon: Brain,
    headerBg: 'bg-primary-800',
  },
  {
    title: 'Diabetes en el adulto mayor: metas y cuidados especiales',
    excerpt:
      'El manejo de la diabetes en personas mayores requiere metas distintas a las de adultos jóvenes, priorizando la funcionalidad y evitando hipoglucemias peligrosas.',
    category: 'Enfermedades Crónicas',
    icon: Heart,
    headerBg: 'bg-primary-700',
  },
  {
    title: 'Prevención de caídas: ¿cómo proteger a su familiar?',
    excerpt:
      'Las caídas son la principal causa de hospitalización en adultos mayores. Descubra las modificaciones en el hogar y ejercicios clave para prevenirlas.',
    category: 'Prevención',
    icon: Activity,
    headerBg: 'bg-primary-600',
  },
  {
    title: 'Polifarmacia: el peligro de tomar demasiados medicamentos',
    excerpt:
      'Usar 5 o más medicamentos simultáneamente aumenta el riesgo de caídas, confusión y hospitalizaciones. Sepa cómo simplificar el tratamiento de forma segura.',
    category: 'Medicamentos',
    icon: Pill,
    headerBg: 'bg-primary-800',
  },
  {
    title: 'Nutrición en la tercera edad: evite la malnutrición',
    excerpt:
      'La pérdida de peso involuntaria y la falta de proteína son señales de alerta. Una evaluación nutricional oportuna puede revertir la fragilidad.',
    category: 'Nutrición',
    icon: Salad,
    headerBg: 'bg-primary-700',
  },
  {
    title: 'Trastornos del sueño en adultos mayores',
    excerpt:
      'Los cambios en el ciclo del sueño son comunes pero no inevitables. Conozca las causas, consecuencias y el tratamiento más adecuado para este grupo de edad.',
    category: 'Síndromes Geriátricos',
    icon: BedDouble,
    headerBg: 'bg-primary-600',
  },
]
</script>
