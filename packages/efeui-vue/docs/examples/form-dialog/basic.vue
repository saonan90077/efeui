<template>
  <el-button @click="setVisible(true)">Open Dialog</el-button>
  <efe-form-dialog
    v-model="visible"
    :model="formModel"
    :options="options"
    :on-submit="handleSubmit">
    <template #time>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker
            v-model="formModel.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%" />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="formModel.date2"
            placeholder="Pick a time"
            style="width: 100%" />
        </el-col>
      </el-form-item>
    </template>
  </efe-form-dialog>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import {
    ElButton,
    ElFormItem,
    ElCol,
    ElDatePicker,
    ElTimePicker,
  } from 'element-plus'
  import { useToggle } from '@vueuse/core'

  const [visible, setVisible] = useToggle()
  const formModel = reactive<any>({})
  const options = [
    {
      cols: [
        {
          type: 'input',
          label: 'Activity name',
          field: 'name',
          extraProps: {
            tooltip: 'What do you want others to call you?',
            rules: [
              {
                required: true,
                message: 'Please input Activity name',
                trigger: 'blur',
              },
              {
                min: 3,
                max: 5,
                message: 'Length should be 3 to 5',
                trigger: 'blur',
              },
            ],
          },
        },
        {
          type: 'select',
          label: 'Activity zone',
          field: 'region',
          extraProps: {
            inputProps: {
              options: [
                {
                  label: 'Zone one',
                  value: 'shanghai',
                },
                {
                  label: 'Zone two',
                  value: 'beijing',
                },
              ],
            },
          },
        },
        {
          type: 'slot',
          label: 'Activity time',
          field: 'time',
        },
        {
          type: 'switch',
          label: 'Instant delivery',
          field: 'delivery',
        },
        {
          type: 'checkbox',
          label: 'Activity type',
          field: 'type',
          extraProps: {
            inputProps: {
              options: [
                {
                  label: 'Online activities',
                  value: 'online',
                },
                {
                  label: 'Promotion activities',
                  value: 'promotion',
                },
                {
                  label: 'Offline activities',
                  value: 'offline',
                },
                {
                  label: 'Simple brand exposure',
                  value: 'brand',
                },
              ],
            },
          },
        },
        {
          type: 'radio',
          label: 'Resources',
          field: 'resource',
          extraProps: {
            inputProps: {
              options: [
                {
                  label: 'Sponsor',
                  value: 'sponsor',
                },
                {
                  label: 'Venue',
                  value: 'venue',
                },
              ],
            },
          },
        },
        {
          type: 'input',
          label: 'Activity form',
          field: 'desc',
          extraProps: {
            extra: 'We must make sure that your are a human.',
            inputProps: {
              type: 'textarea',
              placeholder: 'Please enter a description of the activity',
            },
          },
        },
      ],
    },
  ]

  const handleSubmit = (setOkButtonLoading, done) => {
    setOkButtonLoading(true)
    setTimeout(() => {
      done()
    }, 3000)
  }
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
</style>
