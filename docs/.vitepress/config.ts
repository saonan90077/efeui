import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import {
  containerPreview,
  componentPreview
} from '@vitepress-demo-preview/plugin'
import { resolve } from 'path'
import nav from './config/nav'
import sidebar from './config/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/efe-plus/',
  title: 'efe-plus',
  description: 'vue3 And Element Plus',
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAThJREFUOE+1k8FKw0AQhv/ZVE1Beij6DqIY6HsUNA30qCcPIqgXQU9WEPFkPdkXEATRpidfoHhUcUFBEE9eFDwnKW5GUtrQNFkIFPc4w//N/DOzhAkfTaiHFmDeWg0IrIPpPhTiRChVZ4EqgA8BuJ4tr6LimYCB+DDujvAF5iJApSjGQDuwpaMFTN8sL4gCdcGYy7TIdODXnk9TALNttfya3IwSqS4GJGZqCuYzz5GfCYDZsY7B2GFBe/1EyC3NgN9YFKrByuN7DJi9q8z/Buo770YIuPBsuRUDStdL5d6U8ZMXgBBHviMbCQszrtUkxhrA230Q0WUmkPASwqj3Vp9eU0Msuta5Z8td7RDHxPo1diqLIlRdEMojt5CoPIznPaRMsbaDEQsbBDwoMvaHnsfn8n+fKe9K/wDB9HIR/p5ZswAAAABJRU5ErkJggg==',
        type: 'image/x-icon'
      }
    ]
  ],
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: ['vue'],
        dts: resolve(__dirname, '../../typings/auto-imports.d.ts'),
        eslintrc: {
          enabled: true,
          filepath: resolve(__dirname, '../../.eslintrc-auto-import.json')
        }
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: resolve(__dirname, '../../typings/components.d.ts')
      })
    ],
    ssr: {
      format: 'cjs'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/saonan90077/efe-plus' }
    ]
  }
})
