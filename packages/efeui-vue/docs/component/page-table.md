# PageTable 查询表格

## 基础用法

<preview path="../examples/page-table/basic.vue"></preview>

## 列筛选

<preview path="../examples/page-table/filter.vue"></preview>

## 功能插槽

<preview path="../examples/page-table/slot.vue"></preview>

## PageTable Attributes

| 参数                      | 说明                                                                                                    | 类型                                                        | 可选值 | 默认值                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------ | ------------------------------------------------------------------------------- |
| fluid                     | 表格流体高度                                                                                            | boolean                                                     | -      | -                                                                               |
| model                     | 数据对象                                                                                                | `PageTableModel`                                            | -      | `{ queryData: {}, pageData: {}, filterData: {}, sortData: {}, selections: [] }` |
| conditions                | 查询条件                                                                                                | [`FormItemProps[]`](./form.md#类型声明)                     | -      | -                                                                               |
| enable-conditions-auto    | 启用自动查询, 为 true 时 表单的查询重置按钮不显示                                                       | boolean                                                     | -      | -                                                                               |
| label-width               | 标签的长度                                                                                              | `string \| number`                                          | -      | -                                                                               |
| conditions-layout         | 查询条件布局                                                                                            | `{ row?: Record<string, any>, col?: Record<string, any>  }` | -      | `{ row: { gutter: 32 }, col: { span: 5 } }`                                     |
| loading                   | 是否显示加载中                                                                                          | boolean                                                     | -      | -                                                                               |
| border                    | 是否显示边框                                                                                            | boolean                                                     | -      | -                                                                               |
| stripe                    | 是否显示斑马纹                                                                                          | boolean                                                     | -      | -                                                                               |
| data                      | 显示的数据                                                                                              | array                                                       | -      | -                                                                               |
| columns                   | 列配置项                                                                                                | [`TableColumnProps[]`](./table.md#类型声明)                 | -      | -                                                                               |
| enable-column-filter-auto | 启用自动列筛选                                                                                          | boolean                                                     | -      | -                                                                               |
| selection                 | 是否显示选择框                                                                                          | boolean                                                     | -      | -                                                                               |
| selectable                | 仅当 selection 为 true 时有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 | `(row: any, index: number) => boolean`                      | -      | -                                                                               |
| reserve-selection         | 数据刷新后是否保留选项，仅当 selection 为 true 时有效， 请注意， 需指定 row-key 来让这个功能生效。      | -                                                           | -      | -                                                                               |
| selection-checkbox        | 是否显示多选列底部选择框                                                                                | boolean                                                     | -      | true                                                                            |
| index                     | 是否显示索引列                                                                                          | boolean                                                     | -      | -                                                                               |
| index-method              | 索引方法，仅当 index 为 true 时可用                                                                     | `(index: number) => string`                                 | -      | -                                                                               |
| pagination                | 启用分页配置项                                                                                          | boolean                                                     | -      | true                                                                            |
| total                     | 总条目数                                                                                                | number                                                      | -      | 0                                                                               |
| page-sizes                | 每页显示个数选择器的选项设置                                                                            | `number[]`                                                  | -      | [50, 100, 200]                                                                  |
| layout                    | 分页布局，子组件名用逗号分隔                                                                            | string                                                      | -      | total, sizes, prev, pager, next, jumper                                         |
| stop-default-request      | 阻止组件首次加载触发数据请求                                                                            | boolean                                                     | -      | -                                                                               |
| request-data              | 请求数据方法                                                                                            | `() => Promise<any>`                                        | -      | -                                                                               |

## PageTable Events

| 事件名                  | 说明             | 类型                                  |
| ----------------------- | ---------------- | ------------------------------------- |
| conditions-form-operate | 查询条件表单操作 | `(type: 'reset' \| 'search') => void` |
| column-filter-operate   | 列筛选操作       | `(type: 'reset' \| 'search') => void` |

## PageTable Slots

| 插槽名               | 说明                                                                                                                                    | 参数 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| prepend              | 顶部前置内容                                                                                                                            | -    |
| conditions           | 自定义条件筛选                                                                                                                          | -    |
| function-prepend     | 表格上方功能区前置内容                                                                                                                  | -    |
| btns                 | 表格上方功能区附加内容                                                                                                                  | -    |
| table                | 自定义表格                                                                                                                              | -    |
| expand               | 开启展开行功能                                                                                                                          | -    |
| append               | 插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。 | -    |
| empty                | 当数据为空时自定义的内容                                                                                                                | -    |
| bats                 | 表格下方功能区内容                                                                                                                      | -    |
| popup                | 弹出层内容                                                                                                                              | -    |
| `column-[field]`     | 列配置项为 slot 时的插槽                                                                                                                | -    |
| `conditions-[field]` | 条件筛选项为 slot 时的插槽                                                                                                              | -    |

## PageTable Exposes

| 名称          | 说明                                 | 类型 |
| ------------- | ------------------------------------ | ---- |
| $pageTableRef | [表格实例](./table.md#table-exposes) | -    |

### 类型声明

::: details 显示类型声明

```typescript
interface PageTableModel {
  queryData?: Record<string, any>
  pageData?: Record<'pageIndex' | 'pageSize', number>
  filterData?: Record<string, any>
  sortData?: Record<string, any>
  selections?: Record<string, any>[]
}
```

:::

::: danger 注意事项
当列表项为 filter 时， 请确保设置了 filterData ， 否则会导致筛选项无法正常显示。
:::
