import { dateFormats, hourFormats } from 'core/constants/dateTime'

export type DateFormats = 'long' | 'short'

export type HourFormats = keyof typeof hourFormats
