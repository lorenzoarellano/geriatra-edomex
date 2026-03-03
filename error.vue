<template>
  <div class="min-h-screen bg-white font-body flex flex-col items-center justify-center px-4 text-center">
    <div class="max-w-lg">
      <!-- Icono -->
      <div class="text-8xl font-bold text-primary opacity-20 mb-2">404</div>

      <!-- Título -->
      <h1 class="text-2xl font-heading font-semibold text-gray-800 mb-3">
        Página no encontrada
      </h1>

      <!-- Descripción -->
      <p class="text-gray-500 mb-8 leading-relaxed">
        La página que buscas no existe o fue movida. Puedes regresar al inicio
        para encontrar la información sobre el Dr. Eduardo Pacheco, Geriatra.
      </p>

      <!-- CTA -->
      <NuxtLink
        to="/"
        class="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
      >
        Volver al inicio
      </NuxtLink>

      <!-- Teléfonos de emergencia -->
      <div class="mt-10 pt-8 border-t border-gray-100">
        <p class="text-sm text-gray-400 mb-3">¿Necesita comunicarse con el consultorio?</p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:5516632510"
            class="text-sm text-primary hover:underline font-medium"
          >
            📞 Esmeralda: 55 1663 2510
          </a>
          <a
            href="tel:5553782878"
            class="text-sm text-primary hover:underline font-medium"
          >
            📞 Arboledas: 55 5378 2878
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Página no encontrada – Dr. Eduardo Pacheco Geriatra',
  meta: [
    { name: 'description', content: 'La página que buscas no existe. Regresa al sitio del Dr. Jorge Eduardo Pacheco Ponce, Médico Geriatra en Esmeralda y Arboledas, Estado de México.' },
    { name: 'robots', content: 'noindex, follow' },
  ],
})
</script>
