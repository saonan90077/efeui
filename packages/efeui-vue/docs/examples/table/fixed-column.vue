<template>
  <efe-table :data="tableData" :columns="columns"></efe-table>
</template>

<script lang="ts" setup>
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]

  const columns = [
    {
      type: 'default',
      label: 'Date',
      field: 'date',
      extraProps: {
        fixed: 'left',
        width: 150,
      },
    },
    {
      type: 'default',
      label: 'Name',
      field: 'name',
      extraProps: {
        width: 120,
      },
    },
    {
      type: 'default',
      label: 'State',
      field: 'state',
      extraProps: {
        width: 120,
      },
    },
    {
      type: 'default',
      label: 'City',
      field: 'city',
      extraProps: {
        width: 120,
      },
    },
    {
      type: 'default',
      label: 'Address',
      field: 'address',
      extraProps: {
        width: 600,
      },
    },
  ]
</script>
