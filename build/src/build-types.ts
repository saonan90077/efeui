import { src, dest } from 'gulp'
import { dirname, relative, resolve } from 'path'
import { Project, SourceFile } from 'ts-morph'
import { elePlusOutput, elePlusRoot, pkgRoot, projectRoot } from './path'
import * as vueCompiler from 'vue/compiler-sfc'
import glob from 'fast-glob'
import { mkdir, readFile, writeFile } from 'fs/promises'
import chalk from 'chalk'

const pathRewriter = (id: any) => {
  id = id.replaceAll('@ele-plus/', 'ele-plus/es/')
  return id
}

function typeCheck(project: Project) {
  const diagnostics = project.getPreEmitDiagnostics()
  if (diagnostics.length > 0) {
    console.log(
      chalk.bgRed(project.formatDiagnosticsWithColorAndContext(diagnostics))
    )
    throw new Error('Failed to generate dts.')
  }
}

async function addSourceFiles(project: Project) {
  project.addSourceFileAtPath(resolve(projectRoot, 'typings/shims-vue.d.ts'))
  project.addSourceFileAtPath(resolve(projectRoot, 'typings/auto-imports.d.ts'))
  project.addSourceFileAtPath(resolve(projectRoot, 'typings/components.d.ts'))
  const globSourceFile = '**/*.{js?(x),ts?(x),vue}'
  const filePaths = await glob([globSourceFile, '!ele-plus/**/*'], {
    cwd: pkgRoot,
    absolute: true,
    onlyFiles: true
  })
  const elePlusPaths = await glob(globSourceFile, {
    cwd: elePlusRoot,
    onlyFiles: true
  })
  const sourceFiles: SourceFile[] = []
  await Promise.all([
    ...filePaths.map(async (file) => {
      if (file.endsWith('.vue')) {
        const content = await readFile(file, 'utf-8')
        const sfc = vueCompiler.parse(content)
        const compiled = vueCompiler.compileScript(sfc.descriptor, {
          id: 'xxx'
        })
        const sourceFile = project.createSourceFile(
          `${relative(process.cwd(), file)}.ts`,
          compiled.content
        )
        sourceFiles.push(sourceFile)
      } else {
        const sourceFile = project.addSourceFileAtPath(file)
        sourceFiles.push(sourceFile)
      }
    }),
    ...elePlusPaths.map(async (file) => {
      const content = await readFile(resolve(elePlusRoot, file), 'utf-8')
      sourceFiles.push(
        project.createSourceFile(resolve(pkgRoot, file), content)
      )
    })
  ])
  return sourceFiles
}
const buildTypes = async () => {
  const project = new Project({
    compilerOptions: {
      noEmit: false,
      emitDeclarationOnly: true,
      outDir: resolve(elePlusOutput, 'types'),
      composite: true,
      preserveSymlinks: true
    },
    tsConfigFilePath: resolve(projectRoot, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true
  })
  const sourceFiles = await addSourceFiles(project)
  console.log(chalk.green('Added source files'))
  typeCheck(project)
  console.log(chalk.green('Type check passed!'))
  await project.emit({
    emitOnlyDtsFiles: true
  })
  const tasks = sourceFiles.map(async (sourceFile) => {
    const relativePath = relative(pkgRoot, sourceFile.getFilePath())
    const emitOutput = sourceFile.getEmitOutput()
    const emitFiles = emitOutput.getOutputFiles()
    if (emitFiles.length === 0) {
      console.log(chalk.bgRed(`Emit no file: ${relativePath}`))
      throw new Error(`Emit no file: ${relativePath}`)
    }

    const subTasks = emitFiles.map(async (outputFile) => {
      const filepath = outputFile.getFilePath()
      await mkdir(dirname(filepath), {
        recursive: true
      })
      await writeFile(filepath, pathRewriter(outputFile.getText()), 'utf8')
      console.log(chalk.blue(`Definition for file: ${relativePath} generated`))
    })
    await Promise.all(subTasks)
  })
  await Promise.all(tasks)
}

const copyTypes = () => {
  return src(resolve(elePlusOutput, 'types', 'packages/**/*')).pipe(
    dest(resolve(elePlusOutput, 'es'))
  )
}

export { buildTypes, copyTypes }
