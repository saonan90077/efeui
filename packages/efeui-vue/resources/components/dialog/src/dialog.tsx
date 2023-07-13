import { defineComponent } from 'vue'
import { ElDialog, ElScrollbar, vLoading } from 'element-plus'
import { useVModel } from '@vueuse/core'
import { dialogProps, DialogSlots } from './dialog-types'

const Dialog = defineComponent({
  name: 'efe-dialog',
  directives: {
    loading: vLoading,
  },
  props: dialogProps,
  slots: Object as DialogSlots,
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const renderHeader = ({ titleId, titleClass }: any) => {
      return (
        <>
          {attrs.title && (
            <span id={titleId} class={titleClass}>
              {attrs.title}
            </span>
          )}
          {slots['title-append']?.()}
        </>
      )
    }

    return () => {
      console.log('render: ', 'efe-dialog')
      const { loading, fluid, fluidHeight } = props

      return (
        <ElDialog
          v-model={modelValue.value}
          v-slots={{
            header: slots.header || renderHeader,
            footer: slots.footer,
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
  },
})

export default Dialog
