<template>
  <ElConfigProvider>
    <!-- <EfeCheckbox v-model="checkboxValue" :options="options" /> -->
    <ElButton @click="toggleShow()">toggle</ElButton>
    <EfeForm ref="formRef" :model="formValue" :options="formItems">
      <template #custom> 自定义组标题 </template>
      <template #custom-append> 自定义组标题附加内容 </template>
      <template #slot>
        <ElFormItem label="slot">
          <ElInput v-model="formValue.slot" />
        </ElFormItem>
      </template>
      <template #inputRange-label>qaq</template>
      <template #inputRange-tooltip>qaq</template>
      <template #inputRange-extra>qaq</template>
    </EfeForm>
    <span>{{ formValue }}</span>
    <br />
    <ElButton type="primary" @click="verify">校验</ElButton>
    <ElButton type="primary" @click="toggleVisible()">dialog</ElButton>
    <ElButton type="primary" @click="toggleVisible1()">dialog1</ElButton>
    <EfeDialog v-model="visible" title="qaq">
      <span>{{ formValue }}</span>
    </EfeDialog>
    <EfeFormDialog
      v-model="visible1"
      :model="formValue"
      :options="formItems"
      :on-submit="handleSubmit">
      <template #header> qaq </template>
      <template #custom> 自定义组标题 </template>
      <template #custom-append> 自定义组标题附加内容 </template>
      <template #slot>
        <ElFormItem label="slot" prop="slot">
          <ElInput v-model="formValue.slot" />
        </ElFormItem>
      </template>
      <template #inputRange-label>qaq</template>
      <template #inputRange-tooltip>qaq</template>
      <template #inputRange-extra>qaq</template>
    </EfeFormDialog>
    <EfeCountup ref="EfeCountupRef" :end-val="endVal">
      <template #prefix>
        {{ visible }}
      </template>
      <template #suffix>
        {{ visible }}
      </template>
    </EfeCountup>
    <ElButton @click="endVal += 100">change-end-val</ElButton>
    <ElTooltip
      :disabled="tooltipShow"
      content="🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉文本这是一段很长的额文本这是一段很长的额文本这是一段很长的额文本">
      <EfeEllipsis
        ref="EfeEllipsisRef"
        content="🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉文本这是一段很长的额文本这是一段很长的额文本这是一段很长的额文本">
      </EfeEllipsis>
    </ElTooltip>
    <EfeTagPlus>自定义组标题</EfeTagPlus>
    <EfeTable
      :model="tableModel"
      :data="tableData"
      :columns="tableColumns"
      :default-sort="{
        prop: 'name',
        order: 'descending',
      }">
      <template #slot>
        <ElTableColumn label="slot" prop="slot">
          <template #default="{ row }">
            <ElInput v-model="row.slot" />
          </template>
        </ElTableColumn>
      </template>
      <template #childslot>
        <ElTableColumn label="childslot" prop="childslot">
          <template #default> childslot </template>
        </ElTableColumn>
      </template>
    </EfeTable>
    {{ tableModel }}
    {{ tableData }}
  </ElConfigProvider>
</template>

