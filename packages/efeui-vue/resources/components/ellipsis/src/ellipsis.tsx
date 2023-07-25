import {
  computed,
  defineComponent,
  onBeforeUnmount,
  ref,
  shallowRef,
  unref,
  type SlotsType,
} from 'vue'
import runes from 'runes2'

import { useResizeObserver, useToggle } from '@vueuse/core'

import { debounce } from 'lodash-es'

import { ellipsisProps } from './ellipsis-types'

import './ellipsis.scss'

interface EllipsisedValue {
  leading?: string
  tailing?: string
}

function pxToNumber(value: string | null) {
  if (!value) return 0
  const match = value.match(/^\d*(\.\d*)?/)
  return match ? Number(match[0]) : 0
}
// https://mobile.ant.design/zh/components/ellipsis/
const Ellipsis = defineComponent({
  name: 'efe-ellipsis',
  inheritAttrs: false,
  props: ellipsisProps,
  slots: Object as SlotsType<{
    'expand-text'?: any
    'collapse-text'?: any
  }>,
  setup(props, { attrs, slots, expose }) {
    const rootRef = shallowRef<HTMLDivElement>()
    const expandElRef = shallowRef<HTMLAnchorElement>()
    const collapseElRef = shallowRef<HTMLAnchorElement>()

    const ellipsised = ref<EllipsisedValue>({})
    // 展开
    const [expanded, setExpanded] = useToggle(props.defaultExpanded)
    // 超出
    const [exceeded, setExceeded] = useToggle(false)

    expose({
      exceeded,
      setExpanded,
    })

    const chars = computed(() => runes(props.content))

    function getSubString(start: number, end: number) {
      return chars.value.slice(start, end).join('')
    }

    function calcEllipsised() {
      const root = unref(rootRef)
      if (!root) return

      const originDisplay = root.style.display
      root.style.display = 'block'

      const originStyle = window.getComputedStyle(root)
      const container = document.createElement('div')

      const styleNames: string[] = Array.prototype.slice.apply(originStyle)
      styleNames.forEach((name) => {
        container.style.setProperty(name, originStyle.getPropertyValue(name))
      })

      root.style.display = originDisplay

      container.style.height = 'auto'
      container.style.minHeight = 'auto'
      container.style.maxHeight = 'auto'
      container.style.textOverflow = 'clip'
      container.style.whiteSpace = 'normal'
      container.style.webkitLineClamp = 'unset'
      container.style.display = 'block'

      const lineHeight = pxToNumber(originStyle.lineHeight)
      const maxHeight = Math.floor(
        lineHeight * (props.rows + 0.5) +
          pxToNumber(originStyle.paddingTop) +
          pxToNumber(originStyle.paddingBottom),
      )

      container.innerText = props.content
      document.body.appendChild(container)

      if (container.offsetHeight <= maxHeight) {
        setExceeded(false)
      } else {
        setExceeded(true)
        const end = props.content.length

        const collapseEl = collapseElRef.value?.innerHTML
        const expandEl = expandElRef.value?.innerHTML
        const actionText = expanded.value ? collapseEl : expandEl

        const check = (left: number, right: number): EllipsisedValue => {
          if (right - left <= 1) {
            if (props.direction === 'end') {
              return {
                leading: getSubString(0, left) + '...',
              }
            } else {
              return {
                tailing: '...' + getSubString(right, end),
              }
            }
          }
          const middle = Math.round((left + right) / 2)
          if (props.direction === 'end') {
            container.innerHTML = getSubString(0, middle) + '...' + actionText
          } else {
            container.innerHTML = actionText + '...' + getSubString(middle, end)
          }

          if (container.offsetHeight <= maxHeight) {
            if (props.direction === 'end') {
              return check(middle, right)
            } else {
              return check(left, middle)
            }
          } else {
            if (props.direction === 'end') {
              return check(left, middle)
            } else {
              return check(middle, right)
            }
          }
        }

        const checkMiddle = (
          leftPart: [number, number],
          rightPart: [number, number],
        ): EllipsisedValue => {
          if (
            leftPart[1] - leftPart[0] <= 1 &&
            rightPart[1] - rightPart[0] <= 1
          ) {
            return {
              leading: getSubString(0, leftPart[0]) + '...',
              tailing: '...' + getSubString(rightPart[1], end),
            }
          }
          const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2)
          const rightPartMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2)
          container.innerHTML =
            getSubString(0, leftPartMiddle) +
            '...' +
            actionText +
            '...' +
            getSubString(rightPartMiddle, end)
          if (container.offsetHeight <= maxHeight) {
            return checkMiddle(
              [leftPartMiddle, leftPart[1]],
              [rightPart[0], rightPartMiddle],
            )
          } else {
            return checkMiddle(
              [leftPart[0], leftPartMiddle],
              [rightPartMiddle, rightPart[1]],
            )
          }
        }

        const middle = Math.floor((0 + end) / 2)
        ellipsised.value =
          props.direction === 'middle'
            ? checkMiddle([0, middle], [middle, end])
            : check(0, end)
      }
      document.body.removeChild(container)
    }

    const renderContent = () => {
      const { leading, tailing } = unref(ellipsised)
      const { content } = props
      if (!unref(exceeded)) {
        return content
      }
      if (unref(expanded)) {
        return (
          <>
            {content}
            {slots['collapse-text']?.()}
          </>
        )
      }
      return (
        <>
          {leading}
          {slots['expand-text']?.()}
          {tailing}
        </>
      )
    }

    const debounceCalcEllipsised = debounce(calcEllipsised, 250, {
      leading: true,
    })

    const { stop } = useResizeObserver(rootRef, debounceCalcEllipsised)
    onBeforeUnmount(() => {
      stop()
    })

    return () => {
      console.log('render: ', 'efe-ellipsis')

      return (
        <div ref={rootRef} class="efe-ellipsis" {...attrs}>
          {renderContent()}
        </div>
      )
    }
  },
})

export default Ellipsis
