<template>
  <efe-table
    :model="tableModel"
    :data="tableData"
    :columns="columns"
    selection></efe-table>
  {{ tableModel }}
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'

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

  const tableModel = reactive({
    selections: [],
  })
</script>
