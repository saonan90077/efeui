<template>
  <efe-checkbox
    v-model="checkList"
    :options="options"
    label-key="name"
    value-key="id" />
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  const checkList = ref()
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
