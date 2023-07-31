import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {
  containerPreview,
  componentPreview,
} from '@vitepress-demo-preview/plugin'
import nav from './config/nav'
import sidebar from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'efeui-vue',
  description: 'UI 扩展组件',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview)
      md.use(componentPreview)
    },
  },
  vite: {
    plugins: [vueJsx()],
    ssr: {
      noExternal: 'countup.js',
    },
  },
})
