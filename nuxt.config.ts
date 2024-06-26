// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-icon"],
  ssr: false,
  app: {
    baseURL: '/landing/', // Ganti dengan base URL yang Anda inginkan
  },
  router: {
    options: {
      base: '/landing/',
      mode: 'history',
    }
  },
  build: {
    publicPath: '/landing/_nuxt/'
  },
  target: 'static',
});
