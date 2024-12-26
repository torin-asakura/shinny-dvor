import type { FragmentsDataType } from '@globals/data'
import type { ContactsDataType }  from '@globals/data'

export interface FooterProps {
  navigationItemsType?: string
  contactsData: ContactsDataType
  fragmentsData: FragmentsDataType
}
