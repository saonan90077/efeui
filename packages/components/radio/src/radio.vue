<template>
  <ElRadioGroup v-model="modelValue">
    <component
      v-for="item in options"
      :is="view"
      :key="item[valueKey]"
      :label="item[valueKey]"
      :disabled="item.disabled">
      <slot name="opt-temp" :opt-conf="item">{{ item[labelKey] }}</slot>
    </component>
  </ElRadioGroup>
</template>

<script lang="ts">
  export default {
    name: 'efe-radio'
  }
</script>
<script lang="ts" setup>
  import { computed } from 'vue'
  import { ElRadioGroup, ElRadioButton, ElRadio } from 'element-plus'
  import { radioProps, radioEmits } from './radio'

  const props = defineProps(radioProps)
  const emit = defineEmits(radioEmits)

  const modelValue = computed({
    get() {
      return props.modelValue
    },
    set(val) {
      emit('update:model-value', val)
    }
  })

  const view = computed(() =>
    props.mode === 'button' ? ElRadioButton : ElRadio
  )
</script>
