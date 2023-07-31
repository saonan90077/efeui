<template>
  <el-space direction="vertical">
    <efe-input-range
      v-model="value"
      value-type="int"
      :placeholders="['整数', '整数']"></efe-input-range>
    <efe-input-range
      v-model="value1"
      value-type="float"
      :placeholders="['默认保留小数2位', '默认保留小数2位']"></efe-input-range>
    <efe-input-range
      v-model="value2"
      value-type="float"
      :decimal="5"
      :placeholders="['保留小数点5位', '保留小数点5位']"></efe-input-range>
  </el-space>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { ElSpace } from 'element-plus'

  const value = ref([])
  const value1 = ref([])
  const value2 = ref([])
</script>
