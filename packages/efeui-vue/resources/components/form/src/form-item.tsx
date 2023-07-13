import { inject, defineComponent, SlotsType } from 'vue'
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
import { formInject, formItemProps } from './form-types'
import { inputDirective } from '../../../directives'

const FormItem = defineComponent({
  name: 'form-item',
  directives: {
    input: inputDirective,
  },
  slots: Object as SlotsType<any>,
  props: formItemProps,
  setup(props, { attrs, slots }) {
    const { model } = inject(formInject, {})

    return () => {
      console.log('render: ', 'form-item')
      const { type, label, field, extraProps = {}, inputProps = {} } = props
      const { colConf, extra, tooltip, ...restFormItemProps } = extraProps
      Reflect.deleteProperty(restFormItemProps, 'rules')
      const { labelKey, valueKey, options, mode, decimal, ...restInputProps } =
        inputProps

      const renderFormItemLabel = () => (
        <>
          <span>{slots[`${field}-label`]?.() ?? label}</span>
          {tooltip && (
            <ElTooltip
              v-slots={{
                content: slots[`${field}-tootip`] || (() => tooltip),
              }}>
              <ElIcon>
                <QuestionFilled />
              </ElIcon>
            </ElTooltip>
          )}
          {attrs.labelSuffix && <span>{attrs.labelSuffix}</span>}
        </>
      )

      return (
        <ElCol {...colConf}>
          {type === 'slot' ? (
            slots[field]?.()
          ) : (
            <ElFormItem
              v-slots={
                label && {
                  label: renderFormItemLabel,
                }
              }
              prop={field}
              {...restFormItemProps}>
              {type === 'show' && model.value[field]}
              {type === 'inputRange' && (
                <EfeInputRange
                  v-model={model.value[field]}
                  {...restInputProps}
                />
              )}
              {['input', 'int', 'float'].includes(type) && (
                <ElInput
                  v-model={model.value[field]}
                  v-input={[decimal, type]}
                  {...restInputProps}
                />
              )}
              {type === 'select' && (
                <EfeSelect
                  v-model={model.value[field]}
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
                  v-model={model.value[field]}
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
                  v-model={model.value[field]}
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
                <ElSwitch v-model={model.value[field]} {...restInputProps} />
              )}
              {type === 'date' && (
                <ElDatePicker
                  v-model={model.value[field]}
                  valueFormat="YYYY-MM-DD"
                  {...restInputProps}
                />
              )}
              {type === 'time' && (
                <ElTimePicker
                  v-model={model.value[field]}
                  {...restInputProps}
                />
              )}
              {type === 'timeSelect' && (
                <ElTimeSelect
                  v-model={model.value[field]}
                  {...restInputProps}
                />
              )}
              {type === 'cascader' && (
                <ElCascader v-model={model.value[field]} {...restInputProps} />
              )}
              {type === 'treeSelect' && (
                <ElTreeSelect
                  v-model={model.value[field]}
                  {...restInputProps}
                />
              )}
              {extra && (
                <div class="form-item__extra">
                  {slots[`${field}-extra`]?.() ?? extra}
                </div>
              )}
            </ElFormItem>
          )}
        </ElCol>
      )
    }
  },
})

export default FormItem
