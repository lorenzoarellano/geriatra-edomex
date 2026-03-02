<template>
  <section class="section-padding bg-cream-50" aria-labelledby="servicios-heading">
    <div class="max-w-7xl mx-auto">

      <!-- Encabezado -->
      <div class="text-center mb-14" ref="sectionHeader">
        <span class="badge-credential mb-3">
          <Stethoscope :size="12" aria-hidden="true" />
          Especialidad Geriátrica
        </span>
        <h2 id="servicios-heading" class="section-title mx-auto">
          Nuestros <span class="text-gradient">Servicios</span>
        </h2>
        <p class="section-subtitle mx-auto mt-3">
          Atención integral al adulto mayor con diagnóstico preciso y seguimiento personalizado.
        </p>
      </div>

      <!-- Grid de servicios (6 visibles + ver más) -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        ref="servicesGrid"
        role="list"
        aria-label="Listado de servicios geriátricos"
      >
        <article
          v-for="(service, idx) in visibleServices"
          :key="service.title"
          :class="[
            'rounded-3xl p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:-translate-y-1',
            idx % 4 === 0
              ? 'bg-primary-600 shadow-lg hover:shadow-xl'
              : 'bg-white border border-gray-100 shadow-card hover:shadow-card-hover',
          ]"
          :style="{ animationDelay: `${idx * 80}ms` }"
          role="listitem"
        >
          <!-- Icono grande centrado sin fondo -->
          <div aria-hidden="true">
            <component
              :is="service.icon"
              :size="56"
              :class="idx % 4 === 0 ? 'text-white' : 'text-primary-600'"
            />
          </div>

          <h3
            :class="[
              'font-heading font-bold text-lg leading-snug',
              idx % 4 === 0 ? 'text-white' : 'text-primary-800',
            ]"
          >
            {{ service.title }}
          </h3>
          <p
            :class="[
              'font-body text-sm leading-relaxed',
              idx % 4 === 0 ? 'text-white/80' : 'text-gray-500',
            ]"
            v-html="service.description"
          />
        </article>
      </div>

      <!-- Botón "Ver más / Ver menos" -->
      <div class="text-center mt-10">
        <button
          class="btn-outline"
          :aria-expanded="showAll"
          aria-controls="services-extra"
          @click="showAll = !showAll"
        >
          <component :is="showAll ? ChevronUp : ChevronDown" :size="18" aria-hidden="true" />
          {{ showAll ? 'Ver menos servicios' : 'Ver todos los servicios' }}
        </button>
      </div>

      <!-- CTA inferior -->
      <div class="mt-14 bg-primary-600 rounded-4xl p-8 lg:p-12 text-center text-white">
        <h3 class="font-heading text-2xl lg:text-3xl font-bold mb-3">
          ¿Necesita atención geriátrica personalizada?
        </h3>
        <p class="font-body text-primary-100 mb-6 max-w-lg mx-auto">
          Agende su consulta hoy mismo. El Dr. Pacheco le dará la atención que usted o su familiar merece.
        </p>
        <a
          :href="`tel:${site.phone}`"
          class="btn-secondary inline-flex"
          :aria-label="`Llamar para agendar: ${site.phoneDisplay}`"
        >
          <Phone :size="18" aria-hidden="true" />
          Llamar ahora: {{ site.phoneDisplay }}
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Stethoscope, Phone, ChevronDown, ChevronUp,
  Brain, Heart, Activity, Shield, Pill,
  Salad, BedDouble, Users, Home,
} from 'lucide-vue-next'

const site = useSite()
const sectionHeader = ref<HTMLElement | null>(null)
const servicesGrid = ref<HTMLElement | null>(null)
const showAll = ref(false)

const allServices = [
  {
    title: 'Consulta Geriátrica Integral',
    description: 'Evaluación médica completa del adulto mayor, incluyendo <strong>funcionalidad, memoria, estado emocional, nutrición</strong>, marcha y riesgo de caídas.',
    icon: Stethoscope,
    iconBg: 'bg-primary-100',
    iconColor: 'text-primary-600',
  },
  {
    title: 'Control de Enfermedades Crónicas',
    description: '<strong>Diabetes, hipertensión, enfermedad cardiovascular, renal crónica y EPOC</strong> con tratamiento adaptado a la edad y funcionalidad.',
    icon: Heart,
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    title: 'Evaluación de Memoria y Deterioro Cognitivo',
    description: 'Detección y abordaje de <strong>problemas de memoria, demencia y delirium</strong>, con orientación familiar y plan de seguimiento.',
    icon: Brain,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    title: 'Prevención de Caídas y Marcha',
    description: 'Valoración de equilibrio, fuerza, seguridad en casa y auxiliares para caminar; <strong>plan preventivo y rehabilitación dirigida</strong>.',
    icon: Activity,
    iconBg: 'bg-secondary-50',
    iconColor: 'text-secondary-500',
  },
  {
    title: 'Revisión de Medicamentos',
    description: 'Depuración y optimización de tratamientos para reducir <strong>efectos adversos, interacciones y riesgo de hospitalizaciones</strong> (polifarmacia).',
    icon: Pill,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
  },
  {
    title: 'Manejo de Fragilidad y Sarcopenia',
    description: 'Intervención integral con <strong>actividad física, nutrición y seguimiento</strong> para recuperar fuerza, resistencia y funcionalidad.',
    icon: Shield,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    title: 'Evaluación Nutricional',
    description: 'Detección de malnutrición, pérdida de peso, riesgo de deshidratación y <strong>plan nutricional individualizado</strong>.',
    icon: Salad,
    iconBg: 'bg-lime-50',
    iconColor: 'text-lime-600',
  },
  {
    title: 'Síndromes Geriátricos',
    description: '<strong>Caídas, inmovilidad, incontinencia, trastornos del sueño, dolor crónico</strong> y deterioro funcional.',
    icon: BedDouble,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Plan de Acción y Acompañamiento Familiar',
    description: 'Objetivos claros, educación a cuidadores y seguimiento para mantener la <strong>mejor calidad de vida posible</strong>.',
    icon: Users,
    iconBg: 'bg-primary-50',
    iconColor: 'text-primary-500',
  },
  {
    title: 'Atención Domiciliaria',
    description: 'Valoración y seguimiento en domicilio en <strong>Esmeralda y Arboledas</strong> para pacientes con limitación de traslado.',
    icon: Home,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
]

const visibleServices = computed(() =>
  showAll.value ? allServices : allServices.slice(0, 6),
)

onMounted(async () => {
  if (import.meta.client) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      '.card-service',
      { opacity: 0, y: 24 },
      {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: servicesGrid.value, start: 'top 80%' },
      },
    )
  }
})
</script>
