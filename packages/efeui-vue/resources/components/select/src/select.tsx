import { defineComponent, type SlotsType } from 'vue'

import { ElSelect, ElOption } from 'element-plus'

import { useVModel } from '@vueuse/core'

import { selectProps, type SelectDropdownOption } from './select-types'

const Select = defineComponent({
  name: 'efe-select',
  inheritAttrs: false,
  props: selectProps,
  slots: Object as SlotsType<{
    'opt-temp'?: { option: SelectDropdownOption; optionIndex: number }
  }>,
  emits: ['update:modelValue'],
  setup(props, { emit, attrs, slots }) {
    const modelValue = useVModel(props, 'modelValue', emit)

    const renderOption = () => {
      const { options, valueKey, labelKey } = props

      const _options = typeof options === 'function' ? options() : options

      return _options?.map((opt, optIndex) => (
        <ElOption
          key={opt[valueKey]}
          label={opt[labelKey]}
          value={opt[valueKey]}
          disabled={opt.disabled}>
          {slots['opt-temp']
            ? slots['opt-temp']({ option: opt, optionIndex: optIndex })
            : opt[labelKey]}
        </ElOption>
      ))
    }

    return () => {
      console.log('render: ', 'efe-select')

      return (
        <ElSelect v-model={modelValue.value} {...attrs}>
          {renderOption()}
        </ElSelect>
      )
    }
  },
})

export default Select
