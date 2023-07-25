import type { ExtractPropTypes, PropType, InjectionKey, Ref } from 'vue'
import type { FormItemRule, ElForm } from 'element-plus'

export type FormItemType =
  | 'slot'
  | 'show'
  | 'inputRange'
  | 'input'
  | 'int'
  | 'float'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'switch'
  | 'date'
  | 'time'
  | 'timeSelect'
  | 'cascader'
  | 'treeSelect'

export interface FormItemInputProps {
  labelKey?: string
  valueKey?: string
  options?: Record<string, any>[] | (() => Record<string, any>[])
  mode?: 'default' | 'button'
  decimal?: number
  placeholders?: string[]
  limit?: number
  valueType?: 'text' | 'int' | 'float'
  [propName: string]: any
}

export interface FormItemExtraProps {
  colConf?: Record<string, any>
  extra?: string
  tooltip?: string
  rules?: FormItemRule[] | (() => FormItemRule[])
  inputProps?: FormItemInputProps
  [propName: string]: any
}

export const formItemProps = {
  type: {
    type: String as PropType<FormItemType>,
    default: 'input',
    required: true,
  },
  label: {
    type: String,
  },
  field: {
    type: String,
    default: '',
    required: true,
  },
  extraProps: {
    type: Object as PropType<FormItemExtraProps>,
  },
  show: {
    type: [Boolean, Function] as PropType<boolean | (() => boolean)>,
    default: undefined,
  },
}

export type FormItemProps = ExtractPropTypes<typeof formItemProps>

export interface FormOption {
  title?: string
  rowConf?: Record<string, any>
  colConf?: Record<string, any>
  cols?: FormItemProps[]
}

export const formProps = {
  model: {
    type: Object as PropType<Record<string, any>>,
    required: true,
  },
  options: {
    type: Array as PropType<FormOption[]>,
  },
}

export type FormProps = ExtractPropTypes<typeof formProps>

export interface FormExpose {
  $formRef: InstanceType<typeof ElForm>
}

export const formContextKey = Symbol('formContextKey') as InjectionKey<
  Record<string, Ref<Record<string, any> | undefined>>
>
