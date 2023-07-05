import { computed, defineComponent } from 'vue'
import { ElCheckboxGroup, ElCheckbox, ElCheckboxButton } from 'element-plus'
import { useVModel } from '@vueuse/core'
import { checkboxProps } from './checkbox-types'

const Checkbox = defineComponent({
  name: 'efe-checkbox',
  props: checkboxProps,
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const DropdownOptionComp = computed(() =>
      props.mode === 'button' ? ElCheckboxButton : ElCheckbox,
    )

    const modelValue = useVModel(props, 'modelValue', emit)

    return () => (
      <ElCheckboxGroup {...attrs} v-model={modelValue.value}>
        {props.options?.map((item) => (
          <DropdownOptionComp.value
            key={item[props.valueKey]}
            label={item[props.valueKey]}
            disabled={item.disabled}>
            {item[props.labelKey]}
          </DropdownOptionComp.value>
        ))}
      </ElCheckboxGroup>
    )
  },
})

export default Checkbox
