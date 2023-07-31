<template>
  <div style="height: 500px">
    <efe-page-table
      :model="pageTableModel"
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
    filterData: {},
    pageData: {
      pageIndex: 1,
      pageSize: 50,
    },
    sortData: {},
    selections: [],
  })

  const columns = [
    {
      type: 'filter',
      label: 'Date',
      field: 'date',
      extraProps: {
        width: 150,
        filterProps: {
          inputType: 'date',
        },
      },
    },
    {
      type: 'filter',
      label: 'Name',
      field: 'name',
      extraProps: {
        sortable: 'custom',
        width: 150,
        filterProps: {
          inputType: 'input',
        },
      },
    },
    {
      type: 'default',
      label: 'Address',
      field: 'address',
      extraProps: {
        width: 150,
      },
    },
    {
      type: 'operate',
      label: 'Operate',
      field: 'operate',
      extraProps: {
        width: 230,
        fixed: 'right',
        operateProps: {
          filterBtnsProps: {},
          btns: [
            {
              label: '编辑',
              type: 'primary',
              handler: (row: any) => {
                console.log('编辑', row)
              },
            },
            {
              label: '删除',
              type: 'danger',
              handler: (row: any) => {
                console.log('删除', row)
              },
            },
          ],
        },
      },
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
