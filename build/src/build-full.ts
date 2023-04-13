import vue from '@vitejs/plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild'
import { rollup } from 'rollup'
import { resolve } from 'path'
import { efePlusOutput, efePlusRoot } from './path'

const buildBundle = async (minify: boolean) => {
  const bundle = await rollup({
    input: resolve(efePlusRoot, 'index.ts'),
    plugins: [
      {
        name: 'theme-chalk-alias',
        resolveId(id) {
          if (!id.startsWith('@efe-plus/theme-chalk')) {
            return
          }
          return {
            id: id.replaceAll('@efe-plus/theme-chalk', 'efe-plus/theme-chalk'),
            external: 'absolute'
          }
        }
      },
      nodeResolve({
        extensions: ['.ts', '.vue']
      }),
      commonjs(),
      vue(),
      esbuild({
        treeShaking: true,
        sourceMap: minify,
        target: 'es2018',
        loaders: {
          '.vue': 'ts'
        }
      }),
      minify &&
        minifyPlugin({
          target: 'es2018',
          sourceMap: true
        })
    ],
    treeshake: true,
    external: ['vue', 'element-plus', '@element-plus/icons-vue', 'lodash-es']
  })
  await Promise.all([
    bundle.write({
      format: 'umd',
      file: resolve(
        efePlusOutput,
        'dist',
        `index.full${minify ? '.min' : ''}.js`
      ),
      exports: 'named',
      name: 'EfePlus',
      globals: {
        vue: 'Vue',
        'element-plus': 'ElementPlus',
        '@element-plus/icons-vue': 'ElementPlusIconsVue',
        'lodash-es': '_'
      },
      sourcemap: minify
    }),
    bundle.write({
      format: 'esm',
      file: resolve(
        efePlusOutput,
        'dist',
        `index.full${minify ? '.min' : ''}.mjs`
      ),
      sourcemap: minify
    })
  ])
}

export const buildFull = async () => {
  await buildBundle(false)
}

export const bundleFullMinified = async () => {
  await buildBundle(true)
}
