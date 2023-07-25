import type { ExtractPropTypes } from 'vue'

export const tagPlusProps = {
  isDot: {
    type: Boolean,
  },
}

export type TagPlusProps = ExtractPropTypes<typeof tagPlusProps>
