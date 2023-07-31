<template>
  <efe-form ref="formRef" :model="formModel" :options="options">
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
  </efe-form>
  <el-button type="primary" @click="handleSubmit">Create</el-button>
  <el-button @click="formRef?.$formRef.resetFields()">Reset</el-button>
</template>

<script lang="ts" setup>
  import { reactive, shallowRef } from 'vue'
  import {
    ElFormItem,
    ElCol,
    ElDatePicker,
    ElTimePicker,
    ElButton,
  } from 'element-plus'

  const formRef = shallowRef()
  const formModel = reactive<any>({})
  const options = [
    {
      cols: [
        {
          type: 'input',
          label: 'Activity name',
          field: 'name',
          extraProps: {
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
            rules: [
              {
                required: true,
                message: 'Please select Activity zone',
                trigger: 'change',
              },
            ],
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
            inputProps: {
              type: 'textarea',
              placeholder: 'Please enter a description of the activity',
            },
          },
        },
      ],
    },
  ]

  const handleSubmit = () => {
    try {
      formRef.value.$formRef.validate()
    } catch (error) {
      console.log(error)
    }
  }
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
</style>
