// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 'nuxt-icons', ['@nuxtjs/google-fonts', {
    families: {
      Raleway: {
        wght: '200..900',
        ital: [100]
      },
    }
  }]],
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          raleway: ["Raleway"]
        },
        extend: {
          colors: {
            mora: "#5820E7"
          }
        }
      }
    }
  },
})