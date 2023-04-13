import { isBoolean, isNumber, isString } from 'lodash-es'
import type { ExtractPropTypes, PropType } from 'vue'
import Radio from './radio.vue'

export type RadioValueType = string | number | boolean

export interface RadioOption {
  label?: string | number
  value?: string | number | boolean
  disabled?: boolean
  [propName: string]: any
}

export const radioProps = {
  modelValue: {
    type: [String, Number, Boolean] as PropType<RadioValueType>,
    default: ''
  },
  options: {
    type: Array as PropType<RadioOption[]>
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

export const radioEmits = {
  'update:model-value': (value: RadioValueType) =>
    isString(value) || isNumber(value) || isBoolean(value)
}

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type CheckboxEmits = typeof radioEmits
export type RadioInstance = InstanceType<typeof Radio>
