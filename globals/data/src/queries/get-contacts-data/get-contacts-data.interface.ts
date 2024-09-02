import type { ContactsQueryDataType } from '@globals/data'

type ContactsType = Exclude<ContactsQueryDataType['contactItems'], null | undefined>
export type ContactsDataType = ContactsType['nodes']
