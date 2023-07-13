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
  </ElConfigProvider>
</template>

<script lang="ts" setup>
  import { ElConfigProvider, ElFormItem, ElInput, ElButton } from 'element-plus'
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

  const checkboxValue = ref()

  const [show, toggleShow] = useToggle(true)
  const [visible, toggleVisible] = useToggle(false)
  const [visible1, toggleVisible1] = useToggle(false)

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
      // formValue.input = 'qaq'
      // options.value = [
      //   {
      //     label: '选项1',
      //     value: 1,
      //   },
      //   {
      //     label: '选项2',
      //     value: 2,
      //   },
      //   {
      //     label: '选项3',
      //     value: 3,
      //   },
      // ]
    }, 300)
  })
</script>
