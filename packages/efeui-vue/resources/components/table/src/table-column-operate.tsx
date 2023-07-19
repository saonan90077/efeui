import { PropType, defineComponent, h, inject } from 'vue'
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
import {
  TableColumnExtraProps,
  TableColumnOperateBtnProps,
  tableInject,
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
    const { model } = inject(tableInject)!

    const initFilterData = {
      ...model.value.filterData,
    }

    const isButtonVisible = (btn: TableColumnOperateBtnProps, scope: any) => {
      return typeof btn.show === 'function' ? btn.show?.(scope) : btn.show
    }

    const renderButton = (btn: TableColumnOperateBtnProps, scope: any) => {
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

    const renderChildren = (
      scope: any,
      list?: TableColumnOperateBtnProps[],
    ) => {
      const children = list?.map((btn) => {
        return btn.children?.length ? (
          <ElDropdown
            trigger="click"
            v-slots={{
              dropdown: () => (
                <ElDropdownMenu>
                  {btn.children?.map((childBtn) =>
                    isButtonVisible(childBtn, scope)! == false ? (
                      <ElDropdownItem>
                        {renderButton(childBtn, scope)}
                      </ElDropdownItem>
                    ) : null,
                  )}
                </ElDropdownMenu>
              ),
            }}>
            <ElButton type="primary" link icon={MoreFilled} />
          </ElDropdown>
        ) : isButtonVisible(btn, scope) !== false ? (
          renderButton(btn, scope)
        ) : null
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

    const handleFilterSearch = () => {
      emit('filterOperate', 'search')
    }
    const handleFilterRefresh = () => {
      if (model.value) {
        model.value.filterData = {
          ...initFilterData,
        }
      }
      emit('filterOperate', 'refresh')
    }

    return () => {
      console.log('render: ', 'table-column-operate')
      const { label, field, operateProps = {} } = props
      const { filterBtnsProps, btns, limit } = operateProps
      const finalBtns =
        typeof limit === 'undefined'
          ? btns
          : btns?.slice(0, limit).concat({
              children: btns?.slice(limit),
            })

      return (
        <ElTableColumn
          label={label}
          prop={field}
          align="center"
          v-slots={{
            header: () => <>{label}</>,
            default: (scope: any) =>
              filterBtnsProps ? (
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
                    default: (scope: any) => renderChildren(scope, finalBtns),
                  }}
                  {...attrs}
                />
              ) : (
                renderChildren(scope, finalBtns)
              ),
          }}
          {...(filterBtnsProps ? undefined : attrs)}
        />
      )
    }
  },
})

export default TableColumnOperate
