import { resolve } from 'path'
/** 项目根路径 / */
export const projectRoot = resolve(__dirname, '../../')
/** 构建路径  /dist */
export const buildRoot = resolve(projectRoot, 'dist')
/** 构建出口 /dist/efe-plus  */
export const efePlusOutput = resolve(buildRoot, 'efe-plus')
/** 构建根路径 /packages */
export const pkgRoot = resolve(projectRoot, 'packages')
/** 构建入口 /packages/efe-plus */
export const efePlusRoot = resolve(pkgRoot, 'efe-plus')
