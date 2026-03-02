<template>
  <Transition name="slide-up">
    <div
      v-if="!accepted"
      class="fixed bottom-0 inset-x-0 z-50 px-4 pb-4"
      role="alertdialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
    >
      <div class="glass-dark max-w-3xl mx-auto rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie :size="28" class="text-secondary-300 shrink-0" aria-hidden="true" />
        <div class="flex-1">
          <p id="cookie-title" class="font-heading font-semibold text-white text-sm mb-1">
            Este sitio utiliza cookies
          </p>
          <p id="cookie-desc" class="font-body text-primary-200 text-xs leading-relaxed">
            Utilizamos cookies propias y de terceros para mejorar su experiencia y analizar el tráfico del sitio.
            Al continuar navegando acepta nuestro uso de cookies conforme a la
            <button class="underline text-secondary-300 hover:text-white transition-colors" @click="$emit('open-privacy')">Política de Privacidad</button>.
          </p>
        </div>
        <div class="flex gap-2 shrink-0">
          <button
            class="text-xs font-body text-primary-300 hover:text-white transition-colors px-3 py-2"
            @click="reject"
          >
            Solo necesarias
          </button>
          <button
            class="btn-secondary text-xs px-5 py-2.5"
            @click="accept"
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { Cookie } from 'lucide-vue-next'

defineEmits<{ 'open-privacy': [] }>()

const STORAGE_KEY = 'cookie-consent'
const accepted = ref(true) // inicia oculto hasta montar

onMounted(() => {
  accepted.value = !!localStorage.getItem(STORAGE_KEY)
})

const accept = () => {
  localStorage.setItem(STORAGE_KEY, 'all')
  accepted.value = true
}

const reject = () => {
  localStorage.setItem(STORAGE_KEY, 'necessary')
  accepted.value = true
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.slide-up-enter-from, .slide-up-leave-to { opacity: 0; transform: translateY(100%); }
</style>
