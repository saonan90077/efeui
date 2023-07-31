<template>
  <el-button @click="setVisible(true)">Open Dialog</el-button>
  <efe-dialog v-model="visible" title="Dialog title">
    This is dialog content.
  </efe-dialog>
</template>

<script lang="ts" setup>
  import { ElButton } from 'element-plus'
  import { useToggle } from '@vueuse/core'

  const [visible, setVisible] = useToggle()
</script>
