import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import fg from 'fast-glob'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const libEntrys = fg.sync('./resources/**/*.{ts,tsx}')
  return {
    plugins: [
      vue(),
      vueJsx(),
      dts({
        outDir: './dist/es',
        include: ['./resources/**/*.ts', './resources/**/*.tsx'],
      }),
    ],
    build: {
      sourcemap: true,
      rollupOptions: {
        external: ['vue', 'element-plus', '@vueuse/core'],
        output: [
          {
            dir: './dist/lib',
            format: 'cjs',
            globals: {
              vue: 'Vue',
              'element-plus': 'ElementPlus',
              '@vueuse/core': 'VueUse',
            },
            entryFileNames: '[name].js',
            preserveModules: true,
            preserveModulesRoot: './resources',
            exports: 'named',
          },
          {
            dir: './dist/es',
            format: 'es',
            entryFileNames: '[name].mjs',
            preserveModules: true,
            preserveModulesRoot: './resources',
          },
        ],
      },
      lib: {
        entry: libEntrys,
      },
      minify: false,
    },
  }
})
