<template>
  <efe-input-range v-model="value" :limit="3"></efe-input-range>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const value = ref([])
</script>
