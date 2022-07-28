import { defineNuxtConfig } from 'nuxt'
import presetIcons from '@unocss/preset-icons'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css'
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@intlify/nuxt3',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/color-mode'
  ],

  plugins: [
    '~/plugins/pinia-persistedstate.client.ts'
  ],

  // config for '@nuxtjs/tailwindcss'
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss'
  },

  // config for '@nuxtjs/google-fonts'
  googleFonts: {
    families: {
      Poppins: true,
      Quicksand: true,
      Nunito: true,
      Inter: true,
      Rubik: true,
      Lato: true,
      'Readex Pro': true
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true
  },

  // config for '@intlify/nuxt3'
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en-US',
      fallbackLocale: 'en-US',
      availableLocales: ['en-US', 'id-ID'],
      sync: true
    }
  },

  // config for '@unocss/nuxt'
  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [
      presetIcons({
        scale: 1.2,
        extraProperties: {
          'display': 'inline-block',
          'vertical-align': 'middle',
        }
      })
    ],
    safelist: [
      'i-twemoji-flag-us-outlying-islands',
      'i-twemoji-flag-indonesia'
    ]
  },

  // config for '@nuxtjs/color-mode'
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  }
})