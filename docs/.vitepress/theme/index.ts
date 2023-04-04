import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import { EfeCheckbox } from '@efe-plus/components'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component('demo-preview', AntDesignContainer)
    app.component(EfeCheckbox.name, EfeCheckbox)
  }
}
