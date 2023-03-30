<template>
  <el-checkbox-group v-model="modelValue" v-bind="$attrs">
    <template v-if="mode === 'button'">
      <el-checkbox-button
        v-for="item in options"
        :key="item[valueKey]"
        :label="item[valueKey]"
        :disabled="item.disabled">
        <slot name="opt-temp" :option="item">{{ item[labelKey] }}</slot>
      </el-checkbox-button>
    </template>
    <template v-else>
      <el-checkbox
        v-for="item in options"
        :key="item[valueKey]"
        :label="item[valueKey]"
        :disabled="item.disabled">
        <slot name="opt-temp" :option="item">{{ item[labelKey] }}</slot>
      </el-checkbox>
    </template>
  </el-checkbox-group>
</template>

<script lang="ts">
  export default {
    name: 'ele-checkbox'
  }
</script>
<script lang="ts" setup>
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
</script>
