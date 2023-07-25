import type { ExtractPropTypes, PropType } from 'vue'

export const ellipsisProps = {
  content: {
    type: String,
    default: '',
    required: true,
  },
  direction: {
    type: String as PropType<'start' | 'end' | 'middle'>,
    default: 'end',
  },
  rows: {
    type: Number,
    default: 1,
  },
  defaultExpanded: {
    type: Boolean,
  },
}

export type EllipsisProps = ExtractPropTypes<typeof ellipsisProps>
export interface EllipsisExpose {
  exceeded: boolean
  setExpanded: (value?: boolean) => boolean
}
