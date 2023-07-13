import { defineComponent, shallowRef } from 'vue'
import { ElButton } from 'element-plus'
import { EfeDialog } from '../../dialog'
import { EfeForm, FormExpose } from '../../form'
import { formDialogProps } from './form-dialog-types'
import { useToggle, useVModel } from '@vueuse/core'

const FormDialog = defineComponent({
  name: 'efe-form-dialog',
  props: formDialogProps,
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const $formRef = shallowRef<FormExpose>()

    const [okButtonLoading, setOkButtonLoading] = useToggle(false)

    const handleClose = () => {
      modelValue.value = false
      setOkButtonLoading(false)
      $formRef.value?.$formRef.resetFields()
    }

    const handleSubmit = async () => {
      try {
        await $formRef.value?.$formRef.validate()
        await props.onSubmit?.(setOkButtonLoading, handleClose)
      } catch (error) {
        console.log('error: ', error)
      }
    }

    const titleAppendSlotKey = 'title-append'
    const {
      header,
      footer,
      [titleAppendSlotKey]: titleAppend,
      ...restFormSlots
    } = slots

    return () => {
      const {
        labelWidth,
        labelSuffix,
        labelPosition,
        disabled,
        options,
        showCancel,
        showOk,
        cancelText,
        okText,
      } = props

      const renderFooter = () => {
        return (
          <>
            {showCancel !== false && (
              <ElButton onClick={handleClose}>{cancelText}</ElButton>
            )}
            {showOk !== false && (
              <ElButton
                loading={okButtonLoading.value}
                disabled={okButtonLoading.value}
                type="primary"
                onClick={handleSubmit}>
                {okText}
              </ElButton>
            )}
          </>
        )
      }

      return (
        <EfeDialog
          v-model={modelValue.value}
          v-slots={{
            header,
            'title-append': titleAppend,
            footer: footer || (showCancel || showOk ? renderFooter : null),
          }}
          {...{
            closeOnClickModal: false,
            closeOnPressEscape: false,
            onClosed: handleClose,
            ...attrs,
          }}>
          <EfeForm
            ref={$formRef}
            v-slots={{
              ...restFormSlots,
              // ! [添加slotStable选项配置优化子组件的更新](https://github.com/vuejs/babel-plugin-jsx/issues/525)
              $stable: true,
            }}
            model={props.model}
            options={options}
            {...{
              labelWidth,
              labelSuffix,
              labelPosition,
              disabled,
            }}
          />
        </EfeDialog>
      )
    }
  },
})

export default FormDialog
