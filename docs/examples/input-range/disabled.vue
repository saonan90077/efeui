<template>
  <efe-input-range v-model="val" disabled />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const val = ref()
</script>
