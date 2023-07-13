import { App } from 'vue'
import component from './component'

export * from './components'
export * from './utils'

const installer = {
  install: (app: App) => {
    component.forEach((comp) => app.use(comp))
  },
}

export default installer
