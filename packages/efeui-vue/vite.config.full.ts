import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue(), vueJsx()],
    build: {
      sourcemap: true,
      rollupOptions: {
        external: ['vue', 'element-plus', '@vueuse/core'],
        output: {
          globals: {
            vue: 'Vue',
            'element-plus': 'ElementPlus',
            '@vueuse/core': 'VueUse',
          },
        },
      },
      lib: {
        entry: './resources/index.ts',
        name: 'Efeui',
        fileName: 'dist/index',
      },
    },
  }
})
