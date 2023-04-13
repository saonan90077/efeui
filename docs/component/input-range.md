# InputRange 范围输入框

`el-space` 作为包裹容器

## 基础用法

<demo src="../examples/input-range/basic.vue"></demo>

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

<demo src="../examples/input-range/disabled.vue"></demo>

## 可清空

使用 `clearable` 属性即可得到一个可清空的输入框

<demo src="../examples/input-range/clearable.vue"></demo>

## 自定义 placeholder

<demo src="../examples/input-range/placeholders.vue"></demo>

## 限制输入框数量

使用 `limit` 属性可设置显示的输入框数量

<demo src="../examples/input-range/limit.vue"></demo>

## Props

| 属性                  | 说明             | 类型                | 可选值 | 默认值               |
| --------------------- | ---------------- | ------------------- | ------ | -------------------- |
| model-value / v-model | 选中项绑定值     | string[] / number[] | -      | []                   |
| placeholders          | 输入框占位文本   | string[]            | -      | ['请输入', '请输入'] |
| clearable             | 是否显示清除按钮 | boolean             | -      | -                    |
| disabled              | 是否禁用         | boolean             | -      | -                    |
| limit                 | 输入框数量       | number              | -      | 2                    |
