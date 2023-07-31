<template>
  <el-button @click="setVisible(true)">Open Dialog</el-button>
  <efe-dialog v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
          Close
        </el-button>
      </div>
    </template>
    This is dialog content.
  </efe-dialog>
</template>

<script lang="ts" setup>
  import { ElButton, ElIcon } from 'element-plus'
  import { CircleCloseFilled } from '@element-plus/icons-vue'
  import { useToggle } from '@vueuse/core'

  const [visible, setVisible] = useToggle()
</script>

<style lang="scss" scoped>
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
