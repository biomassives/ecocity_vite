import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "eco ops app",
  description: "biodiversity credit system",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started Using Eco Ops',
        items: [
          { text: 'Set up a personal profile', link: '/profile' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Circular', link: '/circular-incubator-fund' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
