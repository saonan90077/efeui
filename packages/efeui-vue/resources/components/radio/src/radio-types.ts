import type { ExtractPropTypes, PropType } from 'vue'

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
    type: [Array, Function] as PropType<
      RadioDropdownOption[] | (() => RadioDropdownOption[])
    >,
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
