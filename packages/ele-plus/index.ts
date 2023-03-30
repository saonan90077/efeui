import type { App } from 'vue'
import components from './components'
export * from '@ele-plus/components'
export * from '@ele-plus/utils'

export const install = (app: App) => {
  components.forEach((comp) => app.use(comp))
}

const installer = {
  install
}

export default installer
