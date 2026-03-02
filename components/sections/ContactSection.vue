<template>
  <section class="section-padding bg-cream-50" aria-labelledby="contacto-heading">
    <div class="max-w-7xl mx-auto">

      <!-- Encabezado -->
      <div class="text-center mb-14">
        <span class="badge-credential mb-3">
          <Phone :size="12" aria-hidden="true" />
          Hable con nosotros
        </span>
        <h2 id="contacto-heading" class="section-title mx-auto">
          ¿Cómo <span class="text-gradient">contactarnos</span>?
        </h2>
        <p class="section-subtitle mx-auto mt-3">
          Estamos disponibles en dos sedes en Estado de México. Llame, envíe un mensaje o visítenos.
        </p>
      </div>

      <!-- Grid de sedes -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

        <!-- Sede Esmeralda -->
        <article class="card overflow-hidden" aria-label="Sede Centro Médico Esmeralda">
          <!-- Header de sede -->
          <div class="bg-primary-600 px-8 py-6 flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <Building2 :size="28" class="text-white" aria-hidden="true" />
            </div>
            <div>
              <p class="text-primary-200 text-xs font-semibold uppercase tracking-widest mb-0.5">Sede 1</p>
              <h3 class="font-heading font-bold text-white text-lg leading-tight">Centro Médico Esmeralda</h3>
              <p class="text-primary-100 text-sm">Bosque Esmeralda · Cd. López Mateos</p>
            </div>
          </div>
          <div class="p-8">
          <ul class="flex flex-col gap-3 text-sm mb-6" role="list">
            <li class="flex items-start gap-3">
              <MapPin :size="16" class="text-secondary-400 mt-0.5 shrink-0" aria-hidden="true" />
              <span class="text-gray-600">Cto. Plaza Esmeralda, Bosque Esmeralda, C.P. 52937, Cd. López Mateos, Edo. de México</span>
            </li>
            <li class="flex items-center gap-3">
              <Phone :size="16" class="text-secondary-400 shrink-0" aria-hidden="true" />
              <a href="tel:5516632510" class="text-primary-600 hover:text-primary-800 font-medium transition-colors">
                55 1663 2510
              </a>
            </li>
            <li class="flex items-center gap-3">
              <Clock :size="16" class="text-secondary-400 shrink-0" aria-hidden="true" />
              <span class="text-gray-600">Lunes a Viernes · 10:00 – 18:00 h</span>
            </li>
          </ul>
          <a
            href="tel:5516632510"
            class="btn-primary w-full justify-center text-sm"
            aria-label="Llamar a recepción Esmeralda: 55 1663 2510"
          >
            <Phone :size="16" aria-hidden="true" />
            Llamar a Esmeralda
          </a>
          <!-- Google Maps Embed -->
          <div class="mt-5 rounded-xl overflow-hidden shadow h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.5!2d-99.2969219!3d19.559989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21b481ea3e46f:0x5b1d211329dd2d8d!2sCentro+M%C3%A9dico+Esmeralda+CHS.!5e0!3m2!1ses!2smx!4v1740000000000!5m2!1ses!2smx"
              title="Ubicación Centro Médico Esmeralda – Geriatra Dr. Eduardo Pacheco"
              width="100%"
              height="100%"
              style="border:0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          </div>
        </article>

        <!-- Sede Arboledas -->
        <article class="card overflow-hidden" aria-label="Sede Clínica Médica Arboledas">
          <!-- Header de sede -->
          <div class="bg-secondary-600 px-8 py-6 flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <Building2 :size="28" class="text-white" aria-hidden="true" />
            </div>
            <div>
              <p class="text-secondary-100 text-xs font-semibold uppercase tracking-widest mb-0.5">Sede 2</p>
              <h3 class="font-heading font-bold text-white text-lg leading-tight">Clínica Médica Arboledas</h3>
              <p class="text-secondary-100 text-sm">Las Arboledas · Tlalnepantla de Baz</p>
            </div>
          </div>
          <div class="p-8">
          <ul class="flex flex-col gap-3 text-sm mb-6" role="list">
            <li class="flex items-start gap-3">
              <MapPin :size="16" class="text-secondary-400 mt-0.5 shrink-0" aria-hidden="true" />
              <span class="text-gray-600">Calz. de los Jinetes 56, Las Arboledas, C.P. 54020, Tlalnepantla de Baz, México</span>
            </li>
            <li class="flex items-center gap-3">
              <Phone :size="16" class="text-secondary-400 shrink-0" aria-hidden="true" />
              <a href="tel:5553782878" class="text-primary-600 hover:text-primary-800 font-medium transition-colors">
                55 5378 2878
              </a>
            </li>
            <li class="flex items-center gap-3">
              <Clock :size="16" class="text-secondary-400 shrink-0" aria-hidden="true" />
              <span class="text-gray-600">Martes y Jueves · 10:00 – 18:00 h</span>
            </li>
          </ul>
          <a
            href="tel:5553782878"
            class="btn-primary w-full justify-center text-sm"
            aria-label="Llamar a recepción Arboledas: 55 5378 2878"
          >
            <Phone :size="16" aria-hidden="true" />
            Llamar a Arboledas
          </a>
          <!-- Google Maps Embed -->
          <div class="mt-5 rounded-xl overflow-hidden shadow h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.5!2d-99.2216532!3d19.5609322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21d0fa272f0db:0x857aad64cbc1a4c6!2sCentro+Medico+Arboledas!5e0!3m2!1ses!2smx!4v1740000000001!5m2!1ses!2smx"
              title="Ubicación Clínica Médica Arboledas – Geriatra Dr. Eduardo Pacheco"
              width="100%"
              height="100%"
              style="border:0"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          </div>
        </article>
      </div>

      <!-- WhatsApp + Doctoralia -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- WhatsApp -->
        <div class="card p-6 flex flex-col items-center text-center gap-3">
          <div class="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
            <MessageCircle :size="24" class="text-green-600" aria-hidden="true" />
          </div>
          <h3 class="font-heading font-bold text-primary-800">WhatsApp</h3>
          <p class="text-gray-500 text-sm">Para consultas rápidas o necesita orientación antes de su cita.</p>
          <a
            :href="waHref"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline text-sm w-full justify-center"
            aria-label="Escribir al WhatsApp del Dr. Eduardo Pacheco"
          >
            <MessageCircle :size="16" aria-hidden="true" />
            55 3920 3393
          </a>
        </div>
        <!-- Doctoralia -->
        <div class="card p-6 flex flex-col items-center text-center gap-3">
          <div class="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
            <Star :size="24" class="text-primary-500" aria-hidden="true" />
          </div>
          <h3 class="font-heading font-bold text-primary-800">Perfil de Doctoralia</h3>
          <p class="text-gray-500 text-sm">Consulte el perfil del Dr. Pacheco, reseñas y artículos médicos.</p>
          <a
            :href="site.doctoraliaUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline text-sm w-full justify-center"
            aria-label="Ver perfil en Doctoralia"
          >
            <ExternalLink :size="16" aria-hidden="true" />
            Ver en Doctoralia
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Phone, MapPin, Clock, MessageCircle, Star, ExternalLink, Building2 } from 'lucide-vue-next'

const site = useSite()
const { whatsappHref: waHref } = useWhatsapp()
</script>
