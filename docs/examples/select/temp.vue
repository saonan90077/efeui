<template>
  <efe-select v-model="checkValue" :options="options">
    <template #opt-temp="{ option }"
      >{{ option.label }}-----{{ option.value }}</template
    >
  </efe-select>
</template>

<script lang="ts" setup>
  const checkValue = ref()
  const options = computed(() => [
    {
      label: 'Option A',
      value: '1'
    },
    {
      label: 'Option B',
      value: '2'
    },
    {
      label: 'Option C',
      value: '3'
    },
    {
      label: 'disabled',
      value: '4',
      disabled: true
    },
    {
      label: 'selected and disable',
      value: '5',
      disabled: true
    }
  ])
</script>
