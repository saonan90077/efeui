import { defineComponent, provide, ref, toRef, type SlotsType } from 'vue'

import { ElEmpty, ElTable, ElTableColumn } from 'element-plus'

import TableColumnFilter from './table-column-filter'

import TableColumnOperate from './table-column-operate'

import { valueFormat, dateHelper, dictionaryFormat } from '../../../utils'

import {
  tableProps,
  tableContextKey,
  type TableColumnProps,
} from './table-types'

import './table.scss'

const Table = defineComponent({
  name: 'efe-table',
  inheritAttrs: false,
  props: tableProps,
  emits: ['filterOperate'],
  slots: Object as SlotsType<{
    append?: any
    empty?: any
    [field: string]: any
  }>,
  setup(props, { attrs, slots, emit, expose }) {
    const filterData = toRef(props.model, 'filterData')
    const sortData = toRef(props.model, 'sortData')
    const selections = toRef(props.model, 'selections')

    provide(tableContextKey, {
      filterData,
    })

    const $tableRef = ref<InstanceType<typeof ElTable>>()

    expose({
      $tableRef,
    })

    const handleSelectionChange = (params: any[]) => {
      selections.value = params
    }
    const handleSortChange = ({ prop, order }: any) => {
      sortData.value = {
        prop,
        order,
      }
    }

    const renderEmpty = () => {
      if (slots.empty) {
        return slots.empty()
      }
      return <ElEmpty description="暂无数据~" />
    }

    const isColumnVisible = (column: TableColumnProps) => {
      return typeof column.show === 'function' ? column.show?.() : column.show
    }

    const renderColumnDefaultSlot = (column: TableColumnProps, scope: any) => {
      const { type, field, extraProps = {} } = column
      const { children, dateProps, dictionaryProps } = extraProps
      if (children?.length) {
        return renderChildren(children)
      }
      if (type === 'default') {
        return valueFormat(scope.row[field], {
          placeholder: '-',
        })
      }
      if (type === 'date') {
        return dateHelper.format(scope.row[field], dateProps)
      }
      if (type === 'dictionary') {
        return dictionaryFormat(scope.row[field], dictionaryProps)
      }
    }

    const renderColumn = (column: TableColumnProps) => {
      const { type, label, field, extraProps = {} } = column
      const { dateProps, filterProps, operateProps, ...restTableColumnProps } =
        extraProps

      if (isColumnVisible(column) === false) {
        return null
      }

      return (
        <>
          {type === 'slot' && slots[field]?.()}
          {type === 'default' && (
            <ElTableColumn
              label={label}
              prop={field}
              v-slots={{
                default: renderColumnDefaultSlot,
              }}
              {...restTableColumnProps}
            />
          )}
          {type === 'date' && (
            <ElTableColumn
              label={label}
              prop={field}
              v-slots={{
                default: renderColumnDefaultSlot,
              }}
              {...restTableColumnProps}
            />
          )}
          {type === 'dictionary' && (
            <ElTableColumn
              label={label}
              prop={field}
              v-slots={{
                default: renderColumnDefaultSlot,
              }}
              {...restTableColumnProps}
            />
          )}
          {type === 'filter' && (
            <TableColumnFilter
              label={label}
              field={field}
              dateProps={dateProps}
              filterProps={filterProps}
              {...restTableColumnProps}
            />
          )}
          {type === 'operate' && (
            <TableColumnOperate
              label={label}
              field={field}
              operateProps={operateProps}
              onFilterOperate={(eventName) => emit('filterOperate', eventName)}
              {...restTableColumnProps}
            />
          )}
        </>
      )
    }

    const renderChildren = (columns?: TableColumnProps[]) => {
      return columns?.map((item) => renderColumn(item))
    }

    return () => {
      console.log('render: ', 'efe-table')
      const {
        data,
        columns,
        selection,
        selectable,
        reserveSelection,
        index,
        indexMethod,
      } = props

      return (
        <ElTable
          class="efe-table"
          ref={$tableRef}
          data={data}
          onSelection-change={handleSelectionChange}
          onSort-change={handleSortChange}
          v-slots={{
            append: slots.append,
            empty: renderEmpty,
          }}
          {...attrs}>
          {selection ? (
            <ElTableColumn
              type="selection"
              width={55}
              selectable={selectable}
              reserveSelection={reserveSelection}
            />
          ) : null}
          {index ? (
            <ElTableColumn
              type="index"
              label="#"
              width={50}
              index={indexMethod}
            />
          ) : null}
          {renderChildren(columns)}
        </ElTable>
      )
    }
  },
})

export default Table
