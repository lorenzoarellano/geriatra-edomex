// https://nuxt.com/docs/api/configuration/nuxt-config
import { sites } from './config/sites'

// Determinar configuración del sitio en build time según NUXT_PUBLIC_SITE_ID
const SITE_ID = process.env.NUXT_PUBLIC_SITE_ID ?? 'esmeralda'
const currentSite = sites[SITE_ID] ?? sites.esmeralda

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
    url: currentSite.canonicalUrl,
    name: currentSite.seoTitle,
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
      title: currentSite.seoTitle,
      meta: [
        { name: 'description', content: currentSite.seoDescription },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Dr. Jorge Eduardo Pacheco Ponce' },
        { name: 'theme-color', content: '#4874a2' },

        // ── GEO / Local SEO (dinámico por sede)
        { name: 'geo.region', content: currentSite.geo.region },
        { name: 'geo.placename', content: currentSite.geo.placename },
        { name: 'geo.position', content: `${currentSite.geo.lat};${currentSite.geo.lng}` },
        { name: 'ICBM', content: `${currentSite.geo.lat}, ${currentSite.geo.lng}` },

        // ── Open Graph (dinámico por sede)
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: currentSite.seoTitle },
        { property: 'og:description', content: currentSite.seoDescription },
        { property: 'og:url', content: currentSite.canonicalUrl },
        { property: 'og:locale', content: 'es_MX' },
        { property: 'og:image', content: `${currentSite.canonicalUrl}/social-media-share.webp` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: `${currentSite.seoTitle} – Foto del Dr. Eduardo Pacheco` },
        { property: 'og:site_name', content: currentSite.name },

        // ── Twitter Card (dinámico por sede)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: currentSite.seoTitle },
        { name: 'twitter:description', content: currentSite.seoDescription },
        { name: 'twitter:image', content: `${currentSite.canonicalUrl}/social-media-share.webp` },
      ],
      link: [
        { rel: 'canonical', href: currentSite.canonicalUrl, key: 'canonical' },
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
