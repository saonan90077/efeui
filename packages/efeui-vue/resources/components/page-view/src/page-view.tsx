import { defineComponent, type SlotsType } from 'vue'

import { ElScrollbar } from 'element-plus'

import { pageViewProps } from './page-view-types'

import './page-view.scss'

const PageView = defineComponent({
  name: 'efe-page-view',
  props: pageViewProps,
  slots: Object as SlotsType<{
    default?: any
    footer?: any
    popup?: any
  }>,
  setup(props, { slots }) {
    const renderFooter = () => {
      if (!slots.footer) {
        return null
      }
      return <div class="efe-page-view__footer">{slots.footer?.()}</div>
    }

    return () => {
      return (
        <div class={['efe-page-view', props.fluid && 'is-fluid']}>
          <ElScrollbar wrapClass="efe-page-view__content">
            {slots.default?.()}
          </ElScrollbar>
          {renderFooter()}
          {slots.popup?.()}
        </div>
      )
    }
  },
})

export default PageView
