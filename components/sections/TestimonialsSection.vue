<template>
  <section class="section-padding bg-white" aria-labelledby="testimonios-heading">
    <div class="max-w-7xl mx-auto">

      <!-- Encabezado -->
      <div class="text-center mb-14">
        <span class="badge-credential mb-3">
          <Star :size="12" aria-hidden="true" />
          Opiniones de pacientes
        </span>
        <h2 id="testimonios-heading" class="section-title mx-auto">
          Lo que dicen nuestros <span class="text-gradient">pacientes</span>
        </h2>
        <p class="section-subtitle mx-auto mt-3">
          Reseñas verificadas en Doctoralia. La confianza de nuestros pacientes es nuestra mejor carta de presentación.
        </p>
        <!-- AggregateRating visible -->
        <div class="flex items-center justify-center gap-2 mt-4" aria-label="Calificación promedio: 5 de 5 estrellas">
          <div class="flex" aria-hidden="true">
            <Star v-for="i in 5" :key="i" :size="20" class="text-amber-400 fill-amber-400" />
          </div>
          <span class="font-heading font-bold text-primary-800 text-lg">5.0</span>
          <span class="text-gray-400 text-sm">(25 reseñas verificadas en Doctoralia)</span>
        </div>
      </div>

      <!-- Grid 8 testimonios + 9ª tarjeta CTA Google -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        role="list"
        aria-label="Testimonios de pacientes"
      >
        <!-- 8 tarjetas de testimonio -->
        <article
          v-for="t in testimonials"
          :key="t.name"
          class="card-testimonial flex flex-col gap-3"
          role="listitem"
          :aria-label="`Testimonio de ${t.name}`"
        >
          <!-- Stars -->
          <div class="flex gap-0.5" :aria-label="`${t.rating} estrellas`">
            <Star
              v-for="i in 5"
              :key="i"
              :size="14"
              :class="i <= t.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'"
              aria-hidden="true"
            />
          </div>
          <!-- Texto -->
          <p class="font-body text-gray-600 text-sm leading-relaxed flex-1">
            "{{ t.text }}"
          </p>
          <!-- Autor -->
          <div class="flex items-center gap-3 pt-2 border-t border-gray-100">
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm shrink-0"
              :style="{ background: t.avatarColor }"
              aria-hidden="true"
            >
              {{ t.name[0] }}
            </div>
            <div>
              <p class="font-heading font-semibold text-primary-800 text-sm">{{ t.name }}</p>
              <p class="text-xs text-gray-400 font-body">{{ t.date }} · Doctoralia</p>
            </div>
          </div>
        </article>

        <!-- 9ª tarjeta: CTA reseña en Google -->
        <article
          class="rounded-2xl bg-white border-2 border-gray-100 p-6 flex flex-col items-center justify-center text-center gap-5 shadow-card hover:shadow-card-hover transition-shadow"
          role="complementary"
          aria-label="Dejar una reseña en Google"
        >
          <!-- Google logo SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-12 h-12" aria-hidden="true">
            <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2v6h7.8c4.6-4.2 7.3-10.4 7.3-17.2z"/>
            <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.8-6c-2.1 1.4-4.9 2.3-8.1 2.3-6.2 0-11.5-4.2-13.4-9.9H2.6v6.2C6.5 42.7 14.8 48 24 48z"/>
            <path fill="#FBBC05" d="M10.6 28.6c-.5-1.4-.7-2.9-.7-4.6s.3-3.2.7-4.6v-6.2H2.6C.9 16.7 0 20.2 0 24s.9 7.3 2.6 10.8l8-6.2z"/>
            <path fill="#EB4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.5l6.8-6.8C35.9 2.4 30.5 0 24 0 14.8 0 6.5 5.3 2.6 13.2l8 6.2c1.9-5.7 7.2-9.9 13.4-9.9z"/>
          </svg>
          <div>
            <p class="font-heading text-lg font-bold text-primary-800 mb-2">
              ¿Ya fue atendido?
            </p>
            <p class="font-body text-gray-500 text-sm leading-relaxed">
              Su opinión ayuda a más familias a encontrar la atención que necesitan.
            </p>
          </div>
          <a
            :href="site.googleBusinessUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary w-full justify-center text-sm"
            aria-label="Dejar una reseña en Google"
          >
            <Star :size="16" aria-hidden="true" />
            Dejar reseña en Google
          </a>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next'

const site = useSite()

const testimonials = [
  {
    name: 'José Hernández R.',
    rating: 5,
    text: 'Atiende a mi Mamá que tiene 85 años, padece de osteoporosis aunado a la presión alta. El tratamiento fue excelente, ya que gracias a ello se mantiene estable. En todo momento ha mostrado esa parte humana, la motiva mucho y le habla de una manera muy cordial y amigable. Muy profesional en su ramo y excelente persona. Nos encontramos muy agradecidos con él.',
    date: 'Enero 2026',
    avatarColor: '#4874a2',
  },
  {
    name: 'Vero Tagle',
    rating: 5,
    text: 'Excelente geriatra, dedicado, paciente y muy humano. Estamos felices de que mamá sea su paciente, no puede estar en mejores manos. Sumamente profesional.',
    date: 'Enero 2026',
    avatarColor: '#6592c3',
  },
  {
    name: 'Alma Delia Ávila',
    rating: 5,
    text: 'He quedado muy satisfecha con la atención que le ha dado a mi mamá. Ha estado muy al pendiente, sus explicaciones han sido muy claras y ha tenido mucha paciencia. Excelente Doctor.',
    date: 'Enero 2026',
    avatarColor: '#a4b373',
  },
  {
    name: 'Alfonso Fernández',
    rating: 5,
    text: 'El Dr. Pacheco acudió al domicilio para consulta de mi papá. Se tomó todo el tiempo necesario para revisarlo, escuchar y explicar todas las dudas. Quedamos muy satisfechos con su visita y su trato profesional. Muchas gracias Dr. Pacheco.',
    date: 'Enero 2026',
    avatarColor: '#8a9957',
  },
  {
    name: 'Maria Isabel',
    rating: 5,
    text: 'Excelente doctor, explica detalladamente las dudas que surgen en la consulta. Humano y carismático, fue muy amable al atender a mi abuelita. Sin duda volvería a acudir con él.',
    date: 'Enero 2026',
    avatarColor: '#3a5f8a',
  },
  {
    name: 'Jorge B.',
    rating: 5,
    text: 'Pronta respuesta. Excelente trato y profesionalidad. Atención al detalle.',
    date: 'Enero 2026',
    avatarColor: '#545f35',
  },
  {
    name: 'Liliana',
    rating: 5,
    text: 'Los medicamentos que recetó a mi mamá le funcionaron, además de que nos explicó muy bien todo. ¡Excelente atención!',
    date: 'Enero 2026',
    avatarColor: '#4874a2',
  },
  {
    name: 'Carmen Pérez',
    rating: 5,
    text: 'El doctor fue muy explícito con respecto al problema de mi familiar y con las indicaciones que debemos seguir.',
    date: 'Enero 2026',
    avatarColor: '#a4b373',
  },
  {
    name: 'Perla Zúñiga G.',
    rating: 5,
    text: 'Excelente médico, muy humano y dedicado. Ampliamente recomendado.',
    date: 'Enero 2026',
    avatarColor: '#6592c3',
  },
  {
    name: 'Itzia Del Valle',
    rating: 5,
    text: 'Muy buen trato y su tratamiento ha funcionado bastante bien.',
    date: 'Enero 2026',
    avatarColor: '#3a5f8a',
  },
]
</script>
