import type { ExtractPropTypes, PropType } from 'vue'
import type Select from './select.vue'

export interface SelectOption {
  label?: string | number
  value?: string | number | boolean
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
