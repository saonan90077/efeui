import { SlotsType, defineComponent } from 'vue'
import { ElTag } from 'element-plus'
import { tagPlusProps } from './tag-plus-types'

import './tag-plus.scss'

const TagPlus = defineComponent({
  name: 'efe-tag-plus',
  props: tagPlusProps,
  slots: Object as SlotsType<{
    default: any
  }>,
  setup(props, { attrs, slots }) {
    return () => {
      console.log('render: ', 'efe-tag-plus')
      const isDot = props.isDot

      return (
        <ElTag
          class={['efe-tag-plus', isDot && 'efe-tag-plus--dot']}
          {...attrs}>
          {isDot && <span class="efe-tag-plus__dot"></span>}
          {slots.default?.()}
        </ElTag>
      )
    }
  },
})

export default TagPlus
