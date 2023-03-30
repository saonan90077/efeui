import { parallel, series } from 'gulp'
import { buildModules, buildTypes, copyTypes } from './src'

export default series(parallel(buildModules, buildTypes), copyTypes)
