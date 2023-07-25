import type { ExtractPropTypes, InjectionKey, PropType, Ref } from 'vue'
import type { ButtonType, ElTable } from 'element-plus'

export type TableColumnType =
  | 'slot'
  | 'default'
  | 'date'
  | 'dictionary'
  | 'filter'
  | 'operate'

export interface TableColumnOperateBtnProps {
  label?: string
  type?: ButtonType
  disabled?: boolean | (({ row, index }: any) => boolean)
  handler?: ({ row, index }: any) => void
  show?: boolean | (({ row, index }: any) => boolean)
  children?: Omit<TableColumnOperateBtnProps, 'children'>[]
}

export interface TableColumnExtraProps {
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

export interface TableColumnProps {
  type: TableColumnType
  field: string
  label?: string
  extraProps?: TableColumnExtraProps
  show?: boolean | (() => boolean)
}

export interface TableModel {
  filterData?: Record<string, any>
  sortData?: Record<string, any>
  selections?: Record<string, any>[]
}

export const tableProps = {
  model: {
    type: Object as PropType<TableModel>,
    default: () => {
      return {
        filterData: {},
        sortData: {},
        selections: [],
      }
    },
  },
  data: {
    type: Array,
  },
  columns: {
    type: Array as PropType<TableColumnProps[]>,
  },
  selection: {
    type: Boolean,
  },
  selectable: {
    type: Function as PropType<(row: any, index: number) => boolean>,
  },
  reserveSelection: {
    type: Boolean,
  },
  index: {
    type: Boolean,
  },
  indexMethod: {
    type: [Number, Function] as PropType<number | ((index: number) => number)>,
  },
}

export type TableProps = ExtractPropTypes<typeof tableProps>
export type TableExpose = {
  $tableRef: InstanceType<typeof ElTable>
}

export const tableContextKey = Symbol('tableContextKey') as InjectionKey<
  Record<string, Ref<Record<string, any> | undefined>>
>
