<template>
  <ElCheckboxGroup v-model="modelValue" v-bind="$attrs">
    <component
      v-for="item in options"
      :is="view"
      :key="item[valueKey]"
      :label="item[valueKey]"
      :disabled="item.disabled">
      <slot name="opt-temp" :opt-conf="item">{{ item[labelKey] }}</slot>
    </component>
  </ElCheckboxGroup>
</template>

<script lang="ts">
  export default {
    name: 'efe-checkbox'
  }
</script>
<script lang="ts" setup>
  import { computed } from 'vue'
  import { ElCheckboxGroup, ElCheckbox, ElCheckboxButton } from 'element-plus'
  import { checkboxProps, checkboxEmits } from './checkbox'

  const props = defineProps(checkboxProps)

  const emit = defineEmits(checkboxEmits)

  const modelValue = computed({
    get() {
      return props.modelValue
    },
    set(val) {
      emit('update:model-value', val)
    }
  })

  const view = computed(() =>
    props.mode === 'button' ? ElCheckboxButton : ElCheckbox
  )
</script>
