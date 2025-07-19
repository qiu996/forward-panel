import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '勇友转发',
  description: '基于gost的转发面板',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/getting-started' },
      { text: '使用指南', link: '/guide' },
      { text: '常见问题', link: '/faq' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qiu996/forward-panel' },
      { icon: 'telegram', link: 'https://t.me/+wdVDni1fdyI0YzE1'}
    ]
  }
})