import {
  defineComponent,
  shallowRef,
  watchPostEffect,
  type SlotsType,
} from 'vue'

import { CountUp } from 'countup.js'

import { countupProps } from './countup-types'

import './countup.scss'

const Countup = defineComponent({
  name: 'efe-countup',
  inheritAttrs: false,
  props: countupProps,
  slots: Object as SlotsType<{
    prefix?: any
    suffix?: any
  }>,
  setup(props, { slots, expose }) {
    const countupRef = shallowRef()
    const countupInstance = shallowRef<CountUp>()

    const initCountup = () => {
      const countUp = new CountUp(
        countupRef.value!,
        props.endVal,
        props.options,
      )
      if (!countUp.error) {
        countUp.start()
        countupInstance.value = countUp
        return
      }
      console.error(countUp.error)
    }

    watchPostEffect(() => {
      if (!countupInstance.value) {
        initCountup()
        return
      }
      countupInstance.value.update(props.endVal)
    })

    expose({
      $countup: countupInstance,
    })

    return () => {
      console.log('render: ', 'efe-countup')

      return (
        <div class="efe-countup">
          {slots.prefix?.()}
          <span ref={countupRef}></span>
          {slots.suffix?.()}
        </div>
      )
    }
  },
})

export default Countup
