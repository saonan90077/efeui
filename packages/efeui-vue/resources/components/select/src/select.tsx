import { defineComponent } from 'vue'
import { ElSelect, ElOption } from 'element-plus'
import { useVModel } from '@vueuse/core'
import { selectProps, SelectSlots } from './select-types'

const Select = defineComponent({
  name: 'efe-select',
  props: selectProps,
  slots: Object as SelectSlots,
  emits: ['update:modelValue'],
  setup(props, { emit, attrs, slots }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const renderChildren = () => {
      const { options, valueKey, labelKey } = props

      return options?.map((opt, optIndex) => (
        <ElOption
          key={opt[valueKey]}
          label={opt[labelKey]}
          value={opt[valueKey]}
          disabled={opt.disabled}>
          {slots['opt-temp']?.({ option: opt, optionIndex: optIndex }) ??
            opt[labelKey]}
        </ElOption>
      ))
    }

    return () => {
      console.log('render: ', 'efe-select')
      const children = renderChildren()

      return (
        <ElSelect v-model={modelValue.value} {...attrs}>
          {children}
        </ElSelect>
      )
    }
  },
})

export default Select
