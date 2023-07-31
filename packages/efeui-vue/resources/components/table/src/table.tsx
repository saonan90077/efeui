import { defineComponent, provide, ref, toRef, type SlotsType } from 'vue'

import { ElEmpty, ElTable, ElTableColumn } from 'element-plus'

import TableColumnFilter from './table-column-filter'

import TableColumnOperate from './table-column-operate'

import {
  valueFormat,
  dateHelper,
  dictionaryFormat,
  omitProps,
} from '../../../utils'

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
    expand?: any
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

    const renderDefault = (column: TableColumnProps, scope: any) => {
      const { type, field, extraProps = {} } = column
      const { dateProps, dictionaryProps } = extraProps
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

    const isColumnVisible = (column: TableColumnProps) => {
      return typeof column.show === 'function' ? column.show?.() : column.show
    }

    const renderContent = (column: TableColumnProps) => {
      const { extraProps = {} } = column
      const { children = [] } = extraProps
      return children.length
        ? renderChildren(children)
        : {
            default: (scope: any) => renderDefault(column, scope),
          }
    }

    const renderColumn = (column: TableColumnProps) => {
      const { type, label, field, extraProps = {} } = column
      const { dateProps, filterProps, operateProps, ...rest } = extraProps

      if (isColumnVisible(column) === false) {
        return null
      }

      const columnProps = omitProps(rest, ['children'])

      return (
        <>
          {type === 'slot' && slots[field]?.()}
          {type === 'default' && (
            <ElTableColumn label={label} prop={field} {...columnProps}>
              {renderContent(column)}
            </ElTableColumn>
          )}
          {type === 'date' && (
            <ElTableColumn label={label} prop={field} {...columnProps}>
              {renderContent(column)}
            </ElTableColumn>
          )}
          {type === 'dictionary' && (
            <ElTableColumn label={label} prop={field} {...columnProps}>
              {renderContent(column)}
            </ElTableColumn>
          )}
          {type === 'filter' && (
            <TableColumnFilter
              label={label}
              field={field}
              dateProps={dateProps}
              filterProps={filterProps}
              {...columnProps}
            />
          )}
          {type === 'operate' && (
            <TableColumnOperate
              label={label}
              field={field}
              operateProps={operateProps}
              onFilterOperate={(eventName) => emit('filterOperate', eventName)}
              {...columnProps}
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
          {slots.expand?.()}
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
