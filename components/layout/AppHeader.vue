<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/95 backdrop-blur-custom shadow-glass border-b border-gray-100'
        : 'bg-transparent',
    ]"
    role="banner"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">

        <!-- Logo + Nombre -->
        <NuxtLink href="#inicio" aria-label="Ir al inicio" class="flex items-center gap-3 group">
          <NuxtImg
            src="/logo-main.webp"
            alt="Logo Dr. Eduardo Pacheco Ponce"
            width="140"
            height="48"
            loading="eager"
            class="h-10 lg:h-12 w-auto object-contain"
          />
        </NuxtLink>

        <!-- Navegación desktop -->
        <nav class="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="nav-link px-3 py-2 text-sm rounded-lg hover:bg-primary-50"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- CTA: Teléfonos de ambas sedes -->
        <div class="hidden lg:flex items-center gap-2">
          <a
            href="tel:5516632510"
            class="btn-call text-sm px-4 py-2.5"
            aria-label="Llamar a recepción Esmeralda: 55 1663 2510"
          >
            <Phone :size="14" aria-hidden="true" />
            <span class="flex flex-col leading-none">
              <span class="text-[9px] font-normal opacity-80 uppercase tracking-wide">Esmeralda</span>
              <span>55 1663 2510</span>
            </span>
          </a>
          <a
            href="tel:5553782878"
            class="btn-call-secondary text-sm px-4 py-2.5"
            aria-label="Llamar a recepción Arboledas: 55 5378 2878"
          >
            <Phone :size="14" aria-hidden="true" />
            <span class="flex flex-col leading-none">
              <span class="text-[9px] font-normal opacity-80 uppercase tracking-wide">Arboledas</span>
              <span>55 5378 2878</span>
            </span>
          </a>
        </div>

        <!-- Hamburguesa móvil -->
        <button
          class="lg:hidden p-2 rounded-lg text-primary-700 hover:bg-primary-50 transition-colors"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-menu"
          aria-label="Menú de navegación"
          @click="mobileOpen = !mobileOpen"
        >
          <Menu v-if="!mobileOpen" :size="24" aria-hidden="true" />
          <X v-else :size="24" aria-hidden="true" />
        </button>
      </div>
    </div>

    <!-- Menú móvil -->
    <Transition name="slide-down">
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="lg:hidden bg-white/98 backdrop-blur-custom border-t border-gray-100 shadow-glass"
      >
        <div class="px-4 py-4 flex flex-col gap-1">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="nav-link px-4 py-3 rounded-xl hover:bg-primary-50 text-sm"
            @click="mobileOpen = false"
          >
            {{ item.label }}
          </a>
          <div class="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="tel:5516632510"
              class="btn-call justify-center text-sm"
              aria-label="Llamar a recepción Esmeralda"
            >
              <Phone :size="16" aria-hidden="true" />
              Esmeralda · 55 1663 2510
            </a>
            <a
              href="tel:5553782878"
              class="btn-call-secondary justify-center text-sm"
              aria-label="Llamar a recepción Arboledas"
            >
              <Phone :size="16" aria-hidden="true" />
              Arboledas · 55 5378 2878
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Spacer para que el contenido no quede debajo del header fijo -->
  <div class="h-16 lg:h-20" aria-hidden="true" />
</template>

<script setup lang="ts">
import { Phone, Menu, X } from 'lucide-vue-next'

const site = useSite()

const scrolled = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { href: '#inicio',             label: 'Inicio' },
  { href: '#acerca-de',          label: 'Acerca de' },
  { href: '#servicios',          label: 'Servicios' },
  { href: '#testimonios',        label: 'Testimonios' },
  { href: '#preguntas-frecuentes', label: 'Preguntas Frecuentes' },
  { href: '#contacto',           label: 'Contacto' },
]

onMounted(() => {
  const handler = () => { scrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
