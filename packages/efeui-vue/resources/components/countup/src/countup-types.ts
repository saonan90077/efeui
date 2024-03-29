import type { ExtractPropTypes, PropType } from 'vue'
import type { CountUpOptions } from 'countup.js'

export const countupProps = {
  endVal: {
    type: Number,
    default: 0,
    required: true,
  },
  options: {
    type: Object as PropType<CountUpOptions>,
  },
}

export type CountupProps = ExtractPropTypes<typeof countupProps>
