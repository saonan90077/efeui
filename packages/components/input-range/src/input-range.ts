import type { ExtractPropTypes, PropType } from 'vue'
import InputRange from './input-range.vue'
import { isArray } from 'lodash-es'

export type InputRangeValueType = (string | number)[]

export const inputRangeProps = {
  modelValue: {
    type: Array as PropType<InputRangeValueType>,
    default: () => []
  },
  placeholders: {
    type: Array as PropType<string[]>,
    default: ['请输入', '请输入']
  },
  clearable: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  limit: {
    type: Number,
    default: 2
  }
}

export const inputRangeEmits = {
  'update:model-value': (value: InputRangeValueType) => isArray(value)
}

export type InputRangeProps = ExtractPropTypes<typeof inputRangeProps>
export type InputRangeEmits = typeof inputRangeEmits
export type InputRangeInstance = InstanceType<typeof InputRange>
