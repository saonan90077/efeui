export interface DictionaryFormatParams {
  labelKey?: string
  valueKey?: string
  options?: Record<string, any>[] | (() => Record<string, any>[])
  placeholder?: string
}

export const dictionaryFormat = (
  value: string | number | boolean,
  params = {} as DictionaryFormatParams,
) => {
  const {
    labelKey = 'label',
    valueKey = 'value',
    options,
    placeholder = '-',
  } = params
  const _options = typeof options === 'function' ? options() : options

  const node = _options?.find((item) => item[valueKey] === value)
  return node ? node[labelKey] : placeholder
}
