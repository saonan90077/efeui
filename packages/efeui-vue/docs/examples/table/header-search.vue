<template>
  <el-button @click="toggleShow()"
    >{{ show ? '关闭' : '开启' }}操作列查询</el-button
  >
  <efe-table
    :model="tableModel"
    :data="tableData"
    :columns="columns"
    @filter-operate="handleFilterOperate"></efe-table>
  {{ tableModel }}
</template>

<script lang="ts" setup>
  import { reactive, computed } from 'vue'
  import { useToggle } from '@vueuse/core'
  import { ElButton } from 'element-plus'

  const [show, toggleShow] = useToggle(true)

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

  const columns = computed(() => {
    return [
      {
        type: 'default',
        label: 'Date',
        field: 'date',
      },
      {
        type: 'filter',
        label: 'Name',
        field: 'name',
        extraProps: {
          sortable: true,
          width: 200,
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
          width: 200,
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
            filterBtnsProps: show.value ? {} : undefined,
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
  })

  const tableModel = reactive({
    sortData: {},
    filterData: {},
  })

  const handleFilterOperate = (type: 'search' | 'reset') => {
    console.log('type: ', type)
  }
</script>
