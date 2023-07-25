import { defineComponent, type SlotsType } from 'vue'

import { ElDialog, ElScrollbar, vLoading } from 'element-plus'

import { useVModel } from '@vueuse/core'

import { dialogProps } from './dialog-types'

const Dialog = defineComponent({
  name: 'efe-dialog',
  directives: {
    loading: vLoading,
  },
  inheritAttrs: false,
  props: dialogProps,
  slots: Object as SlotsType<{
    header?: any
    'title-append'?: any
    default?: any
    footer?: any
  }>,
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const renderHeader = ({ titleId, titleClass }: any) => {
      if (slots.header) {
        return slots.header({ titleId, titleClass })
      }
      return (
        <>
          {attrs.title ? (
            <span id={titleId} class={titleClass}>
              {attrs.title}
            </span>
          ) : null}
          {slots['title-append']?.()}
        </>
      )
    }

    const renderFooter = () => {
      return slots.footer?.()
    }

    const renderDialog = () => {
      const { loading, fluid, fluidHeight } = props
      return (
        <ElDialog
          v-model={modelValue.value}
          v-slots={{
            header: renderHeader,
            footer: renderFooter,
          }}
          {...attrs}>
          <ElScrollbar
            v-loading={loading}
            element-loading-text="加载中..."
            maxHeight={fluid ? fluidHeight : undefined}>
            {slots.default?.()}
          </ElScrollbar>
        </ElDialog>
      )
    }

    return () => {
      console.log('render: ', 'efe-dialog')

      return renderDialog()
    }
  },
})

export default Dialog
