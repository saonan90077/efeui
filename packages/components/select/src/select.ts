import type { ExtractPropTypes, PropType } from 'vue'
import type Select from './select.vue'
/**
 * 选项配置
 */
export interface SelectOption {
  label?: string | number
  value?: string | number
  disabled?: boolean
  [propName: string]: any
}

export const selectProps = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: ''
  },
  options: {
    type: Array as PropType<SelectOption[]>
  },
  labelKey: {
    type: String,
    default: 'label'
  },
  valueKey: {
    type: String,
    default: 'value'
  }
}
export type SelectProps = ExtractPropTypes<typeof selectProps>

export type SelectInstance = InstanceType<typeof Select>
