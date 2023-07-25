import { defineComponent, type SlotsType } from 'vue'

import { ElCheckboxGroup, ElCheckbox, ElCheckboxButton } from 'element-plus'

import { useVModel } from '@vueuse/core'

import { checkboxProps, type CheckboxDropdownOption } from './checkbox-types'

const Checkbox = defineComponent({
  name: 'efe-checkbox',
  inheritAttrs: false,
  props: checkboxProps,
  slots: Object as SlotsType<{
    'opt-temp'?: { option: CheckboxDropdownOption; optionIndex: number }
  }>,
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const renderOption = () => {
      const { options, mode, valueKey, labelKey } = props
      const Option = mode === 'button' ? ElCheckboxButton : ElCheckbox
      const _options = typeof options === 'function' ? options() : options
      return _options?.map((opt, optIndex) => (
        <Option
          key={opt[valueKey]}
          label={opt[valueKey]}
          disabled={opt.disabled}>
          {slots['opt-temp']?.({ option: opt, optionIndex: optIndex }) ??
            opt[labelKey]}
        </Option>
      ))
    }

    return () => {
      console.log('render: ', 'efe-checkbox')

      return (
        <ElCheckboxGroup v-model={modelValue.value} {...attrs}>
          {renderOption()}
        </ElCheckboxGroup>
      )
    }
  },
})

export default Checkbox
