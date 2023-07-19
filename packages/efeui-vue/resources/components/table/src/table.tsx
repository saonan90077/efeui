import { SlotsType, computed, defineComponent, provide, ref } from 'vue'
import { ElEmpty, ElTable, ElTableColumn } from 'element-plus'
import { valueFormat, dateHelper, dictionaryFormat } from '../../../utils'
import { tableProps, TableColumnProps, tableInject } from './table-types'
import TableColumnFilter from './table-column-filter'
import TableColumnOperate from './table-column-operate'

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
    const model = computed(() => props.model)

    provide(tableInject, {
      model,
    })

    const $tableRef = ref<InstanceType<typeof ElTable>>()

    expose({
      $tableRef,
    })

    const handleSelectionChange = (selections: any[]) => {
      model.value.selections = selections
    }
    const handleSortChange = ({ prop, order }: any) => {
      model.value.sortData!.prop = prop
      model.value.sortData!.order = order
    }

    const isColumnVisible = (column: TableColumnProps) => {
      return typeof column.show === 'function' ? column.show?.() : column.show
    }

    const renderChildren = (columns?: TableColumnProps[]) => {
      return columns?.map((item) => {
        const { type, label, field, extraProps = {} } = item
        const {
          children,
          dateProps,
          dictionaryProps,
          filterProps,
          operateProps,
          ...restTableColumnProps
        } = extraProps
        return isColumnVisible(item) !== false ? (
          <>
            {type === 'slot' && slots[field]?.()}
            {type === 'default' && (
              <ElTableColumn
                label={label}
                prop={field}
                v-slots={{
                  default: (scope: any) => (
                    <>
                      {children?.length
                        ? renderChildren(children)
                        : valueFormat(scope.row[field])}
                    </>
                  ),
                }}
                {...restTableColumnProps}
              />
            )}
            {type === 'date' && (
              <ElTableColumn
                label={label}
                prop={field}
                v-slots={{
                  default: (scope: any) => (
                    <>
                      {children?.length
                        ? renderChildren(children)
                        : dateHelper.format(scope.row[field], dateProps)}
                    </>
                  ),
                }}
                {...restTableColumnProps}
              />
            )}
            {type === 'dictionary' && (
              <ElTableColumn
                label={label}
                prop={field}
                v-slots={{
                  default: (scope: any) => (
                    <>
                      {children?.length
                        ? renderChildren(children)
                        : dictionaryFormat(scope.row[field], dictionaryProps)}
                    </>
                  ),
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
                onFilterOperate={(eventName) =>
                  emit('filterOperate', eventName)
                }
                {...restTableColumnProps}
              />
            )}
          </>
        ) : null
      })
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
      const children = renderChildren(columns)

      return (
        <ElTable
          class="efe-table"
          ref={$tableRef}
          data={data}
          onSelection-change={handleSelectionChange}
          onSort-change={handleSortChange}
          v-slots={{
            append: slots.append,
            empty: slots.empty || (() => <ElEmpty description="暂无数据~" />),
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
          {children}
        </ElTable>
      )
    }
  },
})

export default Table
