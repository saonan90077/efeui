import type { App } from 'vue'
import {
  EfeSelect,
  EfeCheckbox,
  EfeRadio,
  EfeInputRange
} from '@efe-plus/components'
export * from '@efe-plus/utils'

const components = [EfeSelect, EfeCheckbox, EfeRadio, EfeInputRange]

const install = (app: App) => {
  components.forEach((comp) => app.use(comp))
}

const installer = {
  install
}

export { installer as default, EfeSelect, EfeCheckbox, EfeRadio, EfeInputRange }
