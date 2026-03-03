<template>
  <div class="min-h-screen bg-white font-body">
    <!-- SEO JSON-LD -->
    <SeoJsonLd />

    <!-- Layout -->
    <LayoutAppHeader />

    <main id="main-content">
      <!-- Inicio / Hero -->
      <SectionsHeroSection id="inicio" />

      <!-- Acerca de -->
      <SectionsAboutSection id="acerca-de" class="cv-auto" />

      <!-- Servicios -->
      <SectionsServicesSection id="servicios" class="cv-auto" />

      <!-- Biblioteca de Salud -->
      <SectionsHealthLibrary id="salud" class="cv-auto" />

      <!-- Testimonios -->
      <SectionsTestimonialsSection id="testimonios" class="cv-auto" />

      <!-- Preguntas Frecuentes -->
      <SectionsFaqSection id="preguntas-frecuentes" class="cv-auto" />

      <!-- Contacto -->
      <SectionsContactSection id="contacto" class="cv-auto" />
    </main>

    <LayoutAppFooter />

    <!-- UI flotante: WhatsApp FAB -->
    <UiWhatsappFab />

    <!-- Modales legales -->
    <UiPrivacyModal />
    <UiTermsModal />

    <!-- Cookie Banner -->
    <UiCookieBanner />
  </div>
</template>

<script setup lang="ts">
const site = useSite()

// ── Google Analytics 4 con Consent Mode v2
useHead({
  script: [
    {
      // Consent Mode v2: inicializar dataLayer y establecer defaults ANTES de cargar GA4
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        // Consent Mode v2 — denegado por defecto
        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          wait_for_update: 500
        });
        // Si el usuario ya aceptó previamente, conceder inmediatamente
        try {
          var _consent = localStorage.getItem('cookie-consent');
          if (_consent === 'all') {
            gtag('consent', 'update', {
              analytics_storage: 'granted',
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted'
            });
          }
        } catch(e) {}
      `,
      tagPosition: 'head',
    },
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-32EHWN9LFP',
      async: true,
      tagPosition: 'head',
    },
    {
      innerHTML: `gtag('js', new Date()); gtag('config', 'G-32EHWN9LFP');`,
      tagPosition: 'head',
    },
  ],
})

// SEO dinámico por sede
const ogImage = `${site.canonicalUrl}/social-media-share.webp`
useHead({
  title: site.seoTitle,
  meta: [
    { name: 'description', content: site.seoDescription },
    { property: 'og:title', content: site.seoTitle },
    { property: 'og:description', content: site.seoDescription },
    { property: 'og:url', content: site.canonicalUrl },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: `${site.seoTitle} – Foto del Dr. Eduardo Pacheco` },
    { name: 'twitter:image', content: ogImage },
    { name: 'geo.region', content: site.geo.region },
    { name: 'geo.placename', content: site.geo.placename },
    { name: 'geo.position', content: `${site.geo.lat};${site.geo.lng}` },
    { name: 'ICBM', content: `${site.geo.lat}, ${site.geo.lng}` },
  ],
  link: [
    { rel: 'canonical', href: site.canonicalUrl },
    { rel: 'alternate', hreflang: 'es-MX', href: 'https://geriatraatizapan.com' },
    { rel: 'alternate', hreflang: 'es-MX', href: 'https://geriatriaarboledas.com' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://geriatraatizapan.com' },
  ],
})
</script>
