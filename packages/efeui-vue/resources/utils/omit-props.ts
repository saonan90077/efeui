export function omitProps<T extends object>(obj: T, keys: (keyof T)[]) {
  return Object.keys(obj).reduce((ret, key) => {
    if (!keys.includes(key as keyof T)) {
      ret[key as keyof T] = obj[key as keyof T]
    }
    return ret
  }, {} as Partial<T>)
}
