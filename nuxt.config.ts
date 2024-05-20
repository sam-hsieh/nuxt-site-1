// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: ['@/assets/css/main.css'],
  devtools: { enabled: false },
  "imports": {
    "dirs": ['stores']
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        'autoImports': ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    "@nuxtjs/tailwindcss", 'nuxt-icon']
  ,
},)