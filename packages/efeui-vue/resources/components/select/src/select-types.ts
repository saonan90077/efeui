import { ExtractPropTypes, PropType, SlotsType } from 'vue'

export interface SelectDropdownOption {
  label?: string | number
  value?: string | number | boolean | object
  disabled?: boolean
  [propName: string]: any
}

export const selectProps = {
  modelValue: null,
  options: {
    type: Array as PropType<SelectDropdownOption[]>,
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

export type SelectProps = ExtractPropTypes<typeof selectProps>

export type SelectSlots = SlotsType<{
  'opt-temp': { option: SelectDropdownOption; optionIndex: number }
}>
