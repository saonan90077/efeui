<template>
  <efe-table :data="tableData" :columns="columns">
    <template #radio>
      <el-table-column label="#" width="100">
        <template #default="{ row }">
          <el-radio v-model="value" :label="row.date"> <span></span></el-radio>
        </template>
      </el-table-column>
    </template>
  </efe-table>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { ElTableColumn, ElRadio } from 'element-plus'

  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]

  const columns = [
    {
      type: 'slot',
      label: '#',
      field: 'radio',
    },
    {
      type: 'default',
      label: 'Date',
      field: 'date',
    },
    {
      type: 'default',
      label: 'Name',
      field: 'name',
    },
    {
      type: 'default',
      label: 'Address',
      field: 'address',
    },
  ]

  const value = ref()
</script>
