<template>
  <el-button @click="setVisible(true)">Open Dialog</el-button>
  <efe-dialog v-model="visible" title="Dialog title">
    <el-table :data="gridData">
      <el-table-column prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="200" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </efe-dialog>
</template>

<script lang="ts" setup>
  import { ElButton, ElTable, ElTableColumn } from 'element-plus'
  import { useToggle } from '@vueuse/core'

  const [visible, setVisible] = useToggle()

  const gridData = [
    {
      date: '2016-05-02',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
      date: '2016-05-04',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
      date: '2016-05-01',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
      date: '2016-05-03',
      name: 'John Smith',
      address: 'No.1518,  Jinshajiang Road, Putuo District',
    },
  ]
</script>
