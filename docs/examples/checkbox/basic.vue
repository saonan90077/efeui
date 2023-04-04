<template>
  <efe-checkbox v-model="checkList" :options="options"> </efe-checkbox>
</template>

<script lang="ts" setup>
  const checkList = ref(['1', '5'])
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
