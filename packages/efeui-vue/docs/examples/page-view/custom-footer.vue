<template>
  <div style="height: 250px">
    <efe-page-view>
      内容页
      <template #footer>
        <el-button>自定义页脚</el-button>
      </template>
    </efe-page-view>
  </div>
</template>

<script lang="ts" setup>
  import { ElButton } from 'element-plus'
</script>
