<template>
  <EfeCheckbox
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
    ]" />
</template>

<script lang="ts" setup>
  import { EfeCheckbox } from '@efe-plus/components'

  const value = ref([])
</script>
