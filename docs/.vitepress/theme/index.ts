import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import DemoBlock from '@ruabick/vitepress-demo-block'
import '@ruabick/vitepress-demo-block/dist/style.css'
import { EfeCheckbox, EfeSelect } from '@efe-plus/components'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component('demo', DemoBlock)
    app.component(EfeCheckbox.name, EfeCheckbox)
    app.component(EfeSelect.name, EfeSelect)
  }
}
