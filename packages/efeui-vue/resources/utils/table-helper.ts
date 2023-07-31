import type {
  TableColumnExtraProps,
  TableColumnProps,
  TableColumnType,
} from '../components'

const generateConfig = (
  type: TableColumnType,
  field: string,
  label?: string,
  extraProps?: TableColumnExtraProps,
  show?: boolean | (() => boolean),
): TableColumnProps => {
  return {
    type,
    field,
    label,
    extraProps,
    show,
  }
}

export class TableHelper {
  slot(
    field: string,
    label?: string,
    extraProps?: TableColumnExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('slot', field, label, extraProps, show)
  }
  default(
    field: string,
    label?: string,
    extraProps?: TableColumnExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('default', field, label, extraProps, show)
  }
  date(
    field: string,
    label?: string,
    extraProps?: TableColumnExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('date', field, label, extraProps, show)
  }
  dictionary(
    field: string,
    label?: string,
    extraProps?: TableColumnExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('dictionary', field, label, extraProps, show)
  }
  operate(
    field: string,
    label?: string,
    extraProps?: TableColumnExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('operate', field, label, extraProps, show)
  }
}

export const tableHelper = new TableHelper()
