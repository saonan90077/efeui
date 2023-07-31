import type {
  FormItemType,
  FormItemExtraProps,
  FormItemProps,
} from '../components'

const generateConfig = (
  type: FormItemType,
  field: string,
  label?: string,
  extraProps?: FormItemExtraProps,
  show?: boolean | (() => boolean),
): FormItemProps => {
  return {
    type,
    field,
    label,
    extraProps,
    show,
  }
}

export class FormHelper {
  slot(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('slot', field, label, extraProps, show)
  }
  show(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('show', field, label, extraProps, show)
  }
  inputRange(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('inputRange', field, label, extraProps, show)
  }
  input(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('input', field, label, extraProps, show)
  }
  int(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('int', field, label, extraProps, show)
  }
  float(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('float', field, label, extraProps, show)
  }
  select(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('select', field, label, extraProps, show)
  }
  checkbox(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('checkbox', field, label, extraProps, show)
  }
  radio(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('radio', field, label, extraProps, show)
  }
  switch(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('switch', field, label, extraProps, show)
  }
  date(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('date', field, label, extraProps, show)
  }
  time(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('time', field, label, extraProps, show)
  }
  timeSelect(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('timeSelect', field, label, extraProps, show)
  }
  cascader(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('cascader', field, label, extraProps, show)
  }
  treeSelect(
    field: string,
    label?: string,
    extraProps?: FormItemExtraProps,
    show?: boolean | (() => boolean),
  ) {
    return generateConfig('treeSelect', field, label, extraProps, show)
  }
}

export const formHelper = new FormHelper()
