# InputRange 范围输入框

## 基础用法

<preview path="../examples/input-range/basic.vue"></preview>

## 输入框占位文本

<preview path="../examples/input-range/placeholders.vue"></preview>

## Limit

<preview path="../examples/input-range/limit.vue"></preview>

## 值类型

<preview path="../examples/input-range/value.vue"></preview>

## InputRange Attributes

| 属性                  | 说明             | 类型                   | 可选值                 | 默认值 |
| --------------------- | ---------------- | ---------------------- | ---------------------- | ------ |
| model-value / v-model | 绑定值           | `(string \| number)[]` | -                      | []     |
| placeholders          | 输入框占位文本   | `string[]`             | -                      | []     |
| clearable             | 是否显示清除按钮 | boolean                | -                      | -      |
| disabled              | 是否禁用         | boolean                | -                      | -      |
| limit                 | 显示输入框的个数 | number                 | -                      | 2      |
| decimal               | 小数点位数       | number                 | -                      | 2      |
| value-ype             | 值类型           | string                 | `text \| int \| float` | text   |
