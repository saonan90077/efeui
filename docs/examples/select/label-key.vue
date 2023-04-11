<template>
  <efe-select
    v-model="checkValue"
    :options="options"
    label-key="name"
    value-key="id">
  </efe-select>
</template>

<script lang="ts" setup>
  const checkValue = ref()
  const options = computed(() => [
    {
      name: 'Shanghai',
      id: '1'
    },
    {
      name: 'Beijing',
      id: '2'
    },
    {
      name: 'Guangzho',
      id: '3'
    },
    {
      name: 'Shenzhen',
      id: '4'
    }
  ])
</script>
