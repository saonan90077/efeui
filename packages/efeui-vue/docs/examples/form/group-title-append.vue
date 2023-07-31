<template>
  <efe-form :model="formModel" :options="options">
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
    <template #custom2> 自定义组标题2 </template>
    <template #custom2-append>
      <el-button>自定义附加内容</el-button>
    </template>
  </efe-form>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import {
    ElFormItem,
    ElCol,
    ElDatePicker,
    ElTimePicker,
    ElButton,
  } from 'element-plus'

  const formModel = reactive<any>({})
  const options = [
    {
      title: '组标题',
      cols: [
        {
          type: 'input',
          label: 'Activity name',
          field: 'name',
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
      ],
    },
    {
      title: 'custom2',
      cols: [
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
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
</style>
