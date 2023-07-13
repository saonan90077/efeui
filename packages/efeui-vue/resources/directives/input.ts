import { ObjectDirective, DirectiveBinding } from 'vue'
import { useDebounceFn } from '@vueuse/core'

const nodeList: Map<HTMLElement, { documentHandle: any }> = new Map()

const transformValue = (value: string, arg?: string, decimals = 2) => {
  if (arg === 'int') {
    value = value.replace(/[^\d]/g, '')
    // 去掉开头0
    value && (value = `${+value}`)
  }
  if (arg === 'float') {
    value = value.replace(/[^\d.]/g, '')
    value = value.replace(/^\./g, '')
    value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
    const reg = new RegExp(`^(\\-)*(\\d+)\\.(\\d{${decimals}}).*$`)
    value = value.replace(reg, '$1$2.$3')
    // 去掉开头多余的0
    if (value) {
      const arr = value.split('.')
      value = `${+(arr[0] + (arr[1] === undefined ? '' : '.' + arr[1]))}`
    }
  }
  return value
}

const createDocumentHandle = function (arg: string, decimals?: number) {
  return function (evt: any) {
    const target = evt.target
    target.value = transformValue(target.value, arg, decimals)
    target.dispatchEvent(new Event('input'))
  }
}

export const inputDirective: ObjectDirective = {
  beforeMount: (el: HTMLElement, binding: DirectiveBinding) => {
    if (!['int', 'float'].includes(binding.arg!)) {
      return
    }
    if (!nodeList.has(el)) {
      nodeList.set(el, {
        documentHandle: useDebounceFn(
          createDocumentHandle(binding.arg!, binding.value),
          200,
        ),
      })
    }
    el.addEventListener('input', nodeList.get(el)?.documentHandle)
  },
  unmounted(el: HTMLElement, binding: DirectiveBinding) {
    if (!['int', 'float'].includes(binding.arg!)) {
      return
    }
    el.addEventListener('input', nodeList.get(el)?.documentHandle)
    nodeList.delete(el)
  },
}
