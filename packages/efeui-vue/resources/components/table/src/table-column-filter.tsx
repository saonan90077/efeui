import { defineComponent, inject, PropType, withModifiers } from 'vue'
import {
  ElCascader,
  ElDatePicker,
  ElInput,
  ElTableColumn,
  ElTreeSelect,
} from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { TableColumnExtraProps, tableInject } from './table-types'
import EfeSelect from '../../select'
import { dateHelper, dictionaryFormat, valueFormat } from '../../../utils'

const TableColumnFilter = defineComponent({
  name: 'table-column-filter',
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
    const { model } = inject(tableInject)!

    return () => {
      console.log('render: ', 'table-column-filter')
      const { label, field, filterProps = {}, dateProps } = props
      const { sortable, ...restAttrs } = attrs as any
      const {
        inputType = 'input',
        labelKey,
        valueKey,
        options,
        columnType = 'default',
        ...restInputProps
      } = filterProps

      return (
        <ElTableColumn
          label={label}
          prop={field}
          sortable={sortable}
          labelClassName="table-column-filter-th"
          v-slots={{
            header: () => (
              <>
                <div class="filter-header">
                  {label}
                  {sortable && (
                    <span class="caret-wrapper">
                      <i class="sort-caret ascending"></i>
                      <i class="sort-caret descending"></i>
                    </span>
                  )}
                </div>
                <div
                  class="filter-input"
                  onClick={withModifiers(() => ({}), ['stop'])}>
                  {inputType === 'input' && (
                    <ElInput
                      v-model={model.value.filterData![field]}
                      suffixIcon={Search}
                      {...restInputProps}
                    />
                  )}
                  {inputType === 'select' && (
                    <EfeSelect
                      v-model={model.value.filterData![field]}
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
                      v-model={model.value.filterData![field]}
                      valueFormat="YYYY-MM-DD"
                      {...restInputProps}
                    />
                  )}
                  {inputType === 'cascader' && (
                    <ElCascader
                      v-model={model.value.filterData![field]}
                      filterable={true}
                      clearable={true}
                      {...restInputProps}
                    />
                  )}
                  {inputType === 'treeSelect' && (
                    <ElTreeSelect
                      v-model={model.value.filterData![field]}
                      filterable={true}
                      clearable={true}
                      {...restInputProps}
                    />
                  )}
                </div>
              </>
            ),
            default: (scope: any) => (
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
            ),
          }}
          {...restAttrs}
        />
      )
    }
  },
})

export default TableColumnFilter
