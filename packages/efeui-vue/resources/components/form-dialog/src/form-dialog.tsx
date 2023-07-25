import { defineComponent, shallowRef, type SlotsType } from 'vue'

import { useToggle, useVModel } from '@vueuse/core'

import { ElButton } from 'element-plus'

import { EfeDialog } from '../../dialog'

import { EfeForm, FormExpose } from '../../form'

import { formDialogProps } from './form-dialog-types'
import { pickSlots } from '../../../utils'

const FormDialog = defineComponent({
  name: 'efe-form-dialog',
  inheritAttrs: false,
  props: formDialogProps,
  slots: Object as SlotsType<{
    header?: any
    'title-append'?: any
    footer?: any
    [key: string]: any
  }>,
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

    const renderFooter = () => {
      const { showCancel, showOk, cancelText, okText } = props

      if (slots.footer) {
        return slots.footer()
      }
      return (
        <>
          {showCancel !== false ? (
            <ElButton onClick={handleClose}>{cancelText}</ElButton>
          ) : null}
          {showOk !== false ? (
            <ElButton
              loading={okButtonLoading.value}
              disabled={okButtonLoading.value}
              type="primary"
              onClick={handleSubmit}>
              {okText}
            </ElButton>
          ) : null}
        </>
      )
    }

    const renderForm = () => {
      const {
        model,
        labelWidth,
        labelSuffix,
        labelPosition,
        disabled,
        options,
      } = props

      const slotsKey = (options || []).reduce((resul: string[], cur) => {
        const keys = (cur.cols || []).reduce((acc: string[], item) => {
          const field = item.field
          return acc.concat([
            field,
            `${field}-label`,
            `${field}-tootip`,
            `${field}-extra`,
          ])
        }, [])
        return [...resul, ...keys]
      }, [])

      return (
        <EfeForm
          ref={$formRef}
          v-slots={pickSlots(slots, slotsKey)}
          model={model}
          options={options}
          {...{
            labelWidth,
            labelSuffix,
            labelPosition,
            disabled,
          }}
        />
      )
    }

    return () => {
      return (
        <EfeDialog
          v-model={modelValue.value}
          v-slots={{
            header: slots.header,
            'title-append': slots['title-append'],
            footer: renderFooter,
          }}
          {...{
            closeOnClickModal: false,
            closeOnPressEscape: false,
            onClosed: handleClose,
            ...attrs,
          }}>
          {renderForm()}
        </EfeDialog>
      )
    }
  },
})

export default FormDialog
