// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/styles/main.css',
  ],

  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ["@nuxt/ui"]
});