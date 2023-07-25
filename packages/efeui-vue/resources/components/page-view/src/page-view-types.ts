import type { ExtractPropTypes } from 'vue'

export const pageViewProps = {
  fluid: {
    type: Boolean,
  },
}

export type PageViewProps = ExtractPropTypes<typeof pageViewProps>
