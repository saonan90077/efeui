# FormDialog 表单对话框

基于 [Dialog](./dialog.md) 和 [Form](./form.md) 组件封装，提供了表单对话框的基本功能。

## 基本用法

<preview path="../examples/form-dialog/basic.vue"></preview>

## FormDialog Attributes

| 属性                  | 说明                                      | 类型                                                                                   | 可选值                 | 默认值 |
| --------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------- | ------ |
| model-value / v-model | 对话框是否可见                            | boolean                                                                                | -                      | -      |
| show-cancel           | 取消按钮是否可见                          | boolean                                                                                | -                      | true   |
| show-ok               | 确定按钮是否可见                          | boolean                                                                                | -                      | true   |
| cancel-text           | 取消按钮文本                              | string                                                                                 | -                      | 取消   |
| ok-text               | 确定按钮文本                              | string                                                                                 | -                      | 确定   |
| on-submit             | 点击确定按钮时触发的回调                  | `(setOkButtonLoading: (value?: boolean) => boolean, done: () => void) => Promise<any>` | -                      | -      |
| model \*              | 表单数据对象, 必填                        | object                                                                                 | -                      | -      |
| label-width           | 标签的长度                                | `string \| number`                                                                     | -                      | -      |
| label-suffix          | 表单域标签的后缀                          | string                                                                                 | -                      | -      |
| label-position        | 表单域标签的位置                          | string                                                                                 | `left \| right \| top` | -      |
| disabled              | 是否禁用该表单内的所有组件                | boolean                                                                                | -                      | -      |
| options               | [表单配置选项](./form.md#form-attributes) | `FormOption[]`                                                                         | -                      | -      |

## FormDialog Slots

| 插槽名           | 说明                                                   | 类型                                                         |
| ---------------- | ------------------------------------------------------ | ------------------------------------------------------------ |
| header           | 对话框标题的内容；会替换标题部分，但不会移除关闭按钮。 | `{ titleId: string; titleClass: string; close: () => void }` |
| title-append     | 对话框标题的标题附加内容                               | -                                                            |
| footer           | Dialog 按钮操作区的内容                                | -                                                            |
| `[field]`        | 自定义表单项内容                                       | -                                                            |
| `[field]-label`  | 标签位置显示的内容                                     | -                                                            |
| `[field]-tootip` | 提示信息显示的内容                                     | -                                                            |
| `[field]-extra`  | 额外信息显示的内容                                     | -                                                            |
