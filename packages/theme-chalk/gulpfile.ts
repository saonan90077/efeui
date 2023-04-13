import { resolve } from 'path'
import { dest, parallel, series, src } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'

const distFolder = resolve(__dirname, 'dist')
const distBundle = resolve(__dirname, '../../dist/efe-plus/theme-chalk')

function buildThemeChalk() {
  const sass = gulpSass(dartSass)
  const noPrefixFile = /(index)/
  return src(resolve(__dirname, 'src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS())
    .pipe(
      rename((path) => {
        if (!noPrefixFile.test(path.basename)) {
          path.basename = `efe-${path.basename}`
        }
      })
    )
    .pipe(dest(distFolder))
}

export function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle))
}

export function copyThemeChalkSource() {
  return src(resolve(__dirname, 'src/**')).pipe(
    dest(resolve(distBundle, 'src'))
  )
}

export default parallel(
  copyThemeChalkSource,
  series(buildThemeChalk, copyThemeChalkBundle)
)
