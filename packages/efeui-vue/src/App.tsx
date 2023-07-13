import { ElConfigProvider, ElFormItem, ElInput } from 'element-plus'
import {
  EfeCheckbox,
  EfeSelect,
  EfeRadio,
  EfeForm,
} from '../resources/components'
import type { FormOption } from '../resources/components'
import { defineComponent, onMounted, reactive, ref } from 'vue'

const App = defineComponent({
  setup() {
    const options = [
      {
        label: '选项1',
        value: 1,
      },
      {
        label: '选项2',
        value: 2,
      },
    ]
    const formValue = reactive<any>({})
    const formItems: any[] = [
      {
        cols: [
          {
            type: 'input',
            label: '这是一个提示',
            field: 'input',
            extraProps: {},
          },
          {
            type: 'select',
            field: 'select',
            inputProps: {
              options,
            },
          },
          {
            type: 'radio',
            field: 'radio',
            inputProps: {
              options,
            },
            show: false,
          },
          {
            type: 'checkbox',
            field: 'checkbox',
            extraProps: {
              colConf: {
                span: 6,
              },
            },
            inputProps: {
              options,
            },
            show: false,
          },
        ],
      },
    ]

    onMounted(() => {
      setTimeout(() => {
        formValue.input = 'qaq'
      }, 300)
    })

    return () => (
      <ElConfigProvider>
        <EfeForm model={formValue} options={formItems} v-slots={{}}></EfeForm>
        <span>{JSON.stringify(formValue)}</span>
      </ElConfigProvider>
    )
  },
})
export default App
