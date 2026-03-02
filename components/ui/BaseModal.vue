<template>
  <Teleport to="body">
    <Transition name="backdrop">
      <div
        v-if="open"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
        @click.self="$emit('close')"
      >
        <Transition name="modal">
          <div
            v-if="open"
            class="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col"
          >
            <!-- Header -->
            <div class="flex items-center justify-between px-7 pt-6 pb-4 border-b border-gray-100 shrink-0">
              <h2 :id="titleId" class="font-heading text-xl font-bold text-primary-800">
                <slot name="title" />
              </h2>
              <button
                class="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                :aria-label="`Cerrar ${titleText}`"
                @click="$emit('close')"
              >
                <X :size="20" aria-hidden="true" />
              </button>
            </div>
            <!-- Body scroll -->
            <div class="overflow-y-auto px-7 py-5 flex-1 font-body text-sm text-gray-700 prose prose-sm max-w-none">
              <slot />
            </div>
            <!-- Footer -->
            <div class="px-7 py-4 border-t border-gray-100 shrink-0 flex justify-end">
              <button class="btn-primary text-sm px-6" @click="$emit('close')">
                Entendido
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'

const props = defineProps<{ open: boolean; titleText?: string; titleId?: string }>()
defineEmits<{ close: [] }>()

// Bloquear scroll del body cuando el modal está abierto
watch(
  () => props.open,
  (val) => {
    if (import.meta.client) {
      document.body.style.overflow = val ? 'hidden' : ''
    }
  },
)

// Cerrar con Escape
onMounted(() => {
  const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') { /* emit handled by parent */ } }
  window.addEventListener('keydown', handler)
  onUnmounted(() => window.removeEventListener('keydown', handler))
})
</script>

<style scoped>
.backdrop-enter-active, .backdrop-leave-active { transition: opacity 0.25s ease; }
.backdrop-enter-from, .backdrop-leave-to { opacity: 0; }
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease, transform 0.25s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; transform: scale(0.95) translateY(10px); }
</style>
