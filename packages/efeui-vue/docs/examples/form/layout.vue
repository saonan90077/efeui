<template>
  <efe-form :model="formModel" :options="options" label-suffix=":">
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
</template>

<script lang="ts" setup>
  import { reactive } from 'vue'
  import { ElFormItem, ElCol, ElDatePicker, ElTimePicker } from 'element-plus'

  const formModel = reactive<any>({})
  const options = [
    {
      rowConf: {
        gutter: 20,
      },
      colConf: {
        span: 12,
      },
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
            colConf: {
              span: 12,
            },
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
          extraProps: {
            colConf: {
              span: 24,
            },
          },
        },
        {
          type: 'switch',
          label: 'Instant delivery',
          field: 'delivery',
          extraProps: {
            colConf: {
              span: 24,
            },
          },
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
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
</style>
