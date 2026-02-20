// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'es',
        class: 'dark'
      }
      ,
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        // Non-blocking font stylesheet load
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', media: 'print', onload: "this.media='all'" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@700&display=swap', media: 'print', onload: "this.media='all'" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap', media: 'print', onload: "this.media='all'" }
      ]
    }
  }
})