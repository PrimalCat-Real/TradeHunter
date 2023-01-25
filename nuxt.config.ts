// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        ['@nuxtjs/i18n', {
            locales: [
              {
                code: 'en',
                file: 'en.json'
              },
              {
                code: 'ru',
                file: 'ru.json'
              },
              {
                code: 'ua',
                file: 'ua.json'
              }
            ],
            defaultLocale: 'en',
            lazy: true,
            langDir: 'locales/'
          }],
        '@nuxtjs/tailwindcss'
    ]
})
