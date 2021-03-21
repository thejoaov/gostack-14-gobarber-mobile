import { format, Locale } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'
import { hourFormats, dateFormats } from 'core/constants/dateTime'
import i18n from 'i18n'
import { DateFormats, HourFormats } from './types'

const getLocalization = () => {
  const locales = {
    'pt-BR': ptBR,
    'en-US': enUS,
  }

  return locales[i18n.language as 'pt-BR' | 'en-US']
}

const DateTime = {
  /**
   * Format date
   */
  formatDate: (date: Date, formatString: DateFormats): string =>
    format(
      date,
      dateFormats[
        `${i18n.language.replace(
          '-',
          '',
        )}_${formatString}` as keyof typeof dateFormats
      ],
      {
        locale: getLocalization(),
      },
    ),
  /**
   * Format hour
   */
  formatHour: (hour: number, formatString: HourFormats): string =>
    format(new Date().setHours(hour), hourFormats[formatString], {
      locale: getLocalization(),
    }),
}

export default DateTime
