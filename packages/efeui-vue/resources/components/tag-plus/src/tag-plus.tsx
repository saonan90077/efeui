import { defineComponent, type SlotsType } from 'vue'

import { ElTag } from 'element-plus'

import { tagPlusProps } from './tag-plus-types'

import './tag-plus.scss'

const TagPlus = defineComponent({
  name: 'efe-tag-plus',
  inheritAttrs: false,
  props: tagPlusProps,
  slots: Object as SlotsType<{
    default?: any
  }>,
  setup(props, { attrs, slots }) {
    const renderDot = () => {
      const { enableDot } = props
      if (!enableDot) {
        return null
      }
      return <span class="efe-tag-plus__dot"></span>
    }
    return () => {
      console.log('render: ', 'efe-tag-plus')

      return (
        <ElTag
          class={['efe-tag-plus', props.enableDot && 'efe-tag-plus--dot']}
          {...attrs}>
          {renderDot()}
          {slots.default?.()}
        </ElTag>
      )
    }
  },
})

export default TagPlus
