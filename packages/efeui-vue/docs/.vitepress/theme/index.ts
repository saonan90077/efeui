import DefaultTheme from 'vitepress/theme'

import { ElementPlusContainer } from '@vitepress-demo-preview/component'

import installer from '../../../resources'

import 'element-plus/dist/index.css'
import '@vitepress-demo-preview/component/dist/style.css'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('demo-preview', ElementPlusContainer)
    ctx.app.use(installer)
  },
}
