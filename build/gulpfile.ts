import { parallel, series, src, dest } from 'gulp'
import {
  buildFull,
  bundleFullMinified,
  buildModules,
  buildTypes,
  copyTypes,
  efePlusRoot,
  efePlusOutput
} from './src'
import { resolve } from 'path'

const copyPkgJson = () => {
  return src(resolve(efePlusRoot, 'package.json')).pipe(dest(efePlusOutput))
}

export default series(
  parallel(buildFull, bundleFullMinified, buildModules, buildTypes),
  parallel(copyTypes, copyPkgJson)
)
