import type { UseContactsType } from './use-contacts.interface.js'

import { extractFragment }      from '@globals/data'

export const useContacts: UseContactsType = (props) => {
  const { contactsData, fragmentsData } = props

  const contactsTitle = extractFragment('contentAddons', 'contacts', fragmentsData).title
  const addressTitle = extractFragment('contentAddons', 'address', fragmentsData).title
  const workingHoursTitle = extractFragment('contentAddons', 'working-hours', fragmentsData).title

  const contactsObj = extractFragment('contactAddons', 'info', contactsData)

  const telegramContanctsObj = extractFragment('contactAddons', 'linkTelegram', contactsData)

  const address = contactsObj?.address
  const workingHours = contactsObj?.workinghours
  const telephone = contactsObj?.telephone
  const email = contactsObj?.email
  const linkVk = contactsObj?.linkVk
  const linkTelegram = telegramContanctsObj?.address

  return {
    addressTitle,
    address,
    workingHoursTitle,
    workingHours,
    contactsTitle,
    telephone,
    email,
    linkVk,
    linkTelegram,
  }
}
