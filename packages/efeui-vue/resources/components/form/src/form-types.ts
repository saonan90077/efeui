import { ExtractPropTypes, PropType, InjectionKey, ComputedRef } from 'vue'
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

export interface FormItemExtraProps {
  colConf?: Record<string, any>
  extra?: string
  tooltip?: string
  rules?: FormItemRule[]
  [propName: string]: any
}

export interface FormItemInputProps {
  labelKey?: string
  valueKey?: string
  options?: Record<string, any>[]
  mode?: 'default' | 'button'
  decimal?: number
  placeholders?: string[]
  limit?: number
  valueType?: 'text' | 'int' | 'float'
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
    default: 'field',
    required: true,
  },
  extraProps: {
    type: Object as PropType<FormItemExtraProps>,
  },
  inputProps: {
    type: Object as PropType<FormItemInputProps>,
  },
  show: {
    type: Boolean,
    default: true,
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
    default: () => ({}),
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

export const formInject = Symbol('formInject') as InjectionKey<
  Record<string, ComputedRef<Record<string, any>>>
>
