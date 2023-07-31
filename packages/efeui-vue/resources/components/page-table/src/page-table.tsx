import {
  defineComponent,
  onMounted,
  provide,
  ref,
  shallowRef,
  toRef,
  watch,
  type SlotsType,
} from 'vue'

import { ElAutoResizer, vLoading, ElCheckbox, ElPagination } from 'element-plus'

import { EfeTable, type TableExpose } from '../../table'

import { formContextKey } from '../../form'

import ConditionsForm from './conditions-form'

import { debounce } from 'lodash-es'

import { pickSlots } from '../../../utils'

import { pageTableProps } from './page-table-types'

import './page-table.scss'

const PageTable = defineComponent({
  name: 'efe-page-table',
  directives: {
    loading: vLoading,
  },
  inheritAttrs: false,
  props: pageTableProps,
  slots: Object as SlotsType<{
    prepend?: any
    conditions?: any
    'function-prepend'?: any
    btns?: any
    table?: { width: number; height: number }
    expand?: any
    append?: any
    empty?: any
    bats?: any
    popup?: any
    [key: string]: any
  }>,
  emits: ['conditionsFormOperate', 'columnFilterOperate'],
  setup(props, { attrs, slots, emit, expose }) {
    const queryData = toRef(props.model, 'queryData')
    const filterData = toRef(props.model, 'filterData')
    const selections = toRef(props.model, 'selections')
    const sortData = toRef(props.model, 'sortData')
    const pageData = toRef(props.model, 'pageData')

    provide(formContextKey, {
      model: queryData,
    })

    const getSlots = (target: 'conditions' | 'column') => {
      return Object.keys(slots).reduce((resul: any, key) => {
        if (key.startsWith(target)) {
          resul[key.replace(`${target}-`, '')] = slots[key]
        }
        return resul
      }, {})
    }

    const tableLoading = ref(false)
    const debounceRequestData = debounce(
      async () => {
        try {
          tableLoading.value = true
          await props.requestData?.()
        } catch (error) {
          console.log('error: ', error)
        } finally {
          tableLoading.value = false
        }
      },
      620,
      {
        leading: true,
      },
    )
    // 重置pageIndex = 1
    // 若不锁定，则同时会触发pageIndex的watcher，将会emit两次
    const changeLock = ref(false)
    const emitRefresh = () => {
      if (pageData.value) {
        pageData.value.pageIndex = 1
      }
      if (!changeLock.value) {
        changeLock.value = true
        setTimeout(() => {
          debounceRequestData()
          changeLock.value = false
        }, 0)
      }
    }

    watch(sortData, () => {
      emitRefresh()
    })
    if (props.pagination) {
      watch(
        pageData,
        () => {
          emitRefresh()
        },
        {
          deep: true,
        },
      )
    }

    if (props.enableConditionsAuto) {
      watch(
        queryData,
        () => {
          emitRefresh()
        },
        {
          deep: true,
        },
      )
    }
    if (props.enableColumnFilterAuto) {
      watch(
        filterData,
        () => {
          emitRefresh()
        },
        {
          deep: true,
        },
      )
    }

    const handleConditionsFormOperate = (type: 'refresh' | 'reset') => {
      emit('conditionsFormOperate', type)
      emitRefresh()
    }
    const handleColumnFilterOperate = (params: string) => {
      emit('columnFilterOperate', params)
      emitRefresh()
    }

    onMounted(() => {
      if (!props.stopDefaultRequest) {
        emitRefresh()
      }
    })

    // render conditions
    const conditionsFormSlots = getSlots('conditions')
    const renderConditions = () => {
      const { conditions, enableConditionsAuto, labelWidth, conditionsLayout } =
        props
      if (slots.conditions) {
        return slots.conditions()
      }
      return (
        <ConditionsForm
          conditions={conditions}
          enableConditionsAuto={enableConditionsAuto}
          labelWidth={labelWidth}
          layout={conditionsLayout}
          onConditionsFormOperate={(eventName) =>
            handleConditionsFormOperate(eventName)
          }
          v-slots={conditionsFormSlots}
        />
      )
    }

    // render table
    const tableSlots = {
      ...getSlots('column'),
      ...pickSlots(slots, ['expand', 'append', 'empty']),
    }

    const $pageTableRef = shallowRef<TableExpose>()
    const tableModel = ref({
      filterData,
      sortData,
      selections,
    })
    const renderTable = ({ height }: { height: number }) => {
      const {
        fluid,
        border,
        stripe,
        data,
        columns,
        selection,
        selectable,
        reserveSelection,
        index,
        indexMethod,
      } = props

      return (
        <EfeTable
          ref={$pageTableRef}
          model={tableModel.value}
          data={data}
          columns={columns}
          selection={selection}
          selectable={selectable}
          reserveSelection={reserveSelection}
          index={index}
          indexMethod={indexMethod}
          onFilterOperate={($event) => handleColumnFilterOperate($event)}
          v-slots={tableSlots}
          {...{
            border,
            stripe,
            'max-height': fluid ? undefined : height,
          }}
        />
      )
    }

    // render footer
    const footerCheckboxValue = () => {
      const data = props.data || []
      const seleteds = selections.value || []
      return data.length > 0 && seleteds.length === data.length
    }
    const footerCheckboxIndeterminate = () => {
      const data = props.data || []
      const seleteds = selections.value || []
      return seleteds.length > 0 && seleteds.length < data.length
    }
    const renderFooter = () => {
      const {
        data = [],
        selection,
        selectionCheckbox,
        pagination,
        total,
        pageSizes,
        layout,
      } = props

      const checkboxModelValue = footerCheckboxValue()
      const CheckboxIndeterminate = footerCheckboxIndeterminate()
      if (!selection && !slots.bats && !pagination) {
        return null
      }
      return (
        <div class="pagination-area">
          {selection && selectionCheckbox ? (
            <ElCheckbox
              class="pagination-area__checkbox"
              modelValue={checkboxModelValue}
              indeterminate={CheckboxIndeterminate}
              disabled={data.length === 0}
              onChange={() =>
                $pageTableRef.value?.$tableRef.toggleAllSelection()
              }>
              {checkboxModelValue ? '取消' : null}
              全选
            </ElCheckbox>
          ) : null}
          {slots.bats?.()}
          {pagination && pageData.value ? (
            <ElPagination
              v-model:current-page={pageData.value.pageIndex}
              v-model:page-size={pageData.value.pageSize}
              total={total}
              pageSizes={pageSizes}
              layout={layout}
            />
          ) : null}
        </div>
      )
    }

    expose({
      $pageTableRef,
    })

    return () => {
      console.log('render: ', 'efe-page-table')
      const { loading, fluid } = props

      return (
        <div class={['efe-page-table', fluid && 'is-fluid']} {...attrs}>
          {slots.prepend?.()}
          {renderConditions()}
          <div class="function-area">
            {slots['function-prepend']?.()}
            <div class="function-area__btns">{slots.btns?.()}</div>
          </div>
          <div
            class="table-area"
            v-loading={loading || tableLoading.value}
            element-loading-text="加载中...">
            <ElAutoResizer
              v-slots={{
                default: slots.table || renderTable,
              }}
            />
          </div>
          {renderFooter()}
          {slots.popup?.()}
        </div>
      )
    }
  },
})

export default PageTable
