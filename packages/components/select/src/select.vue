<template>
  <ElSelect v-model="modelValue" v-bind="$attrs">
    <ElOption
      v-for="item in options"
      :key="item[valueKey]"
      :label="item[labelKey]"
      :value="item[valueKey]"
      :disabled="item.disabled">
      <slot name="opt-temp" :opt-conf="item"></slot>
    </ElOption>
  </ElSelect>
</template>

<script lang="ts">
  export default {
    name: 'efe-select'
  }
</script>
<script lang="ts" setup>
  import { computed } from 'vue'
  import { ElSelect, ElOption } from 'element-plus'
  import { selectProps } from './select'

  const props = defineProps(selectProps)
  const emit = defineEmits(['update:model-value'])

  const modelValue = computed({
    get() {
      return props.modelValue
    },
    set(val) {
      emit('update:model-value', val)
    }
  })
</script>
