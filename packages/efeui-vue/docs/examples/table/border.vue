<template>
  <efe-table :data="tableData" :columns="columns" border></efe-table>
</template>

<script lang="ts" setup>
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
</script>
