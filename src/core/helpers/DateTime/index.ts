import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { hourFormats, dateFormats } from 'core/constants/dateTime'
import { DateFormats, HourFormats } from './types'

const DateTime = {
  /**
   * Format date
   */
  formatDate: (date: Date, formatString: DateFormats): string =>
    format(date, dateFormats[formatString], {
      locale: ptBR,
    }),

  /**
   * Format hour
   */
  formatHour: (hour: number, formatString: HourFormats): string =>
    format(new Date().setHours(hour), hourFormats[formatString], {
      locale: ptBR,
    }),
}

export default DateTime
