# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

<demo src="../examples/checkbox/basic.vue"></demo>

## 按钮样式

设置 `mode` 属性为 `button`

<demo src="../examples/checkbox/button.vue"></demo>

## 指定选项的值或者标签

设置`label-key` `value-key`属性

<demo src="../examples/checkbox/label-key.vue" desc="指定选项的值或者选项标签为选项对象的某个属性值"></demo>

## 自定义模板

<demo src="../examples/checkbox/temp.vue"></demo>

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
