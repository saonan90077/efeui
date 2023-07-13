import { SlotsType, computed, defineComponent, provide, shallowRef } from 'vue'
import { ElForm, ElRow, FormRules, FormInstance } from 'element-plus'
import { formProps, formInject, FormOption } from './form-types'
import FormItem from './form-item'

import './form.scss'

const Form = defineComponent({
  name: 'efe-form',
  props: formProps,
  slots: Object as SlotsType<any>,
  setup(props, { attrs, slots, expose }) {
    provide(formInject, {
      model: computed(() => props.model),
    })

    const $formRef = shallowRef<FormInstance>()

    expose({
      $formRef,
    })

    const setFormRules = (options?: FormOption[]) => {
      return options?.reduce((resul: FormRules, row) => {
        row.cols?.forEach((col) => {
          if (col.extraProps?.rules?.length) {
            resul[col.field] = col.extraProps.rules
          }
        })
        return resul
      }, {})
    }

    const renderFormChildren = (options?: FormOption[]) => {
      return options?.map((row, rowIndex) => {
        return (
          <div class="form-group" key={rowIndex}>
            {row.title && (
              <div class="form-group-head">
                <div class="form-group-head__title">
                  {slots[row.title]?.() ?? row.title}
                </div>
                {slots[`${row.title}-append`] && (
                  <div class="form-group-head__append">
                    {slots[`${row.title}-append`]?.()}
                  </div>
                )}
              </div>
            )}
            <ElRow class="form-group-body" {...row.rowConf}>
              {row.cols?.map((col) => {
                return (
                  <FormItem
                    key={col.field}
                    v-slots={{
                      [col.field]: slots[col.field],
                      [`${col.field}-label`]: slots[`${col.field}-label`],
                      [`${col.field}-tootip`]: slots[`${col.field}-tootip`],
                      [`${col.field}-extra`]: slots[`${col.field}-extra`],
                    }}
                    {...{
                      labelSuffix: attrs.labelSuffix,
                      ...col,
                    }}
                  />
                )
              })}
            </ElRow>
          </div>
        )
      })
    }

    return () => {
      console.log('render: ', 'efe-form')
      const { model, options } = props

      const finalOptions = options?.map((row) => {
        return {
          ...row,
          cols: row.cols?.filter((col) => col.show !== false),
        }
      })
      const formRules = setFormRules(finalOptions)
      const children = renderFormChildren(finalOptions)

      return (
        <ElForm
          ref={$formRef}
          rules={formRules}
          validateOnRuleChange={false}
          model={model}
          {...attrs}>
          {children}
        </ElForm>
      )
    }
  },
})

export default Form
