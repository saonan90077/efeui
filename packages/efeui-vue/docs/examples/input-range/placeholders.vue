<template>
  <efe-input-range
    v-model="value"
    :placeholders="['请输入', '正在输入']"></efe-input-range>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref([])
</script>
