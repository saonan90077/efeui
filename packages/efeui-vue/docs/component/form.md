# Form 表单

## 典型表单

<preview path="../examples/form/basic.vue"></preview>

## 表单校验

<preview path="../examples/form/rules.vue"></preview>

## 表单分组

<preview path="../examples/form/group.vue"></preview>

## 自定义分组标题

<preview path="../examples/form/group-title.vue"></preview>

## 附加组标题的内容

<preview path="../examples/form/group-title-append.vue"></preview>

## Layout 布局

<preview path="../examples/form/layout.vue"></preview>

## Form Attributes

| 属性     | 说明               | 类型           | 可选值 | 默认值 |
| -------- | ------------------ | -------------- | ------ | ------ |
| model \* | 表单数据对象, 必填 | object         | -      | -      |
| options  | 表单配置选项       | `FormOption[]` | -      | -      |

## Form Slots

| 插槽名           | 说明               | 类型 |
| ---------------- | ------------------ | ---- |
| `[title]`        | 组标题             | -    |
| `[title]-append` | 附加组标题的内容   | -    |
| `[field]`        | 自定义表单项内容   | -    |
| `[field]-label`  | 标签位置显示的内容 | -    |
| `[field]-tootip` | 提示信息显示的内容 | -    |
| `[field]-extra`  | 额外信息显示的内容 | -    |

## Form Exposes

| 名称     | 说明                                                                            | 类型 |
| -------- | ------------------------------------------------------------------------------- | ---- |
| $formRef | [Form Exposes](https://element-plus.org/zh-CN/component/form.html#form-exposes) | -    |

### 类型声明

::: details 显示类型声明

```typescript
import type { FormItemRule } from 'element-plus'
/**
 * 表单项类型
 */
type FormItemType =
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

interface FormItemInputProps {
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

interface FormItemExtraProps {
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

type FormItemProps = {
  type: FormItemType
  field: string
  label?: string
  extraProps?: FormItemExtraProps
  show?: boolean | (() => boolean)
}

interface FormOption {
  /**
   * 分组标题
   */
  title?: string
  rowConf?: Record<string, any>
  colConf?: Record<string, any>
  cols?: FormItemProps[]
}
```

:::
