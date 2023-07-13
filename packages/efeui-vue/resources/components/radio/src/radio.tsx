import { defineComponent } from 'vue'
import { ElRadioGroup, ElRadio, ElRadioButton } from 'element-plus'
import { useVModel } from '@vueuse/core'
import { radioProps, RadioSlots } from './radio-types'

const Radio = defineComponent({
  name: 'efe-radio',
  props: radioProps,
  slots: Object as RadioSlots,
  emits: ['update:modelValue'],
  setup(props, { emit, attrs, slots }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const renderChildren = () => {
      const { options, mode, valueKey, labelKey } = props
      const OptionComp = mode === 'button' ? ElRadioButton : ElRadio
      return options?.map((opt, optIndex) => (
        <OptionComp
          key={opt[valueKey]}
          label={opt[valueKey]}
          disabled={opt.disabled}>
          {slots['opt-temp']?.({ option: opt, optionIndex: optIndex }) ??
            opt[labelKey]}
        </OptionComp>
      ))
    }

    return () => {
      console.log('render: ', 'efe-radio')
      const children = renderChildren()

      return (
        <ElRadioGroup v-model={modelValue.value} {...attrs}>
          {children}
        </ElRadioGroup>
      )
    }
  },
})

export default Radio
