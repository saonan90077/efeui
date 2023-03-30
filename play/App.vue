<template>
  <EleCheckbox
    v-model="value"
    :options="[
      {
        label: 1,
        value: 1
      },
      {
        label: 2,
        value: 2
      }
    ]"
    mode="button" />
</template>

<script lang="ts" setup>
  import { EleCheckbox } from '@ele-plus/components'

  const value = ref([])
</script>
