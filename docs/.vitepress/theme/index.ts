import DefaultTheme from 'vitepress/theme'
import 'element-plus/dist/index.css'
import DemoBlock from '@ruabick/vitepress-demo-block'
import '@ruabick/vitepress-demo-block/dist/style.css'
import { EfeCheckbox, EfeSelect, EfeRadio } from '@efe-plus/components'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo', DemoBlock)
    app.component(EfeCheckbox.name, EfeCheckbox)
    app.component(EfeSelect.name, EfeSelect)
    app.component(EfeRadio.name, EfeRadio)
  }
}
