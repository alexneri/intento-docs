import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Intento Docs",
  description: "Site collection for Intento Help Docs",
  base: '/',
  srcDir: './docs',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Translation portal', link: '/translation-portal' }
    ],

    sidebar: [
      {
        text: 'Intento docs',
        items: [
          { text: 'Translation Portal', link: '/translation-portal' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
