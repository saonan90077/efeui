import dayjs from 'dayjs'
import { valueFormat } from './value-format'

export class DateHelper {
  dayjs: typeof dayjs
  constructor() {
    this.dayjs = dayjs
  }
  format(
    date?: string | number | dayjs.Dayjs | Date | null,
    options = {} as {
      format?: string
    },
  ) {
    if (!date) {
      return valueFormat(date, {
        placeholder: '-',
      })
    }
    const { format = 'YYYY-MM-DD HH:mm:ss' } = options
    return this.dayjs(date).format(format)
  }
}

export const dateHelper = new DateHelper()
