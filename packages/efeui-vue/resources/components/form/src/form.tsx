import {
  defineComponent,
  provide,
  shallowRef,
  toRef,
  type SlotsType,
} from 'vue'

import { ElForm, ElRow } from 'element-plus'

import FormItem from './form-item'

import { pickSlots } from '../../../utils'

import {
  formProps,
  formContextKey,
  type FormItemProps,
  type FormOption,
} from './form-types'

import './form.scss'

const Form = defineComponent({
  name: 'efe-form',
  inheritAttrs: false,
  props: formProps,
  slots: Object as SlotsType<{
    [key: string]: any
  }>,
  setup(props, { attrs, slots, expose }) {
    const model = toRef(props, 'model')

    provide(formContextKey, {
      model,
    })

    const $formRef = shallowRef()

    expose({
      $formRef,
    })

    const renderTitle = (row: FormOption) => {
      if (!row.title) {
        return null
      }
      return (
        <div class="form-group-head">
          <div class="form-group-head__title">
            {slots[row.title] ? slots[row.title]() : row.title}
          </div>
          {slots[`${row.title}-append`] ? (
            <div class="form-group-head__append">
              {slots[`${row.title}-append`]()}
            </div>
          ) : null}
        </div>
      )
    }

    const renderFormItem = (col: FormItemProps) => {
      return (
        <FormItem
          key={col.field}
          v-slots={pickSlots(slots, [
            `${col.field}`,
            `${col.field}-label`,
            `${col.field}-tootip`,
            `${col.field}-extra`,
          ])}
          {...{
            labelSuffix: attrs.labelSuffix,
            ...col,
          }}
        />
      )
    }

    const renderChildren = () => {
      return props.options?.map((row) => {
        return (
          <div class="form-group">
            {renderTitle(row)}
            <ElRow class="form-group-body" {...row.rowConf}>
              {row.cols?.map((col) => renderFormItem(col))}
            </ElRow>
          </div>
        )
      })
    }

    const renderForm = () => {
      return (
        <ElForm ref={$formRef} model={model.value} {...attrs}>
          {renderChildren()}
        </ElForm>
      )
    }

    return () => {
      console.log('render: ', 'efe-form')

      return renderForm()
    }
  },
})

export default Form
