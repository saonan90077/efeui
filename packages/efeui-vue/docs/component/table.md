# Table 表格

## 基础用法

<preview path="../examples/table/basic.vue"></preview>

## 带斑马纹表格

<preview path="../examples/table/stripe.vue"></preview>

## 带边框表格

<preview path="../examples/table/border.vue"></preview>

## 固定表头

<preview path="../examples/table/fixed-thead.vue"></preview>

## 固定列

<preview path="../examples/table/fixed-column.vue"></preview>

## 多级表头

<preview path="../examples/table/multi-header.vue"></preview>

## 单选

<preview path="../examples/table/radio.vue"></preview>

## 多选

<preview path="../examples/table/selection.vue"></preview>

## 排序

<preview path="../examples/table/sortable.vue"></preview>

## 自定义列模板

<preview path="../examples/table/column-template.vue"></preview>

## 自定义表头

<preview path="../examples/table/theader-template.vue"></preview>

## 展开行

<preview path="../examples/table/expand.vue"></preview>

## 索引

<preview path="../examples/table/index.vue"></preview>

## 列筛选

<preview path="../examples/table/header-search.vue"></preview>

## Table Attributes

| 属性              | 说明                                                                                                    | 类型                                    | 可选值 | 默认值                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------ | ------------------------------------------------- |
| model             | 表格数据对象                                                                                            | `TableModel`                            | -      | `{filterData: {}, sortData: {},selections: [] } ` |
| data              | 显示的数据                                                                                              | array                                   | -      | -                                                 |
| columns           | 列配置项                                                                                                | `TableColumnProps[]`                    | -      | -                                                 |
| selection         | 是否显示选择框                                                                                          | boolean                                 | -      | -                                                 |
| selectable        | 仅当 selection 为 true 时有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 | `(row: any, index: number) => boolean`  | -      | -                                                 |
| reserve-selection | 数据刷新后是否保留选项，仅当 selection 为 true 时有效， 请注意， 需指定 row-key 来让这个功能生效。      | boolean                                 | -      | -                                                 |
| index             | 是否显示索引                                                                                            | boolean                                 | -      | -                                                 |
| index-method      | 索引方法，仅当 index 为 true 时可用                                                                     | `number \| ((index: number) => number)` | -      | -                                                 |

## Table Events

| 事件名         | 说明                       | 类型                                  |
| -------------- | -------------------------- | ------------------------------------- |
| filter-operate | 在点击列筛选操作按钮时触发 | `(type: 'search' \| 'reset') => void` |

## Table Slots

| 插槽名    | 说明                                                                                                                                    | 参数 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| expand    | 开启展开行功能                                                                                                                          | -    |
| append    | 插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。 | -    |
| empty     | 当数据为空时自定义的内容                                                                                                                | -    |
| `[field]` | 列配置项为 slot 时的插槽                                                                                                                | -    |

## Table Exposes

| 名称      | 说明                                                                       | 类型 |
| --------- | -------------------------------------------------------------------------- | ---- |
| $tableRef | [表格实例](https://element-plus.org/zh-CN/component/table.html#table-事件) | -    |

### 类型声明

::: details 显示类型声明

```typescript
import type { ButtonType } from 'element-plus'

interface TableModel {
  filterData?: Record<string, any>
  sortData?: Record<string, any>
  selections?: Record<string, any>[]
}

type TableColumnType =
  | 'slot'
  | 'default'
  | 'date'
  | 'dictionary'
  | 'filter'
  | 'operate'

interface TableColumnOperateBtnProps {
  label?: string
  type?: ButtonType
  disabled?: boolean | (({ row, index }: any) => boolean)
  handler?: ({ row, index }: any) => void
  show?: boolean | (({ row, index }: any) => boolean)
  children?: Omit<TableColumnOperateBtnProps, 'children'>[]
}

interface TableColumnExtraProps {
  children?: TableColumnProps[]
  dateProps?: {
    format?: string
  }
  dictionaryProps?: {
    labelKey?: string
    valueKey?: string
    options?: Record<string, any>[] | (() => Record<string, any>[])
  }
  filterProps?: {
    inputType?: 'input' | 'select' | 'date' | 'cascader' | 'treeSelect'
    labelKey?: string
    valueKey?: string
    options?: Record<string, any>[] | (() => Record<string, any>[])
    columnType?: 'default' | 'date' | 'dictionary'
    [key: string]: any
  }
  operateProps?: {
    filterBtnsProps?: Record<string, any>
    btns?: TableColumnOperateBtnProps[]
    limit?: number
  }
  [key: string]: any
}

interface TableColumnProps {
  type: TableColumnType
  field: string
  label?: string
  extraProps?: TableColumnExtraProps
  show?: boolean | (() => boolean)
}
```

:::
