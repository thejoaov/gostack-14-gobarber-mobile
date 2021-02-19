import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FormatStrings } from './types'

const FormatDate = {
  /**
   * Format date
   */
  formatString: (date: Date, string: FormatStrings = 'dd/MM/yyyy'): string =>
    format(date, string, {
      locale: ptBR,
    }),
}

export default FormatDate
