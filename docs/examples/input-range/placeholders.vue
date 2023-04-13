<template>
  <efe-input-range
    v-model="val"
    :placeholders="['自定义文本', 'placeholders']" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const val = ref()
</script>
