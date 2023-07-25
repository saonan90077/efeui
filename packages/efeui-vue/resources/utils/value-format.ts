export const valueFormat = (
  value: any,
  options = {} as {
    placeholder?: string
  },
) => {
  const { placeholder } = options
  return ['', undefined, null].includes(value as any) ? placeholder : value
}
