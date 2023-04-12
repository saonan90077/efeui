import type { App } from 'vue'
import fullComponents from './full-components'
export * from '@efe-plus/components'
export * from '@efe-plus/utils'

const install = (app: App) => {
  fullComponents.forEach((comp) => app.use(comp))
}

const installer = {
  install
}

export default installer
