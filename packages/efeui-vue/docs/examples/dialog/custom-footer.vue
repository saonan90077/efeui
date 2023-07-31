<template>
  <el-button @click="setVisible(true)">Open Dialog</el-button>
  <efe-dialog v-model="visible" title="Dialog title">
    This is dialog content.
    <template #footer>
      <el-button type="primary">确定</el-button>
      <el-button>删除</el-button>
    </template>
  </efe-dialog>
</template>

<script lang="ts" setup>
  import { ElButton } from 'element-plus'
  import { useToggle } from '@vueuse/core'

  const [visible, setVisible] = useToggle()
</script>
