import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Intento docs",
  description: "A sample Documentation deployment on Vercel using Vitepress.",
  base: '/',
  srcDir: './partials',
  outDir: './publish',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Translation Portal', link: '/translation-portal' }
    ],

    sidebar: [
      {
        text: 'Intento docs',
        items: [
          { text: 'Translation Portal', link: '/translation-portal' },
          { text: 'Intento Smart Routing', link: '/smart-routing' },
          { text: 'Domain-Specific Routing', link: '/domain-specific-routing' }
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Alex Neri | Crossebell | Crosse_'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alexneri/vitedocs' },
      { icon: 'x', link: 'https://linktr.ee/crosse' }
    ]
  }
})