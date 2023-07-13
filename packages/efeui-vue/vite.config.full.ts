import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue(), vueJsx()],
    esbuild: {
      drop: ['console', 'debugger'],
    },
    build: {
      rollupOptions: {
        external: [
          'vue',
          'element-plus',
          '@element-plus/icons-vue',
          '@vueuse/core',
        ],
        output: {
          globals: {
            vue: 'Vue',
            'element-plus': 'ElementPlus',
            '@element-plus/icons-vue': 'ElementPlusIconsVue',
            '@vueuse/core': 'VueUse',
          },
          exports: 'named',
        },
      },
      lib: {
        entry: './resources/index.ts',
        name: 'Efeui',
        fileName: 'index.full',
      },
    },
  }
})
