import { defineComponent, h, inject, unref, type PropType } from 'vue'

import {
  ElTableColumn,
  ElButton,
  ElIcon,
  ElSpace,
  ElDivider,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
} from 'element-plus'

import { CaretLeft, Search, Refresh, MoreFilled } from '@element-plus/icons-vue'

import { cloneDeep } from 'lodash-es'

import {
  tableContextKey,
  type TableColumnExtraProps,
  type TableColumnOperateBtnProps,
} from './table-types'

const TableColumnOperate = defineComponent({
  name: 'table-column-operate',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    field: {
      type: String,
      default: '',
      reqired: true,
    },
    operateProps: {
      type: Object as PropType<TableColumnExtraProps['operateProps']>,
    },
  },
  emits: ['filterOperate'],
  setup(props, { attrs, emit }) {
    const tableContext = inject(tableContextKey, {})

    const initFilterData = cloneDeep(unref(tableContext.filterData))

    const handleFilterSearch = () => {
      emit('filterOperate', 'search')
    }

    const handleFilterRefresh = () => {
      tableContext.filterData.value = cloneDeep(initFilterData)
      emit('filterOperate', 'refresh')
    }

    const isButtonVisible = (btn: TableColumnOperateBtnProps, scope: any) => {
      return typeof btn.show === 'function' ? btn.show?.(scope) : btn.show
    }

    const renderSingleButton = (
      btn: TableColumnOperateBtnProps,
      scope: any,
    ) => {
      return (
        <ElButton
          link
          type={btn.type || 'primary'}
          disabled={
            typeof btn.disabled === 'function'
              ? btn.disabled?.(scope)
              : btn.disabled
          }
          onClick={() => btn.handler?.(scope)}>
          {btn.label}
        </ElButton>
      )
    }

    const renderDropdown = (scope: any, btn: TableColumnOperateBtnProps) => {
      return (
        <ElDropdown
          trigger="click"
          v-slots={{
            dropdown: () => (
              <ElDropdownMenu>
                {btn.children?.map((childBtn) =>
                  isButtonVisible(childBtn, scope) !== false ? (
                    <ElDropdownItem>
                      {renderSingleButton(childBtn, scope)}
                    </ElDropdownItem>
                  ) : null,
                )}
              </ElDropdownMenu>
            ),
          }}>
          <ElButton type="primary" link icon={MoreFilled} />
        </ElDropdown>
      )
    }

    const renderButtons = (scope: any, list?: TableColumnOperateBtnProps[]) => {
      const children = list?.map((btn) => {
        return btn.children?.length
          ? renderDropdown(scope, btn)
          : isButtonVisible(btn, scope) !== false
          ? renderSingleButton(btn, scope)
          : null
      })

      return (
        <ElSpace
          size={0}
          spacer={h(ElDivider, {
            direction: 'vertical',
          })}>
          {children?.filter((item) => item !== null)}
        </ElSpace>
      )
    }

    const renderDefaultSlot = (scope: any) => {
      const { operateProps = {} } = props
      const { filterBtnsProps, btns, limit } = operateProps
      const finalBtns =
        typeof limit === 'undefined'
          ? btns
          : btns?.slice(0, limit).concat({
              children: btns?.slice(limit),
            })

      if (!filterBtnsProps) {
        return renderButtons(scope, finalBtns)
      }
      return (
        <ElTableColumn
          align="center"
          v-slots={{
            header: () => (
              <ElSpace size={8}>
                <ElIcon color="#409EFF">
                  <CaretLeft />
                </ElIcon>
                <ElButton
                  type="primary"
                  icon={Search}
                  onClick={handleFilterSearch}>
                  查询
                </ElButton>
                <ElButton icon={Refresh} onClick={handleFilterRefresh}>
                  重置
                </ElButton>
              </ElSpace>
            ),
            default: (scope: any) => renderButtons(scope, finalBtns),
          }}
          {...attrs}
        />
      )
    }

    return () => {
      console.log('render: ', 'table-column-operate')
      const { label, field, operateProps = {} } = props
      const { filterBtnsProps } = operateProps

      return (
        <ElTableColumn
          label={label}
          prop={field}
          align="center"
          v-slots={{
            header: () => label,
            default: renderDefaultSlot,
          }}
          {...(filterBtnsProps ? undefined : attrs)}
        />
      )
    }
  },
})

export default TableColumnOperate
