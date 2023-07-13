import { ExtractPropTypes, PropType, SlotsType } from 'vue'
import { CheckboxGroupValueType } from 'element-plus'

export interface CheckboxDropdownOption {
  label?: string | number
  value?: string | number | boolean | object
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

export type CheckboxSlots = SlotsType<{
  'opt-temp'?: { option: CheckboxDropdownOption; optionIndex: number }
}>
