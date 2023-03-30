import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue'],
      dts: '../typings/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: '../typings/.eslintrc-auto-import.json'
      }
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: '../typings/components.d.ts'
    })
  ]
})
