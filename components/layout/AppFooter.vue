<template>
  <footer class="relative z-10 bg-primary-900 text-white" role="contentinfo" aria-label="Pie de página">

    <!-- Contenido principal del footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <!-- Col 1: Logo + descripción -->
        <div class="lg:col-span-1">
          <div class="mb-5">
            <NuxtImg
              src="/logo-dark.webp"
              alt="Dr. Eduardo Pacheco Ponce – Médico Geriatra"
              width="200"
              height="70"
              loading="lazy"
              class="h-16 w-auto object-contain"
            />
          </div>
          <p class="text-sm text-primary-200 leading-relaxed">
            Atención integral al adulto mayor con enfoque humanista,
            centrado en la persona y orientado a la <strong class="text-white">prevención,
            funcionalidad y calidad de vida</strong>.
          </p>
          <!-- Doctoralia link -->
          <a
            :href="site.doctoraliaUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 mt-4 text-sm text-secondary-300 hover:text-white transition-colors"
            aria-label="Ver perfil en Doctoralia"
          >
            <Stethoscope :size="16" class="opacity-80" aria-hidden="true" />
            Perfil en Doctoralia
          </a>
          <p class="text-xs text-primary-400 mt-2">
            Cédula profesional: <strong class="text-primary-200">11603525</strong><br />
            Cédula de especialidad: <strong class="text-primary-200">14012808</strong>
          </p>
        </div>

        <!-- Col 2: Navegación -->
        <div>
          <h3 class="font-heading font-semibold text-white mb-4 uppercase tracking-widest text-xs">
            Navegación
          </h3>
          <ul class="flex flex-col gap-2" role="list">
            <li v-for="item in navItems" :key="item.href">
              <a
                :href="item.href"
                class="text-sm text-primary-200 hover:text-white transition-colors"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Contacto -->
        <div>
          <h3 class="font-heading font-semibold text-white mb-4 uppercase tracking-widest text-xs">
            Contacto
          </h3>
          <ul class="flex flex-col gap-4 text-sm" role="list">

            <!-- Esmeralda -->
            <li>
              <p class="text-secondary-300 font-semibold text-xs uppercase tracking-wide mb-1">Centro Médico Esmeralda</p>
              <div class="flex items-start gap-2 text-primary-200 mb-1">
                <MapPin :size="14" class="mt-0.5 shrink-0 text-secondary-400" aria-hidden="true" />
                <span>Cto. Plaza Esmeralda, Bosque Esmeralda, C.P. 52937, Cd. López Mateos</span>
              </div>
              <div class="flex items-center gap-2">
                <Phone :size="14" class="shrink-0 text-secondary-400" aria-hidden="true" />
                <a href="tel:5516632510" class="text-primary-200 hover:text-white transition-colors">55 1663 2510</a>
              </div>
            </li>

            <li class="border-t border-primary-800 pt-4">
              <p class="text-secondary-300 font-semibold text-xs uppercase tracking-wide mb-1">Clínica Médica Arboledas</p>
              <div class="flex items-start gap-2 text-primary-200 mb-1">
                <MapPin :size="14" class="mt-0.5 shrink-0 text-secondary-400" aria-hidden="true" />
                <span>Calz. de los Jinetes 56, Las Arboledas, C.P. 54020, Tlalnepantla de Baz</span>
              </div>
              <div class="flex items-center gap-2">
                <Phone :size="14" class="shrink-0 text-secondary-400" aria-hidden="true" />
                <a href="tel:5553782878" class="text-primary-200 hover:text-white transition-colors">55 5378 2878</a>
              </div>
            </li>

            <!-- WhatsApp compartido -->
            <li class="flex items-center gap-2 border-t border-primary-800 pt-3">
              <MessageCircle :size="14" class="shrink-0 text-secondary-400" aria-hidden="true" />
              <a
                :href="waHref"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-200 hover:text-white transition-colors"
                aria-label="WhatsApp del Dr. Eduardo Pacheco"
              >
                {{ site.whatsappDisplay }} · WhatsApp
              </a>
            </li>

          </ul>
        </div>


      </div>
    </div>

    <!-- Barra inferior -->
    <div class="border-t border-primary-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-400">
        <p>
          © {{ currentYear }} Dr. Jorge Eduardo Pacheco Ponce – Médico Geriatra.
          Todos los derechos reservados.
        </p>
        <div class="flex items-center gap-4">
          <button
            class="hover:text-white transition-colors"
            @click="openPrivacy()"
          >
            Política de Privacidad
          </button>
          <button
            class="hover:text-white transition-colors"
            @click="openTerms()"
          >
            Términos y Condiciones
          </button>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
import { Phone, MapPin, MessageCircle, Clock, Stethoscope } from 'lucide-vue-next'

const site = useSite()
const { whatsappHref: waHref } = useWhatsapp()
const { openPrivacy, openTerms } = useModals()
const currentYear = new Date().getFullYear()

const navItems = [
  { href: '#inicio',             label: 'Inicio' },
  { href: '#acerca-de',          label: 'Acerca de' },
  { href: '#servicios',          label: 'Servicios' },
  { href: '#testimonios',        label: 'Testimonios' },
  { href: '#preguntas-frecuentes', label: 'Preguntas Frecuentes' },
  { href: '#contacto',           label: 'Contacto' },
]
</script>
