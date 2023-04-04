<template>
  <efe-checkbox v-model="checkList" :options="options" mode="button" />
</template>

<script lang="ts" setup>
  const checkList = ref()
  const options = computed(() => [
    {
      label: 'Shanghai',
      value: '1'
    },
    {
      label: 'Beijing',
      value: '2'
    },
    {
      label: 'Guangzho',
      value: '3'
    },
    {
      label: 'Shenzhen',
      value: '4'
    }
  ])
</script>
