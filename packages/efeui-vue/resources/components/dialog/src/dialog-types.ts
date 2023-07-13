import { ExtractPropTypes, SlotsType } from 'vue'

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

export type DialogSlots = SlotsType<{
  header?: any
  'title-append'?: any
  default?: any
  footer?: any
}>
