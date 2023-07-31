<template>
  <el-button @click="setVisible(true)">Open Dialog</el-button>
  <el-button @click="setFluid()"
    >Set Dialog Content Area MaxHeight {{ fluid ? 200 : undefined }}
  </el-button>
  <efe-dialog
    v-model="visible"
    title="Dialog title"
    fluid
    :fluid-height="fluid ? 200 : undefined">
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
  const [fluid, setFluid] = useToggle()
</script>
