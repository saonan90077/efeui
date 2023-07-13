import { defineComponent } from 'vue'
import { ElCheckboxGroup, ElCheckbox, ElCheckboxButton } from 'element-plus'
import { useVModel } from '@vueuse/core'
import { checkboxProps, CheckboxSlots } from './checkbox-types'

const Checkbox = defineComponent({
  name: 'efe-checkbox',
  props: checkboxProps,
  slots: Object as CheckboxSlots,
  emits: ['update:modelValue'],
  setup(props, { emit, attrs, slots }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const renderChildren = () => {
      const { options, mode, valueKey, labelKey } = props
      const OptionComp = mode === 'button' ? ElCheckboxButton : ElCheckbox
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
      console.log('render: ', 'efe-checkbox')
      const children = renderChildren()

      return (
        <ElCheckboxGroup v-model={modelValue.value} {...attrs}>
          {children}
        </ElCheckboxGroup>
      )
    }
  },
})

export default Checkbox
