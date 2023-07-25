import type { ExtractPropTypes } from 'vue'

export const dialogProps = {
  modelValue: {
    type: Boolean,
  },
  loading: {
    type: Boolean,
  },
  fluid: {
    type: Boolean,
  },
  fluidHeight: {
    type: [String, Number],
    default: 400,
  },
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>
