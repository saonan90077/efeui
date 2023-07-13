import { ExtractPropTypes, PropType, SlotsType } from 'vue'

export interface RadioDropdownOption {
  label?: string | number
  value?: string | number | boolean
  disabled?: boolean
  [propName: string]: any
}

export const radioProps = {
  modelValue: {
    type: [String, Number, Boolean],
  },
  mode: {
    type: String as PropType<'default' | 'button'>,
    default: 'default',
  },
  options: {
    type: Array as PropType<RadioDropdownOption[]>,
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

export type RadioProps = ExtractPropTypes<typeof radioProps>

export type RadioSlots = SlotsType<{
  'opt-temp': { option: RadioDropdownOption; optionIndex: number }
}>
