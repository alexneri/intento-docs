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
        text: 'Examples',
        items: [
          { text: 'Translation Portal', link: '/translation-portal' }
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Alex Neri | Crossebell | Crosse_'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alexneri/vitedocs' },
      { icon: 'x', link: 'https://linktr.ee/crosse' }
    ]
  }
})