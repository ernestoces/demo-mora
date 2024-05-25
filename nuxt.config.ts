// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-time', '@vueuse/nuxt', 'nuxt-icons', ['@nuxtjs/google-fonts', {
    families: {
      Raleway: {
        wght: '200..900',
        ital: [100]
      },
      Montserrat: {
        wght: '200..900'
      },
    }
  }], "@nuxtjs/sanity", "@nuxt/image", "nuxt-marquee", "@nuxt/ui", "@nuxtjs/cloudinary"],
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          raleway: ["Raleway"],
          montserrat: ["Montserrat"]
        },
        extend: {
          colors: {
            mora: "#5820E7",
            dark: "#18131e",
            purple: "#372B47",
            lightPurple: "#B8A2D6",
            aaBlue: "#133A65",
            aaOrange: "#FF5A10",
            aaBlack: "#333333"

          }
        }
      }
    }
  },
  cloudinary: {
    cloudName: 'dkzaozc1s',
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  sanity: {
    projectId: 'sqk82n5u',
    dataset: 'production',
    apiVersion: '2024-05-25'
  }
})