import { defineComponent, type SlotsType } from 'vue'

import { ElRadioGroup, ElRadio, ElRadioButton } from 'element-plus'

import { useVModel } from '@vueuse/core'

import { radioProps, type RadioDropdownOption } from './radio-types'

const Radio = defineComponent({
  name: 'efe-radio',
  inheritAttrs: false,
  props: radioProps,
  slots: Object as SlotsType<{
    'opt-temp'?: { option: RadioDropdownOption; optionIndex: number }
  }>,
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const renderOption = () => {
      const { options, mode, valueKey, labelKey } = props
      const Option = mode === 'button' ? ElRadioButton : ElRadio
      const _options = typeof options === 'function' ? options() : options
      return _options?.map((opt, optIndex) => (
        <Option
          key={opt[valueKey]}
          label={opt[valueKey]}
          disabled={opt.disabled}>
          {slots['opt-temp']
            ? slots['opt-temp']({ option: opt, optionIndex: optIndex })
            : opt[labelKey]}
        </Option>
      ))
    }

    return () => {
      console.log('render: ', 'efe-radio')

      return (
        <ElRadioGroup v-model={modelValue.value} {...attrs}>
          {renderOption()}
        </ElRadioGroup>
      )
    }
  },
})

export default Radio
