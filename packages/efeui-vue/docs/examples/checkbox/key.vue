<template>
  <efe-checkbox
    v-model="value"
    :options="options"
    label-key="name"
    value-key="id"></efe-checkbox>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref()

  const options = [
    {
      name: 'Option A',
      id: '1',
    },
    {
      name: 'Option B',
      id: '2',
    },
    {
      name: 'Option C',
      id: '3',
    },
    {
      name: 'disabled',
      id: '4',
      disabled: true,
    },
    {
      name: 'selected and disable',
      id: '5',
      disabled: true,
    },
  ]
</script>
