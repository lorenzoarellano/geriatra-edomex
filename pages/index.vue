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

// ── Google Analytics 4
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-32EHWN9LFP',
      async: true,
      tagPosition: 'head',
    },
    {
      innerHTML: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-32EHWN9LFP');`,
      tagPosition: 'head',
    },
  ],
})

// SEO dinámico por sede
useHead({
  title: site.seoTitle,
  meta: [
    { name: 'description', content: site.seoDescription },
    { property: 'og:title', content: site.seoTitle },
    { property: 'og:description', content: site.seoDescription },
    { property: 'og:url', content: site.canonicalUrl },
    { name: 'geo.region', content: site.geo.region },
    { name: 'geo.placename', content: site.geo.placename },
    { name: 'geo.position', content: `${site.geo.lat};${site.geo.lng}` },
    { name: 'ICBM', content: `${site.geo.lat}, ${site.geo.lng}` },
  ],
  link: [{ rel: 'canonical', href: site.canonicalUrl }],
})
</script>
