import type { ExtractPropTypes, PropType } from 'vue'
import type { FormOption } from '../../form'

export const formDialogProps = {
  modelValue: {
    type: Boolean,
  },
  showCancel: {
    type: Boolean,
    default: true,
  },
  showOk: {
    type: Boolean,
    default: true,
  },
  cancelText: {
    type: String,
    default: '取消',
  },
  okText: {
    type: String,
    default: '确定',
  },
  onSubmit: {
    type: Function as PropType<
      (
        setOkButtonLoading: (value?: boolean) => boolean,
        done: () => void,
      ) => Promise<any>
    >,
  },
  model: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
    required: true,
  },
  labelWidth: {
    type: [String, Number],
  },
  labelSuffix: {
    type: String,
  },
  labelPosition: {
    type: String as PropType<'left' | 'right' | 'top'>,
  },
  disabled: {
    type: Boolean,
  },
  options: {
    type: Array as PropType<FormOption[]>,
  },
}

export type FormDialogProps = ExtractPropTypes<typeof formDialogProps>
