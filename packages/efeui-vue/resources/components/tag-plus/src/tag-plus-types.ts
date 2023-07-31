import type { ExtractPropTypes } from 'vue'

export const tagPlusProps = {
  enableDot: {
    type: Boolean,
  },
}

export type TagPlusProps = ExtractPropTypes<typeof tagPlusProps>
