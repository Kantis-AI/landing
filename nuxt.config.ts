// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag'],
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID,
  },
  runtimeConfig: {
    public: {
      posthogPublicKey: '',
      posthogHost: 'https://us.i.posthog.com',
      posthogDefaults: '2026-01-30'
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400;1,400&family=DM+Sans:wght@400;500;600&display=swap' },
        { rel: 'icon', href: '/kantis-squared.png' }
      ]
    }
  }
})