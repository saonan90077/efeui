import {
  defineComponent,
  inject,
  shallowRef,
  type PropType,
  computed,
} from 'vue'

import { ElForm, ElRow, ElFormItem, ElButton, ElCol } from 'element-plus'

import { Search, Refresh } from '@element-plus/icons-vue'

import { formContextKey, type FormItemProps } from '../../form'

import FormItem from '../../form/src/form-item'

import { pickSlots } from '../../../utils'

const ConditionsForm = defineComponent({
  name: 'conditions-form',
  inheritAttrs: false,
  props: {
    conditions: {
      type: Array as PropType<FormItemProps[]>,
    },
    enableConditionsAuto: {
      type: Boolean,
    },
    labelWidth: {
      type: [Number, String],
    },
    layout: {
      type: Object as PropType<Record<string, any>>,
    },
  },
  emits: ['conditionsFormOperate'],
  setup(props, { slots, emit }) {
    const formContext = inject(formContextKey, {})
    const defaultLayout = {
      row: {
        gutter: 32,
      },
      col: {
        span: 5,
      },
    }
    const layout = computed(() => {
      return {
        ...defaultLayout,
        ...props.layout,
      }
    })

    const formRef = shallowRef<InstanceType<typeof ElForm>>()

    const onConditionsFormReset = () => {
      formRef.value?.resetFields()
      emit('conditionsFormOperate', 'reset')
    }
    const onConditionsFormSearch = () => {
      emit('conditionsFormOperate', 'search')
    }

    const renderFormItem = () => {
      return props.conditions?.map((item) => {
        const field = item.field
        return (
          <FormItem
            v-slots={pickSlots(slots, [field, `${field}-label`])}
            {...{
              ...item,
              extraProps: {
                colConf: layout.value.col,
                ...item.extraProps,
              },
            }}
          />
        )
      })
    }

    const renderButton = () => {
      if (props.enableConditionsAuto) {
        return null
      }
      return (
        <ElCol class="conditions-form-operate" {...layout.value.col}>
          <ElFormItem labelWidth={0}>
            <ElButton
              type="primary"
              icon={Search}
              onClick={onConditionsFormSearch}>
              查询
            </ElButton>
            <ElButton icon={Refresh} onClick={onConditionsFormReset}>
              重置
            </ElButton>
          </ElFormItem>
        </ElCol>
      )
    }

    const renderForm = () => {
      const { conditions, labelWidth } = props
      if (!conditions?.length) {
        return null
      }
      return (
        <ElForm
          ref={formRef}
          class="conditions-form"
          model={formContext.model.value}
          labelWidth={labelWidth}>
          <ElRow {...layout.value.row}>
            {renderFormItem()}
            {renderButton()}
          </ElRow>
        </ElForm>
      )
    }

    return () => {
      console.log('render: ', 'conditions-form')

      return renderForm()
    }
  },
})

export default ConditionsForm
