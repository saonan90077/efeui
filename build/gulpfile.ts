import { parallel, series } from 'gulp'
import {
  buildFull,
  bundleFullMinified,
  buildModules,
  buildTypes,
  copyTypes
} from './src'

export default series(
  parallel(buildFull, bundleFullMinified, buildModules, buildTypes),
  copyTypes
)
