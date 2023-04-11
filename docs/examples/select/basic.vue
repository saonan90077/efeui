<template>
  <efe-select v-model="checkValue" :options="options"> </efe-select>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
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
