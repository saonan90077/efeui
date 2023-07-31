# Dialog 对话框

## 基础用法

<preview path="../examples/dialog/basic.vue"></preview>

## 自定义标题附加内容

<preview path="../examples/dialog/title-append.vue"></preview>

## 自定义内容

<preview path="../examples/dialog/custom-content.vue"></preview>

## 自定义头部

<preview path="../examples/dialog/custom-header.vue"></preview>

## 自定义底部

<preview path="../examples/dialog/custom-footer.vue"></preview>

## 内容区域加载中状态

<preview path="../examples/dialog/loading.vue"></preview>

## 内容区域流体高度

<preview path="../examples/dialog/fluid.vue"></preview>

## Dialog Attributes

| 属性                  | 说明                       | 类型               | 可选值 | 默认值 |
| --------------------- | -------------------------- | ------------------ | ------ | ------ |
| model-value / v-model | 是否显示 Dialog            | boolean            | -      | -      |
| loading               | 内容区域加载中状态         | boolean            | -      | -      |
| fluid                 | 流体布局                   | boolean            | -      | -      |
| fluid-height          | 流体高度(fluid 开启时有效) | `string \| number` | -      | 400    |

## Dialog Slots

| 插槽名       | 说明                                                   | 类型                                                         |
| ------------ | ------------------------------------------------------ | ------------------------------------------------------------ |
| default      | Dialog 的内容                                          | -                                                            |
| header       | 对话框标题的内容；会替换标题部分，但不会移除关闭按钮。 | `{ titleId: string; titleClass: string; close: () => void }` |
| title-append | 对话框标题的标题附加内容                               | -                                                            |
| footer       | Dialog 按钮操作区的内容                                | -                                                            |
