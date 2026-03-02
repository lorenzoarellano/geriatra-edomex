<template>
  <section
    class="relative min-h-[90vh] flex items-center overflow-hidden bg-primary-900"
    aria-labelledby="hero-heading"
  >
    <!-- Fondo: hero-back.webp con zoom-in lento GSAP -->
    <div class="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <img
        ref="heroBg"
        src="/hero-back.webp"
        alt=""
        class="w-full h-full object-cover object-center will-change-transform"
        fetchpriority="high"
      />
      <!-- Overlay oscuro para legibilidad -->
      <div class="absolute inset-0 bg-primary-950/35" />
    </div>

    <!-- Grid: texto izquierda / imagen derecha -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-end min-h-[90vh]">

        <!-- Col izquierda: contenido -->
        <div class="py-28 lg:py-32 flex flex-col justify-center" ref="heroContent">

          <!-- Tagline badge -->
          <div class="inline-flex items-center gap-2 glass px-4 py-2 mb-6 w-fit animate-fade-in">
            <Star :size="14" class="text-secondary-300" aria-hidden="true" />
            <span class="text-sm font-medium text-white/90 font-body">
              Especialista en Salud del Adulto Mayor
            </span>
          </div>

          <!-- Heading principal (LCP critical) -->
          <h1
            id="hero-heading"
            class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Geriatría integral<br>para una <span class="text-secondary-300">vida plena</span>
          </h1>

          <!-- Mensaje principal -->
          <p class="text-lg sm:text-xl text-white/85 font-body mb-8 leading-relaxed max-w-lg">
            <strong class="text-white">Prevención, funcionalidad y calidad de vida</strong>,
            con atención centrada en la persona y
            <strong class="text-white">acompañamiento familiar</strong>.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a
              :href="`tel:${site.phone}`"
              class="btn-call text-base px-8 py-4 justify-center sm:justify-start"
              :aria-label="`Llamar al consultorio: ${site.phoneDisplay}`"
            >
              <Phone :size="20" aria-hidden="true" />
              Llamar al consultorio
            </a>
            <a
              href="#servicios"
              class="btn-outline border-white/60 text-white hover:bg-white hover:text-primary-700 justify-center sm:justify-start"
            >
              <ClipboardList :size="18" aria-hidden="true" />
              Ver servicios
            </a>
          </div>

          <!-- Stats rápidos -->
          <div class="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="text-center"
            >
              <p class="font-heading text-3xl font-bold text-secondary-300">{{ stat.value }}</p>
              <p class="text-xs text-white/75 font-body mt-1">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Col derecha: foto del doctor, alineada al fondo -->
        <div
          class="hidden lg:flex items-end justify-center lg:justify-end h-full"
          aria-hidden="true"
        >
          <NuxtImg
            src="/hero1.webp"
            alt="Dr. Eduardo Pacheco Ponce, Médico Geriatra"
            class="max-h-[88vh] w-auto object-bottom object-center gpu select-none"
            loading="eager"
            fetchpriority="high"
            width="600"
            height="820"
            :modifiers="{ quality: 90 }"
          />
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle hidden sm:block"
      aria-hidden="true"
    >
      <ChevronDown :size="28" class="text-white/60" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Phone, ClipboardList, Star, ChevronDown } from 'lucide-vue-next'

const site = useSite()

const heroContent = ref<HTMLElement | null>(null)
const heroBg = ref<HTMLElement | null>(null)

const stats = [
  { value: '5.0 ★', label: 'Calificación en Doctoralia' },
  { value: '+25', label: 'Opiniones verificadas' },
  { value: '2', label: 'Sedes en Edo. Méx.' },
]

onMounted(async () => {
  if (import.meta.client) {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    // Zoom-in lento en el fondo: escala de 1.12 → 1 en 8 segundos
    gsap.fromTo(
      heroBg.value,
      { scale: 1.12, transformOrigin: 'center center' },
      { scale: 1, duration: 8, ease: 'power1.out' },
    )

    // Fade-up del contenido
    gsap.fromTo(
      heroContent.value,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.1 },
    )
  }
})
</script>
