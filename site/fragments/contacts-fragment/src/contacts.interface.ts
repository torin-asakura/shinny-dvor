import type { ContactsDataType as GlobalContactsDataType } from '@globals/data'
import type { FragmentsDataType }                          from '@globals/data'

export interface ContactsProps {
  isYandexTurbo?: boolean
  contactsData: GlobalContactsDataType
  fragmentsData: FragmentsDataType
}

export type ContactsDataType = {
  addressTitle: string
  address: string
  workingHoursTitle: string
  workingHours: string
  contactsTitle: string
  telephone: string
  email: string
  linkTelegram: string
  linkVk: string
}
