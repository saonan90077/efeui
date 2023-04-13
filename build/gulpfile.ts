import { parallel, series, src, dest } from 'gulp'
import {
  buildFull,
  bundleFullMinified,
  buildModules,
  buildTypes,
  copyTypes,
  efePlusRoot,
  efePlusOutput,
  pkgRoot
} from './src'
import { resolve } from 'path'

const copyfullStyle = () => {
  return src(resolve(pkgRoot, 'theme-chalk/dist/index.css')).pipe(
    dest(resolve(efePlusOutput, 'dist'))
  )
}
const copyPkgJson = () => {
  return src(resolve(efePlusRoot, 'package.json')).pipe(dest(efePlusOutput))
}

export default series(
  parallel(buildFull, bundleFullMinified, buildModules, buildTypes),
  parallel(copyTypes, copyfullStyle, copyPkgJson)
)
