<template>
  <el-button @click="setVisible(true)">Open Dialog</el-button>
  <efe-dialog v-model="visible" title="Dialog title">
    <template #title-append>
      <span>标题附加内容</span>
    </template>
    This is dialog content.
  </efe-dialog>
</template>

<script lang="ts" setup>
  import { ElButton } from 'element-plus'
  import { useToggle } from '@vueuse/core'

  const [visible, setVisible] = useToggle()
</script>
