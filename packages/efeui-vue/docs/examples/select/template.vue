<template>
  <efe-select v-model="value" :options="options">
    <template #opt-temp="scope">
      {{
        `index: ${scope.optionIndex} ${scope.option.label}:${scope.option.value}`
      }}
    </template>
  </efe-select>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref()

  const options = [
    {
      label: 'Option A',
      value: '1',
    },
    {
      label: 'Option B',
      value: '2',
    },
    {
      label: 'Option C',
      value: '3',
    },
    {
      label: 'disabled',
      value: '4',
      disabled: true,
    },
    {
      label: 'selected and disable',
      value: '5',
      disabled: true,
    },
  ]
</script>
