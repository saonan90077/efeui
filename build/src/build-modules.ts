import { efePlusOutput, efePlusRoot, pkgRoot } from './path'
import glob from 'fast-glob'
import vue from '@vitejs/plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import { rollup } from 'rollup'
import { resolve } from 'path'

export const buildModules = async () => {
  const inputPaths = await glob('**/*.{ts,vue}', {
    cwd: pkgRoot,
    onlyFiles: true,
    absolute: true
  })
  const bundle = await rollup({
    input: inputPaths,
    plugins: [
      nodeResolve({
        extensions: ['.ts', '.vue']
      }),
      commonjs(),
      vue(),
      esbuild({
        sourceMap: true,
        target: 'es2018',
        loaders: {
          '.vue': 'ts'
        }
      })
    ],
    treeshake: false,
    external: ['vue', 'element-plus', '@element-plus/icons-vue', 'lodash-es']
  })
  await Promise.all([
    bundle.write({
      format: 'cjs',
      dir: resolve(efePlusOutput, 'lib'),
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: efePlusRoot,
      sourcemap: true,
      entryFileNames: '[name].js'
    }),
    bundle.write({
      format: 'esm',
      dir: resolve(efePlusOutput, 'es'),
      preserveModules: true,
      preserveModulesRoot: efePlusRoot,
      sourcemap: true,
      entryFileNames: '[name].mjs'
    })
  ])
}
