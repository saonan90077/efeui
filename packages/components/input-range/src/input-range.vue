<template>
  <ElSpace class="efe-input-range" spacer="-" v-bind="$attrs">
    <ElInput
      v-for="(item, index) in limit"
      :key="index"
      :placeholder="placeholders[index]"
      :clearable="clearable"
      :disabled="disabled"
      v-model="modelValue[index]">
    </ElInput>
  </ElSpace>
</template>

<script lang="ts">
  export default {
    name: 'efe-input-range'
  }
</script>
<script lang="ts" setup>
  import { computed } from 'vue'
  import { ElSpace, ElInput } from 'element-plus'
  import { inputRangeProps, inputRangeEmits } from './input-range'

  const props = defineProps(inputRangeProps)
  const emit = defineEmits(inputRangeEmits)

  const modelValue = computed({
    get() {
      return props.modelValue
    },
    set(val) {
      emit('update:model-value', val)
    }
  })
</script>
