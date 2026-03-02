<template>
  <section class="section-padding bg-white" aria-labelledby="about-heading">
    <div class="max-w-7xl mx-auto">

      <!-- Encabezado de sección -->
      <div class="text-center mb-16" ref="sectionHeader">
        <span class="badge-credential mb-3">
          <Award :size="12" aria-hidden="true" />
          Perfil del Especialista
        </span>
        <h2 id="about-heading" class="section-title mx-auto">
          Atención con enfoque <span class="text-gradient">humanista</span>
        </h2>
        <p class="section-subtitle mx-auto mt-3">
          Comprometido con la salud integral y la dignidad de cada persona mayor.
        </p>
      </div>

      <!-- Contenido principal -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

        <!-- Foto -->
        <div class="relative" ref="aboutImage">
          <NuxtImg
            src="/acercade.webp"
            alt="Dr. Jorge Eduardo Pacheco Ponce, Médico Geriatra"
            class="w-full object-cover rounded-3xl"
            width="600"
            height="720"
            loading="lazy"
          />
          <!-- Badge flotante con cédulas -->
          <div class="absolute bottom-0 left-0 right-0 glass-dark rounded-b-3xl p-4">
            <p class="text-white font-heading text-base font-semibold">Dr. Jorge Eduardo Pacheco Ponce</p>
            <p class="text-secondary-300 text-sm">Médico Geriatra · Cédula esp. <strong>14012808</strong></p>
          </div>
          <!-- Elemento decorativo -->
          <div
            class="absolute -top-4 -right-4 w-24 h-24 bg-secondary-100 rounded-full -z-10 blur-xl"
            aria-hidden="true"
          />
        </div>

        <!-- Texto -->
        <div ref="aboutText">
          <h3 class="font-heading text-2xl font-bold text-primary-800 mb-4">
            {{ site.tagline }}
          </h3>

          <p class="font-body text-gray-600 mb-6 leading-relaxed">
            El Dr. Eduardo Pacheco Ponce es especialista en Geriatría con enfoque en la
            <strong>atención centrada en la persona</strong>. Considera no solo las enfermedades,
            sino también el <strong>estado funcional, mental, emocional y social</strong> de cada paciente.
          </p>

          <p class="font-body text-gray-600 mb-8 leading-relaxed">
            Su metodología incluye la <strong>Valoración Geriátrica Integral</strong> para detectar
            tempranamente <strong>fragilidad, riesgo de caídas, deterioro cognitivo,
            problemas de memoria, polifarmacia</strong> y descontrol de enfermedades crónicas,
            trabajando de la mano con la familia en planes de manejo personalizados.
          </p>

          <!-- Puntos clave -->
          <ul class="flex flex-col gap-3 mb-8" role="list">
            <li
              v-for="point in keyPoints"
              :key="point"
              class="flex items-start gap-3"
            >
              <CheckCircle2
                :size="18"
                class="text-secondary-400 mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span class="text-gray-700 text-sm font-body">{{ point }}</span>
            </li>
          </ul>

          <a
            :href="`tel:${site.phone}`"
            class="btn-primary"
            :aria-label="`Llamar para agendar consulta: ${site.phoneDisplay}`"
          >
            <Phone :size="16" aria-hidden="true" />
            Agendar consulta
          </a>
        </div>
      </div>

      <!-- Formación Académica -->
      <div class="bg-primary-50 rounded-4xl p-8 lg:p-12">
        <h3 class="font-heading text-2xl font-bold text-primary-800 mb-2 text-center">
          Formación Académica
        </h3>
        <p class="text-center text-gray-500 text-sm font-body mb-10">
          Preparación de excelencia en las instituciones de salud más reconocidas de México
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <!-- IPN: Licenciatura -->
          <div class="bg-white rounded-3xl p-6 border border-primary-100 shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                <GraduationCap :size="20" class="text-primary-600" aria-hidden="true" />
              </div>
              <p class="text-xs font-semibold text-secondary-500 uppercase tracking-widest">Licenciatura en Medicina</p>
            </div>
            <h4 class="font-heading font-bold text-primary-800 text-lg mb-1">Médico Cirujano</h4>
            <p class="text-sm font-semibold text-gray-700 mb-1">Instituto Politécnico Nacional</p>
            <p class="text-sm text-gray-500 font-body mb-4 leading-relaxed">
              Formación médica integral en una de las instituciones de educación superior más prestigiosas
              y con mayor rigor científico de México.
            </p>
            <span class="badge-credential">
              <GraduationCap :size="10" aria-hidden="true" />
              Cédula profesional: 11603525
            </span>
          </div>

          <!-- UNAM + La Raza: Especialidad -->
          <div class="bg-white rounded-3xl p-6 border border-primary-100 shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-secondary-100 rounded-xl flex items-center justify-center shrink-0">
                <Award :size="20" class="text-secondary-600" aria-hidden="true" />
              </div>
              <p class="text-xs font-semibold text-secondary-500 uppercase tracking-widest">Especialidad Médica</p>
            </div>
            <h4 class="font-heading font-bold text-primary-800 text-lg mb-1">Geriatría</h4>
            <p class="text-sm font-semibold text-gray-700 mb-1">
              Universidad Nacional Autónoma de México &amp; CMN La Raza IMSS
            </p>
            <p class="text-sm text-gray-500 font-body mb-4 leading-relaxed">
              Especialización en salud del adulto mayor avalada por la UNAM, con formación clínica
              en el Centro Médico Nacional La Raza del IMSS, referente nacional en alta especialidad.
            </p>
            <span class="badge-credential">
              <Award :size="10" aria-hidden="true" />
              Cédula de especialidad: 14012808
            </span>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Phone, CheckCircle2, Award, GraduationCap } from 'lucide-vue-next'

const site = useSite()

const sectionHeader = ref<HTMLElement | null>(null)
const aboutImage = ref<HTMLElement | null>(null)
const aboutText = ref<HTMLElement | null>(null)

const keyPoints = [
  'Valoración Geriátrica Integral – cuerpo, mente y entorno social',
  'Detección temprana de fragilidad y deterioro cognitivo',
  'Revisión y optimización de medicamentos (polifarmacia)',
  'Planes de manejo personalizados con acompañamiento familiar',
  'Atención domiciliaria disponible en Esmeralda y Arboledas',
]

onMounted(async () => {
  if (import.meta.client) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      aboutImage.value,
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionHeader.value, start: 'top 80%' },
      },
    )
    gsap.fromTo(
      aboutText.value,
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: sectionHeader.value, start: 'top 80%' },
      },
    )
  }
})
</script>
