export const valueFormat = (
  value: string | number | null | undefined,
  options = {} as {
    placeholder?: string
  },
) => {
  const { placeholder = '-' } = options
  return ['', undefined, null].includes(value as any) ? placeholder : value
}
