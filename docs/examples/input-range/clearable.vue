<template>
  <efe-input-range v-model="val" clearable />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const val = ref()
</script>
