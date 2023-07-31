import { inject, defineComponent, type SlotsType } from 'vue'

import {
  ElCascader,
  ElCol,
  ElDatePicker,
  ElFormItem,
  ElInput,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect,
  ElTreeSelect,
  ElIcon,
  ElTooltip,
} from 'element-plus'

import { QuestionFilled } from '@element-plus/icons-vue'

import { EfeCheckbox } from '../../checkbox'

import { EfeRadio } from '../../radio'

import { EfeSelect } from '../../select'

import { EfeInputRange } from '../../input-range'

import { formContextKey, formItemProps } from './form-types'

import { inputDirective } from '../../../directives'

import { omitProps, valueFormat } from '../../../utils'

const FormItem = defineComponent({
  name: 'form-item',
  directives: {
    input: inputDirective,
  },
  inheritAttrs: false,
  props: formItemProps,
  slots: Object as SlotsType<{
    [key: string]: any
  }>,
  setup(props, { attrs, slots }) {
    const formContext = inject(formContextKey, null)

    const renderTooltipContent = () => {
      const { field, extraProps = {} } = props
      const { tooltip } = extraProps
      return slots[`${field}-tootip`] ? slots[`${field}-tootip`]() : tooltip
    }

    const renderLabel = () => {
      const { label, field, extraProps = {} } = props
      const { tooltip } = extraProps
      return (
        <>
          <span>
            {slots[`${field}-label`] ? slots[`${field}-label`]() : label}
          </span>
          {tooltip ? (
            <ElTooltip
              v-slots={{
                content: renderTooltipContent,
              }}>
              <ElIcon>
                <QuestionFilled />
              </ElIcon>
            </ElTooltip>
          ) : null}
          {attrs.labelSuffix ? <span>{attrs.labelSuffix}</span> : null}
        </>
      )
    }

    const renderExtra = () => {
      const { field, extraProps = {} } = props
      const { extra } = extraProps
      if (!extra) {
        return null
      }
      return (
        <div class="form-item__extra">
          {slots[`${field}-extra`] ? slots[`${field}-extra`]() : extra}
        </div>
      )
    }

    const renderFormItem = () => {
      const { type, label, field, extraProps = {}, show } = props
      const {
        colConf,
        rules,
        inputProps = {},
        ...restFormItemProps
      } = extraProps
      const { labelKey, valueKey, options, mode, decimal, ...restInputProps } =
        inputProps

      const visible = typeof show === 'function' ? show?.() : show

      if (!formContext?.model.value || visible === false) {
        return null
      }
      return (
        <ElCol {...(attrs as any).colConf} {...colConf}>
          {type === 'slot' ? (
            slots[field]?.()
          ) : (
            <ElFormItem
              prop={field}
              rules={typeof rules === 'function' ? rules?.() : rules}
              v-slots={{
                label: label ? renderLabel : undefined,
              }}
              {...omitProps(restFormItemProps, ['extra', 'tooltip'])}>
              {type === 'show' &&
                valueFormat(formContext.model.value[field], {
                  placeholder: '-',
                })}
              {type === 'inputRange' && (
                <EfeInputRange
                  v-model={formContext.model.value[field]}
                  decimal={decimal}
                  {...restInputProps}
                />
              )}
              {['input', 'int', 'float'].includes(type) && (
                <ElInput
                  v-model={formContext.model.value[field]}
                  v-input={[decimal, type]}
                  {...restInputProps}
                />
              )}
              {type === 'select' && (
                <EfeSelect
                  v-model={formContext.model.value[field]}
                  {...{
                    clearable: true,
                    filterable: true,
                    labelKey,
                    valueKey,
                    options,
                    ...restInputProps,
                  }}
                />
              )}
              {type === 'checkbox' && (
                <EfeCheckbox
                  v-model={formContext.model.value[field]}
                  {...{
                    labelKey,
                    valueKey,
                    options,
                    mode,
                    ...restInputProps,
                  }}
                />
              )}
              {type === 'radio' && (
                <EfeRadio
                  v-model={formContext.model.value[field]}
                  {...{
                    labelKey,
                    valueKey,
                    options,
                    mode,
                    ...restInputProps,
                  }}
                />
              )}
              {type === 'switch' && (
                <ElSwitch
                  v-model={formContext.model.value[field]}
                  {...restInputProps}
                />
              )}
              {type === 'date' && (
                <ElDatePicker
                  v-model={formContext.model.value[field]}
                  valueFormat="YYYY-MM-DD"
                  {...restInputProps}
                />
              )}
              {type === 'time' && (
                <ElTimePicker
                  v-model={formContext.model.value[field]}
                  {...restInputProps}
                />
              )}
              {type === 'timeSelect' && (
                <ElTimeSelect
                  v-model={formContext.model.value[field]}
                  {...restInputProps}
                />
              )}
              {type === 'cascader' && (
                <ElCascader
                  v-model={formContext.model.value[field]}
                  {...restInputProps}
                />
              )}
              {type === 'treeSelect' && (
                <ElTreeSelect
                  v-model={formContext.model.value[field]}
                  {...restInputProps}
                />
              )}
              {renderExtra()}
            </ElFormItem>
          )}
        </ElCol>
      )
    }

    return () => {
      console.log('render: ', 'form-item')

      return renderFormItem()
    }
  },
})

export default FormItem
