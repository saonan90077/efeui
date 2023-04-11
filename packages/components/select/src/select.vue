<template>
  <el-select v-model="modelValue" v-bind="$attrs">
    <el-option
      v-for="item in options"
      :key="item[valueKey]"
      :label="item[labelKey]"
      :value="item[valueKey]"
      :disabled="item.disabled">
      <slot name="opt-temp" :opt="item"></slot>
    </el-option>
  </el-select>
</template>

<script lang="ts">
  export default {
    name: 'efe-select'
  }
</script>
<script lang="ts" setup>
  import { selectProps } from './select'

  const props = defineProps(selectProps)
  const emit = defineEmits(['update:modelValue'])

  const modelValue = computed({
    get() {
      return props.modelValue
    },
    set(val) {
      emit('update:modelValue', val)
    }
  })
</script>
