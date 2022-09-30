interface ContactAddons {
  address: string
  email: string
  linkFb: string
  linkVk: string
  role: string
  telephone: string
  title: string
  workingHours: string
}

export interface ContactsProps {
  contactsData: ContactAddons[]
}
