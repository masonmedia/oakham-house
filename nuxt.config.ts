// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false, // disable server-side rendering
  target: 'static', // (optional in Nuxt 3, safe to include)
  app: {
    baseURL: '/oakham-house/', // IMPORTANT: GitHub Pages project path
    buildAssetsDir: '_nuxt/',  // or '/your-repo-name/' if deploying to a subpath
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap'
        }
      ]
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/main.css',
  ],
})
