import type { ExtractPropTypes, PropType } from 'vue'
import type { FormItemProps } from '../../form'
import type { TableColumnProps } from '../../table'

export interface PageTableModel {
  queryData?: Record<string, any>
  pageData?: Record<'pageIndex' | 'pageSize', number>
  filterData?: Record<string, any>
  sortData?: Record<string, any>
  selections?: Record<string, any>[]
}

export const pageTableProps = {
  fluid: {
    type: Boolean,
  },
  model: {
    type: Object as PropType<PageTableModel>,
    default: () => {
      return {
        queryData: {},
        pageData: {},
        filterData: {},
        sortData: {},
        selections: [],
      }
    },
  },
  conditions: {
    type: Array as PropType<FormItemProps[]>,
  },
  enableConditionsAuto: {
    type: Boolean,
  },
  labelWidth: {
    type: [Number, String],
  },
  rowConf: {
    type: Object as PropType<Record<string, any>>,
    default: () => {
      return {
        gutter: 32,
      }
    },
  },
  loading: {
    type: Boolean,
  },
  border: {
    type: Boolean,
  },
  stripe: {
    type: Boolean,
  },
  data: {
    type: Array,
  },
  columns: {
    type: Array as PropType<TableColumnProps[]>,
  },
  enableColumnFilterAuto: {
    type: Boolean,
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
  selectionCheckbox: {
    type: Boolean,
    default: true,
  },
  index: {
    type: Boolean,
  },
  indexMethod: {
    type: [Number, Function] as PropType<number | ((index: number) => number)>,
  },
  pagination: {
    type: Boolean,
    default: true,
  },
  total: {
    type: Number,
    default: 0,
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    default: () => [50, 100, 200],
  },
  layout: {
    type: String,
    default: 'total, sizes, prev, pager, next, jumper',
  },
  stopDefaultRequest: {
    type: Boolean,
  },
  requestData: {
    type: Function as PropType<() => Promise<any>>,
  },
}

export type PageTableProps = ExtractPropTypes<typeof pageTableProps>
