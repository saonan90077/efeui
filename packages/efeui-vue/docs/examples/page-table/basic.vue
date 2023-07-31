<template>
  <div style="height: 500px">
    <efe-page-table
      :model="pageTableModel"
      :conditions="conditions"
      :conditions-layout="{
        col: {
          span: 12,
        },
      }"
      selection
      :columns="columns"
      :data="tableData"
      :total="total"
      :request-data="getData"></efe-page-table>
  </div>
  {{ pageTableModel }}
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue'

  const pageTableModel = reactive({
    queryData: {},
    pageData: {
      pageIndex: 1,
      pageSize: 50,
    },
    sortData: {},
    selections: [],
  })

  const conditions = [
    {
      type: 'input',
      label: '姓名',
      field: 'name',
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
      extraProps: {
        sortable: 'custom',
      },
    },
    {
      type: 'default',
      label: 'Address',
      field: 'address',
    },
  ]

  const tableData = ref()
  const total = ref()

  const getData = async () => {
    const { count, data }: any = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          count: 100,
          data: Array.from({ length: 50 }).map((_, index) => {
            return {
              id: index,
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles',
            }
          }),
        })
      }, 300)
    })
    tableData.value = data
    total.value = count
  }
</script>
