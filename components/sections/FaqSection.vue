<template>
  <section class="section-padding bg-primary-900 text-white" aria-labelledby="faq-heading">
    <div class="max-w-4xl mx-auto">

      <!-- Encabezado -->
      <div class="text-center mb-14">
        <span class="badge-credential mb-3 !text-secondary-300 !border-secondary-400 !bg-secondary-900">
          <HelpCircle :size="12" aria-hidden="true" />
          Resolvemos sus dudas
        </span>
        <h2 id="faq-heading" class="section-title !text-white mx-auto">
          Preguntas <span class="text-secondary-300">Frecuentes</span>
        </h2>
        <p class="section-subtitle !text-primary-200 mx-auto mt-3">
          Información útil para usted y su familia antes de agendar su primera consulta geriátrica.
        </p>
      </div>

      <!-- Acordeón FAQ -->
      <dl class="flex flex-col gap-3" role="list">
        <div
          v-for="(faq, idx) in faqs"
          :key="idx"
          class="rounded-2xl border overflow-hidden"
          :class="openIndex === idx ? 'border-secondary-400 bg-primary-800' : 'border-primary-700 bg-primary-800/60'"
          role="listitem"
        >
          <dt>
            <button
              class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-primary-700/50 transition-colors"
              :aria-expanded="openIndex === idx"
              :aria-controls="`faq-answer-${idx}`"
              :id="`faq-question-${idx}`"
              @click="toggle(idx)"
            >
              <span class="font-heading text-base font-semibold text-white leading-snug">
                {{ faq.question }}
              </span>
              <ChevronDown
                :size="20"
                class="shrink-0 text-secondary-300 transition-transform duration-300"
                :class="openIndex === idx ? 'rotate-180' : ''"
                aria-hidden="true"
              />
            </button>
          </dt>
          <Transition name="accordion">
            <dd
              v-if="openIndex === idx"
              :id="`faq-answer-${idx}`"
              :aria-labelledby="`faq-question-${idx}`"
              class="px-6 pb-5 font-body text-primary-200 text-sm leading-relaxed"
            >
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span v-html="faq.answer" />
            </dd>
          </Transition>
        </div>
      </dl>

      <!-- CTA al final del FAQ -->
      <div class="mt-12 text-center">
        <p class="font-body text-primary-300 text-sm mb-4">
          ¿Tiene más preguntas? Llámenos directamente y con gusto le orientamos.
        </p>
        <a
          :href="`tel:${site.phone}`"
          class="btn-secondary"
          :aria-label="`Llamar para más información: ${site.phoneDisplay}`"
        >
          <Phone :size="16" aria-hidden="true" />
          {{ site.phoneDisplay }}
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { HelpCircle, ChevronDown, Phone } from 'lucide-vue-next'

const site = useSite()
const openIndex = ref<number | null>(0)

const toggle = (idx: number) => {
  openIndex.value = openIndex.value === idx ? null : idx
}

const faqs = [
  {
    question: '¿Qué es un médico geriatra y qué trata?',
    answer:
      'Un <strong>médico geriatra</strong> es un especialista en la salud integral de las personas mayores de 65 años. Atiende no solo las enfermedades, sino también el <strong>estado funcional, cognitivo, emocional y social</strong> del paciente. Trata condiciones como diabetes, hipertensión, deterioro cognitivo, demencia, fragilidad, riesgo de caídas y problemas de memoria, entre otros.',
  },
  {
    question: '¿Cuándo debo llevar a mi familiar con un geriatra?',
    answer:
      'Se recomienda una consulta geriátrica cuando su familiar mayor presenta: <strong>pérdida de memoria, dificultad para caminar, caídas frecuentes, pérdida de peso, uso de múltiples medicamentos, cambios de ánimo o conducta, o dificultad para realizar actividades cotidianas</strong>. También es recomendable como revisión preventiva anual a partir de los 65 años.',
  },
  {
    question: '¿En qué consiste la Valoración Geriátrica Integral?',
    answer:
      'Es una evaluación completa que analiza: <strong>estado funcional</strong> (capacidad para actividades diarias), <strong>estado cognitivo</strong> (memoria y razonamiento), <strong>estado emocional</strong> (depresión, ansiedad), <strong>estado nutricional</strong>, medicamentos actuales, riesgo de caídas y red de apoyo familiar. Con esta valoración se diseña un plan de manejo individualizado.',
  },
  {
    question: '¿Qué es la polifarmacia y por qué es peligrosa en adultos mayores?',
    answer:
      'La <strong>polifarmacia</strong> es el uso simultáneo de 5 o más medicamentos. En adultos mayores es especialmente peligrosa porque puede causar <strong>interacciones graves, caídas, confusión mental, daño renal o hepático</strong>. El Dr. Pacheco revisa y optimiza los tratamientos para reducir riesgos sin comprometer la salud del paciente.',
  },
  {
    question: '¿Qué síntomas pueden indicar deterioro cognitivo o demencia?',
    answer:
      'Algunos signos de alerta incluyen: <strong>olvidar eventos recientes, repetir preguntas, perderse en lugares conocidos, dificultad para manejar dinero o medicamentos, cambios en la personalidad, agresividad inusual o abandono de actividades que antes disfrutaba</strong>. Una consulta temprana permite diagnóstico y manejo oportuno.',
  },
  {
    question: '¿Ofrecen atención domiciliaria?',
    answer:
      'Sí. El Dr. Pacheco ofrece <strong>atención domiciliaria en Zona Esmeralda y Arboledas</strong> para pacientes que por su condición física tienen dificultad para trasladarse al consultorio. Llame para coordinar una visita.',
  },
  {
    question: '¿Cómo puedo agendar una cita?',
    answer:
      'Puede agendar su cita fácilmente llamando directamente al consultorio de <strong>Esmeralda: 55 1663 2510</strong> o al de <strong>Arboledas: 55 5378 2878</strong>. También puede escribir por WhatsApp al <strong>55 3920 3393</strong>.',
  },
  {
    question: '¿Qué costo tiene la consulta geriátrica?',
    answer:
      'El costo de la consulta varía según el tipo de evaluación requerida. Le recomendamos llamar directamente al consultorio para recibir información actualizada sobre tarifas y opciones de pago.',
  },
]
</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active {
  transition: opacity 0.25s ease, max-height 0.35s ease;
  max-height: 300px;
  overflow: hidden;
}
.accordion-enter-from, .accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
