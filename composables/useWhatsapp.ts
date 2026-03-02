// composables/useWhatsapp.ts
// ──────────────────────────────────────────────────────────────────
// Lógica del CTA de WhatsApp:
//  1. Abre un chat directo al número del Dr.
//  2. Envía notificación interna al médico vía cybertbot
// ──────────────────────────────────────────────────────────────────
import axios from 'axios'

const DR_WHATSAPP = '5539203393' // Número principal del Dr. Eduardo Pacheco
const CYBERTBOT_URL = 'https://cybertbot.com/masivo'

/**
 * Envía una notificación al médico (vía cybertbot) y abre WhatsApp.
 * @param ctaLabel  Descripción del botón que se presionó (para logs)
 */
export const useWhatsapp = () => {
  const notifyAndOpen = async (ctaLabel = 'Agendar Cita') => {
    // ── 1. Notificación interna ────────────────────────────────────
    if (import.meta.client) {
      try {
        const now = new Date()
        const hh = now.getHours().toString().padStart(2, '0')
        const mm = now.getMinutes().toString().padStart(2, '0')
        const ss = now.getSeconds().toString().padStart(2, '0')
        const hora = `${hh}:${mm}:${ss}`
        const mensaje = `Click sitio web en el botón "${ctaLabel}" a las: ${hora}`

        await axios.post(CYBERTBOT_URL, {
          number: DR_WHATSAPP,
          message: mensaje,
        })
      } catch (err) {
        // Silencioso — no bloquear al usuario si falla la notificación
        console.warn('[useWhatsapp] Notificación cybertbot falló:', err)
      }

      // ── 2. Abrir WhatsApp ─────────────────────────────────────────
      const waUrl = `https://wa.me/52${DR_WHATSAPP}?text=${encodeURIComponent(
        '¡Hola Doctor! Me gustaría agendar una consulta geriátrica.',
      )}`
      window.open(waUrl, '_blank', 'noopener,noreferrer')
    }
  }

  /** Link directo de WhatsApp (para <a href> estático) */
  const whatsappHref = `https://wa.me/52${DR_WHATSAPP}?text=${encodeURIComponent(
    '¡Hola Doctor! Me gustaría agendar una consulta geriátrica.',
  )}`

  return { notifyAndOpen, whatsappHref, phone: DR_WHATSAPP }
}
