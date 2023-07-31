<template>
  <el-space>
    <efe-countup :end-val="1000">
      <template #prefix>
        <span>$</span>
      </template>
    </efe-countup>
    <efe-countup :end-val="1000">
      <template #suffix>
        <span>$</span>
      </template>
    </efe-countup>
  </el-space>
</template>

<script lang="ts" setup>
  import { ElSpace } from 'element-plus'
</script>
