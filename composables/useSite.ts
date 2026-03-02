// composables/useSite.ts
// ──────────────────────────────────────────────────────────────────
// Lee NUXT_PUBLIC_SITE_ID y devuelve la configuración de la sede activa
// ──────────────────────────────────────────────────────────────────
import { sites } from '~/config/sites'
import type { SiteConfig } from '~/config/sites'

export const useSite = (): SiteConfig => {
  const config = useRuntimeConfig()
  const siteId = (config.public.siteId as string) ?? 'esmeralda'
  return sites[siteId] ?? sites.esmeralda
}
