import { ElConfigProvider } from 'element-plus'
import { EfeCheckbox } from '../resources'
import { defineComponent, ref } from 'vue'

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

    const modelValue = ref()

    return () => (
      <ElConfigProvider>
        <EfeCheckbox options={options} v-model={modelValue.value} />
      </ElConfigProvider>
    )
  },
})
export default App
