import { resolve } from 'path'
/** 项目根路径 / */
export const projectRoot = resolve(__dirname, '../../')
/** 构建路径  /dist */
export const buildRoot = resolve(projectRoot, 'dist')
/** 构建出口 /dist/ele-plus  */
export const elePlusOutput = resolve(buildRoot, 'ele-plus')
/** 构建根路径 /packages */
export const pkgRoot = resolve(projectRoot, 'packages')
/** 构建入口 /packages/gen-plus */
export const elePlusRoot = resolve(pkgRoot, 'ele-plus')
