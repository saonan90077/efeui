import type { ExtractPropTypes, PropType } from 'vue'

export const inputRangeProps = {
  modelValue: {
    type: Array as PropType<(string | number)[]>,
    default: () => [],
    required: true,
  },
  placeholders: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  clearable: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  limit: {
    type: Number,
    default: 2,
  },
  decimal: {
    type: Number,
    default: 2,
  },
  valueType: {
    type: String as PropType<'text' | 'int' | 'float'>,
    default: 'text',
  },
}

export type InputRangeProps = ExtractPropTypes<typeof inputRangeProps>
