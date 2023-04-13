<template>
  <efe-input-range
    v-model="val"
    :placeholders="['请输入', '请输入', '请输入']"
    :limit="3" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const val = ref()
</script>
