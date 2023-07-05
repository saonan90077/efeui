import type { ExtractPropTypes, PropType } from 'vue'
import type { CheckboxGroupValueType } from 'element-plus'

export interface CheckboxDropdownOption {
  label?: string
  value?: string | number
  disabled?: boolean
  [propName: string]: any
}

export const checkboxProps = {
  modelValue: {
    type: Array as PropType<CheckboxGroupValueType>,
  },
  mode: {
    type: String as PropType<'default' | 'button'>,
    default: 'default',
  },
  options: {
    type: Array as PropType<CheckboxDropdownOption[]>,
  },
  labelKey: {
    type: String,
    default: 'label',
  },
  valueKey: {
    type: String,
    default: 'value',
  },
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
