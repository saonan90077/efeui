import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import fg from 'fast-glob'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => {
  const libEntrys = fg.sync('./resources/**/*.{ts,tsx}', {
    absolute: true,
  })
  return {
    plugins: [
      vue(),
      vueJsx(),
      dts({
        outDir: 'dist/es',
        include: ['./resources/**/*.ts', './resources/**/*.tsx'],
        aliasesExclude: [/\.scss$/],
      }),
    ],
    esbuild: {
      drop: ['console', 'debugger'],
    },
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        external: [
          'vue',
          'element-plus',
          '@element-plus/icons-vue',
          '@vueuse/core',
        ],
        output: [
          {
            dir: 'dist/lib',
            format: 'cjs',
            globals: {
              vue: 'Vue',
              'element-plus': 'ElementPlus',
              '@element-plus/icons-vue': 'ElementPlusIconsVue',
              '@vueuse/core': 'VueUse',
            },
            entryFileNames: '[name].js',
            assetFileNames: 'style/[name].[ext]',
            preserveModules: true,
            preserveModulesRoot: path.resolve(__dirname, './resources'),
            exports: 'named',
          },
          {
            dir: 'dist/es',
            format: 'es',
            entryFileNames: '[name].mjs',
            assetFileNames: 'style/[name].[ext]',
            preserveModules: true,
            preserveModulesRoot: path.resolve(__dirname, './resources'),
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
