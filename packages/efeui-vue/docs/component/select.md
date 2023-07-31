# Select 选择器

## 基础用法

<preview path="../examples/select/basic.vue"></preview>

## 指定选项的值或者标签

<preview path="../examples/select/key.vue"></preview>

## 自定义内容

<preview path="../examples/select/template.vue"></preview>

## Select Attributes

| 属性                  | 说明                               | 类型                                             | 可选值 | 默认值 |
| --------------------- | ---------------------------------- | ------------------------------------------------ | ------ | ------ |
| model-value / v-model | 绑定值                             | `string \| number \| boolean \| array \| object` | -      | -      |
| label-key             | 指定选项标签为选项对象的某个属性值 | string                                           | -      | label  |
| value-key             | 指定选项的值为选项对象的某个属性值 | string                                           | -      | value  |
| options               | 配置选项                           | `SelectDropdownOption[]`                         | -      | -      |

## Select Slots

| 插槽名   | 说明       | 类型                                                    |
| -------- | ---------- | ------------------------------------------------------- |
| opt-temp | 自定义内容 | `{ option: SelectDropdownOption; optionIndex: number }` |

### 类型声明

::: details 显示类型声明

```typescript
interface SelectDropdownOption {
  label?: string | number
  value?: string | number | boolean
  disabled?: boolean
  [propName: string]: any
}
```

:::
