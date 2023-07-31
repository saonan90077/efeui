<template>
  <el-space>
    <efe-countup
      :end-val="1000"
      :options="{
        prefix: '$',
      }"></efe-countup>
    <efe-countup
      :end-val="1000"
      :options="{
        suffix: '$',
      }"></efe-countup>
  </el-space>
</template>

<script lang="ts" setup>
  import { ElSpace } from 'element-plus'
</script>
