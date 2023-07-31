# Ellipsis 文本省略

## 尾部省略

<preview path="../examples/ellipsis/basic.vue"></preview>

## 头部省略

<preview path="../examples/ellipsis/direction-start.vue"></preview>

## 中间省略

<preview path="../examples/ellipsis/direction-middle.vue"></preview>

## 多行省略

<preview path="../examples/ellipsis/rows.vue"></preview>

## 展开收起

<preview path="../examples/ellipsis/expand.vue"></preview>

## Ellipsis Attributes

| 属性             | 说明         | 类型    | 可选值                   | 默认值 |
| ---------------- | ------------ | ------- | ------------------------ | ------ |
| content          | 文本内容     | string  | -                        | -      |
| direction        | 省略位置     | string  | `start \| end \| middle` | end    |
| rows             | 展示几行     | number  | -                        | 1      |
| default-expanded | 是否默认展开 | boolean | -                        | -      |

## Ellipsis Slots

| 插槽名        | 说明           | 类型 |
| ------------- | -------------- | ---- |
| expand-text   | 展开操作的内容 | -    |
| collapse-text | 收起操作的内容 | -    |

## Ellipsis Exposes

| 名称        | 说明         | 类型                                        |
| ----------- | ------------ | ------------------------------------------- |
| exceeded    | 是否超出     | boolean                                     |
| setExpanded | 设置展开收起 | `(value?: boolean \| undefined) => boolean` |
