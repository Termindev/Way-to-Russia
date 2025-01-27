import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Way to Russia",
  description: "A summary of Opportunities to study in Russia",
  head: [
    ["script", { src: "/_vercel/insights/script.js", defer: true }],
    ["meta", { name: "google-site-verification", content: "6L84WxUIILcnfNZnSmiI8UGwsRXE3Qdl-HQBDjslfjk" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'How to?', link: '/how-to' },
      { text: 'Olympiads', link: '/olymp-notes' },
      { text: 'Scholarships', link: '/scholarships' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        // text: 'txt',
        items: [
          { text: 'How to', link: '/how-to' },
          { text: 'Olympiad notes', link: '/olymp-notes' },
          { text: 'Olympiads', link: '/olympiads' },
          { text: 'Scholarships', link: '/scholarships' },
          { text: 'Contact', link: '/contact' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
