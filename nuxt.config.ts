// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/google-fonts'],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      'Montserrat': [300, 400, 500, 600],
      'Fira Sans': [500, 600],
    },
  },
});
