import { defineComponent, inject, withModifiers, type PropType } from 'vue'
import {
  ElCascader,
  ElDatePicker,
  ElInput,
  ElTableColumn,
  ElTreeSelect,
} from 'element-plus'

import { Search } from '@element-plus/icons-vue'

import { EfeSelect } from '../../select'

import { dateHelper, dictionaryFormat, valueFormat } from '../../../utils'

import { tableContextKey, type TableColumnExtraProps } from './table-types'

const TableColumnFilter = defineComponent({
  name: 'table-column-filter',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    field: {
      type: String,
      default: '',
      required: true,
    },
    dateProps: {
      type: Object as PropType<TableColumnExtraProps['dateProps']>,
    },
    filterProps: {
      type: Object as PropType<TableColumnExtraProps['filterProps']>,
    },
  },
  setup(props, { attrs }) {
    const tableContext = inject(tableContextKey, {})

    const renderHeader = () => {
      const { label, field, filterProps = {} } = props
      const {
        inputType = 'input',
        labelKey,
        valueKey,
        options,
        ...restInputProps
      } = filterProps

      if (!tableContext.filterData.value) {
        return null
      }

      return (
        <>
          <div class="filter-header">
            {label}
            {attrs.sortable ? (
              <span class="caret-wrapper">
                <i class="sort-caret ascending"></i>
                <i class="sort-caret descending"></i>
              </span>
            ) : null}
          </div>
          <div
            class="filter-input"
            onClick={withModifiers(() => ({}), ['stop'])}>
            {inputType === 'input' && (
              <ElInput
                v-model={tableContext.filterData.value[field]}
                suffixIcon={Search}
                {...restInputProps}
              />
            )}
            {inputType === 'select' && (
              <EfeSelect
                v-model={tableContext.filterData.value[field]}
                labelKey={labelKey}
                valueKey={valueKey}
                options={options}
                {...{
                  filterable: true,
                  clearable: true,
                  ...restInputProps,
                }}
              />
            )}
            {inputType === 'date' && (
              <ElDatePicker
                v-model={tableContext.filterData.value[field]}
                valueFormat="YYYY-MM-DD"
                {...restInputProps}
              />
            )}
            {inputType === 'cascader' && (
              <ElCascader
                v-model={tableContext.filterData.value[field]}
                filterable={true}
                clearable={true}
                {...restInputProps}
              />
            )}
            {inputType === 'treeSelect' && (
              <ElTreeSelect
                v-model={tableContext.filterData.value[field]}
                filterable={true}
                clearable={true}
                {...restInputProps}
              />
            )}
          </div>
        </>
      )
    }

    const renderDefault = (scope: any) => {
      const { field, filterProps = {}, dateProps } = props
      const {
        labelKey,
        valueKey,
        options,
        columnType = 'default',
      } = filterProps

      return (
        <>
          {columnType === 'default' && valueFormat(scope.row[field])}
          {columnType === 'date' &&
            dateHelper.format(scope.row[field], dateProps)}
          {columnType === 'dictionary' &&
            dictionaryFormat(scope.row[field], {
              labelKey,
              valueKey,
              options,
            })}
        </>
      )
    }

    return () => {
      console.log('render: ', 'table-column-filter')
      const { label, field } = props

      return (
        <ElTableColumn
          label={label}
          prop={field}
          labelClassName="table-column-filter-th"
          v-slots={{
            header: renderHeader,
            default: renderDefault,
          }}
          {...attrs}
        />
      )
    }
  },
})

export default TableColumnFilter
