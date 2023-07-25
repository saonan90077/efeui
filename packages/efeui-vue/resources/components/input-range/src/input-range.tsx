import { defineComponent, h } from 'vue'

import { inputRangeProps } from './input-range-types'

import { useVModel } from '@vueuse/core'

import { ElSpace, ElInput, ElDivider } from 'element-plus'

import { inputDirective } from '../../../directives'

import './input-range.scss'

const InputRange = defineComponent({
  name: 'efe-input-range',
  directives: {
    input: inputDirective,
  },
  inheritAttrs: false,
  props: inputRangeProps,
  emits: ['update:modelValue'],
  setup(props, { attrs, emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const renderSpacer = () => {
      return h(ElDivider, {
        style: {
          width: '8px',
          margin: '0 8px',
        },
      })
    }

    const renderChildren = () => {
      const { limit, placeholders, clearable, disabled, decimal, valueType } =
        props
      const limits = Array(limit).fill(0)

      return limits.map((_, index) => (
        <ElInput
          key={index}
          v-model={modelValue.value[index]}
          v-input={[decimal, ['int', 'float'].includes(valueType) && valueType]}
          placeholder={placeholders[index]}
          clearable={clearable}
          disabled={disabled}></ElInput>
      ))
    }
    return () => {
      console.log('render: ', 'efe-input-range')

      return (
        <ElSpace
          class="efe-input-range"
          size={0}
          spacer={renderSpacer()}
          {...attrs}>
          {renderChildren()}
        </ElSpace>
      )
    }
  },
})

export default InputRange
