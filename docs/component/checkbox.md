# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

:::preview 标题 || 适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

demo-preview=../examples/checkbox/basic.vue

:::

## 按钮样式

设置 `mode` 属性为 `button`

:::preview 标题 || 按钮样式的多选组合

demo-preview=../examples/checkbox/button.vue

:::

## 指定选项的值或者标签

设置`label-key` `value-key`属性

:::preview 标题 || 指定选项的值或者选项标签为选项对象的某个属性值

demo-preview=../examples/checkbox/label-key.vue

:::

## 自定义模板

:::preview 标题 || 你可以自定义如何来渲染每一个选项。

demo-preview=../examples/checkbox/temp.vue

:::

## Props

| 属性                  | 说明                               | 类型                 | 可选值               | 默认值    |
| --------------------- | ---------------------------------- | -------------------- | -------------------- | --------- |
| model-value / v-model | 选中项绑定值                       | (string \| number)[] | -                    | -         |
| mode                  | 指定按钮样式                       | string               | 'default' / 'button' | 'default' |
| label-key             | 指定选项标签为选项对象的某个属性值 | string               | -                    | 'label'   |
| value-key             | 指定选项的值为选项对象的某个属性值 | string               | -                    | 'value'   |
| options               | 选项配置                           | OptionItem[]         | -                    | -         |

## OptionItem Props

| 属性     | 说明           | 类型          | 可选值 | 默认值 |
| -------- | -------------- | ------------- | ------ | ------ |
| label    | 选项的标签     | string/number | -      | -      |
| value    | 选项的值       | string/number | -      | -      |
| disabled | 是否禁用该选项 | boolean       | -      | -      |

## Option Slots

| 插槽名   | 说明           |
| -------- | -------------- |
| opt-temp | 自定义模板插槽 |
