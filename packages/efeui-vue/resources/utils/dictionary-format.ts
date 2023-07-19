export const dictionaryFormat = (
  value: string | number | boolean,
  params = {} as {
    labelKey?: string
    valueKey?: string
    options?: Record<string, any>[]
    placeholder?: string
  },
) => {
  const {
    labelKey = 'label',
    valueKey = 'value',
    options = [],
    placeholder = '-',
  } = params
  const node = options.find((item) => item[valueKey] === value)
  return node ? node[labelKey] : placeholder
}
