import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Way to Russia",
  description: "A summary of Opportunities to study in Russia",
  head: [["script", { src: "/_vercel/insights/script.js", defer: true }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Olympiads', link: '/olymp-notes' },
      { text: 'Scholarships', link: '/scholarships' }
    ],

    sidebar: [
      {
        // text: 'txt',
        items: [
          { text: 'Olympiad notes', link: '/olymp-notes' },
          { text: 'Olympiads', link: '/olympiads' },
          { text: 'Scholarships', link: '/scholarships' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
