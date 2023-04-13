<template>
  <efe-radio v-model="checkList" :options="options">
    <template #opt-temp="{ optConf }">
      {{ optConf.label }}++++{{ optConf.value }}
    </template>
  </efe-radio>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  const checkList = ref('1')
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
