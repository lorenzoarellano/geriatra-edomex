// https://nuxt.com/docs/api/configuration/nuxt-config

// Determinar configuración del sitio en build time según NUXT_PUBLIC_SITE_ID
const SITE_ID = process.env.NUXT_PUBLIC_SITE_ID ?? 'esmeralda'
const SITE_URLS: Record<string, { url: string; name: string }> = {
  esmeralda: {
    url: 'https://geriatraatizapan.com',
    name: 'Dr. Eduardo Pacheco Ponce – Geriatra en Cd. López Mateos | Centro Médico Esmeralda',
  },
  arboledas: {
    url: 'https://geriatriaarboledas.com',
    name: 'Dr. Eduardo Pacheco Ponce – Geriatra en Las Arboledas, Tlalnepantla | Clínica Médica Arboledas',
  },
}
const currentSite = SITE_URLS[SITE_ID] ?? SITE_URLS.esmeralda

export default defineNuxtConfig({
  compatibilityDate: '2026-03-02',
  ssr: true,

  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/eslint',
  ],

  css: ['~/assets/css/main.css'],

  // ────────────────────────────────────────────────────────────
  // Runtime config — consumed via useSite() composable
  // ────────────────────────────────────────────────────────────
  runtimeConfig: {
    public: {
      // Set via .env:  NUXT_PUBLIC_SITE_ID=esmeralda | arboledas
      siteId: process.env.NUXT_PUBLIC_SITE_ID ?? 'esmeralda',
    },
  },

  // ────────────────────────────────────────────────────────────
  // Google Fonts — Optimizada, self-hosted via @nuxtjs/google-fonts
  // ────────────────────────────────────────────────────────────
  googleFonts: {
    families: {
      Oswald: [300, 400, 500, 600, 700],
      'Open Sans': [300, 400, 500, 600, 700],
    },
    display: 'swap',
    preconnect: true,
    prefetch: true,
    preload: true,
    download: true,
    inject: true,
  },

  // ────────────────────────────────────────────────────────────
  // @nuxt/image
  // ────────────────────────────────────────────────────────────
  image: {
    formats: ['avif', 'webp'],
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
    quality: 85,
  },

  // ────────────────────────────────────────────────────────────
  // Robots & Sitemap
  // ────────────────────────────────────────────────────────────
  // ── Site URL (usado por @nuxtjs/sitemap y @nuxtjs/robots v5+)
  site: {
    url: currentSite.url,
    name: currentSite.name,
  },

  robots: {
    disallow: [],
  },

  sitemap: {
    urls: [
      {
        loc: '/',
        changefreq: 'monthly',
        priority: 1.0,
        lastmod: new Date().toISOString().split('T')[0],
      },
    ],
  },

  // ────────────────────────────────────────────────────────────
  // App Head — SEO / GEO / AEO / OpenGraph / Twitter Cards
  // ────────────────────────────────────────────────────────────
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Dr. Eduardo Pacheco Ponce – Geriatra en Atizapán | Esmeralda y Arboledas',
      meta: [
        {
          name: 'description',
          content:
            'Médico Geriatra en Atizapán de Zaragoza, Estado de México. Atención integral al adulto mayor en Centro Médico Esmeralda y Clínica Médica Arboledas. Consulta, valoración geriátrica, deterioro cognitivo, prevención de caídas y más.',
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Dr. Jorge Eduardo Pacheco Ponce' },
        { name: 'theme-color', content: '#4874a2' },

        // ── GEO / Local SEO
        { name: 'geo.region', content: 'MX-MEX' },
        { name: 'geo.placename', content: 'Atizapán de Zaragoza, Estado de México' },
        { name: 'geo.position', content: '19.5697;-99.2292' },
        { name: 'ICBM', content: '19.5697, -99.2292' },

        // ── Open Graph
        { property: 'og:type', content: 'website' },
        {
          property: 'og:title',
          content: 'Dr. Eduardo Pacheco Ponce – Geriatra en Atizapán | Esmeralda y Arboledas',
        },
        {
          property: 'og:description',
          content:
            'Geriatría integral enfocada en prevención, funcionalidad y calidad de vida. Atención centrada en la persona y acompañamiento familiar.',
        },
        { property: 'og:url', content: 'https://geriatraatizapan.com' },
        { property: 'og:locale', content: 'es_MX' },
        { property: 'og:image', content: 'https://geriatraatizapan.com/social-media-share.webp' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Dr. Eduardo Pacheco Ponce – Médico Geriatra' },
        { property: 'og:site_name', content: 'Dr. Eduardo Pacheco – Geriatra Atizapán' },

        // ── Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Dr. Eduardo Pacheco Ponce – Geriatra en Atizapán',
        },
        {
          name: 'twitter:description',
          content:
            'Geriatría integral en Esmeralda y Arboledas, Estado de México. Valoración geriátrica, deterioro cognitivo, prevención de caídas.',
        },
        { name: 'twitter:image', content: 'https://geriatraatizapan.com/social-media-share.webp' },
      ],
      link: [
        { rel: 'canonical', href: 'https://geriatraatizapan.com' },
        // Preconnect a Google Fonts y Maps
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
        { rel: 'dns-prefetch', href: 'https://maps.google.com' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        // Preload hero image (LCP crítico)
        {
          rel: 'preload',
          as: 'image',
          href: '/hero1.webp',
          type: 'image/webp',
        },
        // Preload foto del doctor (LCP sección Acerca de)
        {
          rel: 'preload',
          as: 'image',
          href: '/acercade.webp',
          type: 'image/webp',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  // ────────────────────────────────────────────────────────────
  // PostCSS — necesario para procesar Tailwind CSS
  // ────────────────────────────────────────────────────────────
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // ────────────────────────────────────────────────────────────
  // Build optimizations
  // ────────────────────────────────────────────────────────────
  build: {
    transpile: ['gsap'],
  },

  vite: {
    optimizeDeps: {
      include: ['gsap', 'axios', 'lucide-vue-next'],
    },
  },

  // ────────────────────────────────────────────────────────────
  // Nitro (SSR server)
  // ────────────────────────────────────────────────────────────
  nitro: {
    preset: 'static',
    output: {
      publicDir: 'dist',
    },
    compressPublicAssets: true,
  },

  experimental: {
    payloadExtraction: false,
  },
})
