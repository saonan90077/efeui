# Checkbox 多选框组

## 基础用法

<preview path="../examples/checkbox/basic.vue"></preview>

## 按钮样式

设置 `mode` 属性为 `button`

<preview path="../examples/checkbox/button.vue"></preview>

## 指定选项的值或者标签

<preview path="../examples/checkbox/key.vue"></preview>

## 自定义内容

<preview path="../examples/checkbox/template.vue"></preview>

## Checkbox Attributes

| 属性                  | 说明                               | 类型                       | 可选值               | 默认值  |
| --------------------- | ---------------------------------- | -------------------------- | -------------------- | ------- |
| model-value / v-model | 绑定值                             | `(string \| number)[]`     | -                    | -       |
| mode                  | 指定按钮样式                       | string                     | `default` / `button` | default |
| label-key             | 指定选项标签为选项对象的某个属性值 | string                     | -                    | label   |
| value-key             | 指定选项的值为选项对象的某个属性值 | string                     | -                    | value   |
| options               | 配置选项                           | `CheckboxDropdownOption[]` | -                    | -       |

## Checkbox Slots

| 插槽名   | 说明       | 类型                                                      |
| -------- | ---------- | --------------------------------------------------------- |
| opt-temp | 自定义内容 | `{ option: CheckboxDropdownOption; optionIndex: number }` |

### 类型声明

::: details 显示类型声明

```typescript
interface CheckboxDropdownOption {
  label?: string | number
  value?: string | number | boolean | object
  disabled?: boolean
  [propName: string]: any
}
```

:::
