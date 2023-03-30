import { isArray } from 'lodash-es'
import type { ExtractPropTypes, PropType } from 'vue'
import type Checkbox from './checkbox.vue'

export type CheckboxValueType = (string | number)[]

export interface CheckboxOption {
  label?: string | number
  value?: string | number
  disabled?: boolean
  [propName: string]: any
}

export const checkboxProps = {
  modelValue: {
    type: Array as PropType<CheckboxValueType>,
    default: () => []
  },
  options: {
    type: Array as PropType<CheckboxOption[]>
  },
  labelKey: {
    type: String,
    default: 'label'
  },
  valueKey: {
    type: String,
    default: 'value'
  },
  mode: {
    type: String as PropType<'default' | 'button'>,
    default: 'default'
  }
}
export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>

export const checkboxEmits = {
  'update:model-value': (value: CheckboxValueType) => isArray(value)
}
export type CheckboxEmits = typeof checkboxEmits

export type CheckboxInstance = InstanceType<typeof Checkbox>