<script lang="ts" setup>
  import {
    ElConfigProvider,
    ElFormItem,
    ElInput,
    ElButton,
    ElTooltip,
    ElTableColumn,
  } from 'element-plus'
  import {
    EfeCheckbox,
    EfeSelect,
    EfeRadio,
    EfeForm,
    FormOption,
    FormExpose,
    EfeDialog,
    EfeFormDialog,
    FormDialogProps,
    EfeCountup,
    CountupExpose,
    EfeEllipsis,
    EllipsisExpose,
    EfeTagPlus,
    EfeTable,
  } from '../resources/components'
  import {
    computed,
    defineComponent,
    onMounted,
    reactive,
    ref,
    shallowRef,
    unref,
    watch,
    watchEffect,
  } from 'vue'
  import { useToggle } from '@vueuse/core'

  const tableModel = reactive<any>({
    selections: [],
    filterData: {
      filterInput: 'qazq',
      filterdate: ['2000-10-10', '2023-11-11'],
    },
    sortData: {},
  })
  const tableData = ref([
    {
      date: '',
      name: 0,
      address: 'No. 189, Grove St, Los Angeles',
      dict: 0,
      enable: true,
    },
    {
      date: Date.now(),
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      dict: 1,
      enable: true,
    },
    {
      date: Date.now(),
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      dict: 2,
      enable: true,
    },
    {
      date: Date.now(),
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      dict: 3,
      enable: true,
    },
    {
      date: Date.now(),
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      enable: true,
    },
  ])

  const select1Options = ref<any[]>([])
  const select2Options = ref<any[]>([])
  const select3Options = ref<any[]>([])
  const tableColumns = computed(() => [
    {
      type: 'filter',
      label: '下拉1',
      field: 'select1',
      extraProps: {
        filterProps: {
          inputType: 'select',
          options: select1Options.value,
        },
      },
    },
    {
      type: 'filter',
      label: '下拉2',
      field: 'select2',
      extraProps: {
        filterProps: {
          inputType: 'select',
          options: select2Options.value,
        },
      },
    },
    {
      type: 'filter',
      label: '下拉3',
      field: 'select3',
      extraProps: {
        filterProps: {
          inputType: 'select',
          options: select3Options.value,
        },
      },
    },
    {
      type: 'operate',
      label: 'Operate',
      field: 'operate',
      extraProps: {
        operateProps: {
          // filterBtnsProps: {},
          btns: [
            {
              label: '编辑',
              type: 'primary',
              handler: () => {
                console.log('编辑')
              },
            },
            {
              label: '删除',
              type: 'danger',
              handler: () => {
                console.log('删除')
              },
            },
            {
              label: '禁用',
              type: 'danger',
              show: ({ row }: any) => row.enable,
              handler: ({ row }: any) => {
                console.log('禁用')
                row.enable = !row.enable
              },
            },
            {
              label: '启用',
              type: 'danger',
              show: ({ row }: any) => !row.enable,
              handler: ({ row }: any) => {
                console.log('启用')
                row.enable = !row.enable
              },
            },
          ],
        },
      },
    },
  ])

  const checkboxValue = ref()
  const EfeCountupRef = ref<CountupExpose>()
  const EfeEllipsisRef = shallowRef<EllipsisExpose>()

  const endVal = ref(0)

  const [show, toggleShow] = useToggle(false)
  const [visible, toggleVisible] = useToggle(false)
  const [visible1, toggleVisible1] = useToggle(false)

  const tooltipShow = computed(() => {
    return !EfeEllipsisRef.value?.exceeded
  })

  const handleSubmit: FormDialogProps['onSubmit'] = async (
    setOkButtonLoading,
    done,
  ) => {
    setOkButtonLoading(true)
    console.log('handleSubmit')
    console.log('formValue: ', formValue)
  }

  const formRef = shallowRef<FormExpose>()
  const verify = () => {
    // formRef.value?.$formRef
    console.log('formRef.value?.$formRef: ', formRef.value)
    formRef.value?.$formRef.validate()
  }
  const options = ref([
    {
      label: '选项1',
      value: 1,
    },
    {
      label: '选项2',
      value: 2,
    },
  ])
  const formValue = reactive<any>({
    inputRange: [],
  })
  const formItems = ref()
  const renderFormItems = () => {
    return [
      {
        title: 'custom',
        cols: [
          {
            type: 'slot',
            label: 'slot',
            field: 'slot',
            extraProps: {
              tooltip: 'custom',
              extra: 'custom',
            },
          },
          {
            type: 'inputRange',
            label: 'inputRange',
            field: 'inputRange',
            extraProps: {
              tooltip: 'custom',
              extra: 'custom',
            },
            inputProps: {},
          },
          {
            type: 'input',
            label: '这是一个提示',
            field: 'input',
            extraProps: {
              rules: unref(show) && [
                {
                  required: true,
                  message: '请输入活动名称',
                },
              ],
            },
          },
          {
            type: 'int',
            label: '整数',
            field: 'int',
          },
          {
            type: 'float',
            label: '浮点数',
            field: 'float',
            inputProps: {
              decimal: 3,
            },
          },
          {
            type: 'select',
            field: 'select',
            inputProps: {
              options: unref(options),
            },
            show: unref(show),
          },
          {
            type: 'radio',
            field: 'radio',
            inputProps: {
              options: unref(options),
            },
            show: unref(show),
          },
          {
            type: 'checkbox',
            field: 'checkbox',
            extraProps: {},
            inputProps: {
              options: unref(options),
            },
            show: unref(show),
          },
        ],
      },
    ]
  }
  watch(
    [show, options],
    () => {
      formItems.value = renderFormItems()
    },
    {
      immediate: true,
    },
  )

  onMounted(() => {
    setTimeout(() => {
      select1Options.value = [
        {
          label: '选项1',
          value: 1,
        },
      ]
    }, 300)
    setTimeout(() => {
      select2Options.value = [
        {
          label: '选项1',
          value: 1,
        },
        {
          label: '选项2',
          value: 2,
        },
      ]
    }, 300)
    setTimeout(() => {
      select3Options.value = [
        {
          label: '选项1',
          value: 1,
        },
        {
          label: '选项2',
          value: 2,
        },
        {
          label: '选项3',
          value: 3,
        },
      ]
    }, 400)
  })
</script>
