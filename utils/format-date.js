import { format } from 'date-fns'
import es from 'date-fns/locale/es'

/**
 * @param {Date} date
 */
export default function formatDate (date) {
  return format(date, 'dd \'de\' MMMM yyyy', {
    locale: es
  })
}
