import type { ExtractPropTypes, PropType, InjectionKey, Ref } from 'vue'
import type { FormItemRule, ElForm } from 'element-plus'

/**
 * 表单项类型
 */
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
/**
 * 表单项配置
 */
export interface FormItemInputProps {
  /**
   * 指定选项标签为选项对象的某个属性值
   */
  labelKey?: string
  /**
   * 指定选项的值为选项对象的某个属性值
   */
  valueKey?: string
  /**
   * 配置选项
   */
  options?: Record<string, any>[] | (() => Record<string, any>[])
  /**
   * 模式
   */
  mode?: 'default' | 'button'
  /**
   * 精确到小数点位数
   */
  decimal?: number
  /**
   * 范围输入框输入框占位文本
   */
  placeholders?: string[]
  /**
   * 范围输入框渲染个数限制
   */
  limit?: number
  /**
   * 范围输入框值类型
   */
  valueType?: 'text' | 'int' | 'float'
  [propName: string]: any
}

export interface FormItemExtraProps {
  /**
   * layout布局
   */
  colConf?: Record<string, any>
  /**
   * 额外提示信息
   */
  extra?: string
  /**
   * tooltip提示
   */
  tooltip?: string
  /**
   * 表单项校验规则
   */
  rules?: FormItemRule[] | (() => FormItemRule[])
  /**
   * 表单项的配置属性
   */
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
  /**
   * 分组标题
   */
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
