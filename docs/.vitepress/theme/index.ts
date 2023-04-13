import DefaultTheme from 'vitepress/theme'
import 'element-plus/dist/index.css'
import DemoBlock from '@ruabick/vitepress-demo-block'
import '@ruabick/vitepress-demo-block/dist/style.css'
import * as efeComponents from '@efe-plus/components'
import '@efe-plus/theme-chalk/src/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo', DemoBlock)
    Object.entries(efeComponents).forEach(([name, comp]) => {
      app.component(name, comp)
    })
  }
}
