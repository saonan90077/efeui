<template>
  <el-button @click="setVisible(true)">Open Dialog</el-button>
  <el-button @click="setLoading()"
    >{{ loading ? 'Close' : 'Open' }} Dialog Loading</el-button
  >
  <efe-dialog v-model="visible" title="Dialog title" :loading="loading">
    <p>This is dialog content.</p>
    <p>This is dialog content.</p>
    <p>This is dialog content.</p>
    <p>This is dialog content.</p>
    <p>This is dialog content.</p>
    <p>This is dialog content.</p>
  </efe-dialog>
</template>

<script lang="ts" setup>
  import { ElButton } from 'element-plus'
  import { useToggle } from '@vueuse/core'

  const [visible, setVisible] = useToggle()
  const [loading, setLoading] = useToggle()
</script>
