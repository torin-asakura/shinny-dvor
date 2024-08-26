interface ContactAddons {
  address: string
  email: string
  linkFb: string
  linkVk: string
  fragmentId: string
  telephone: string
  title: string
  workingHours: string
}

interface Fragment {
  contentAddons: {
    title: string
    content: string
    fragmentId: string
    highlightedtext: string
  }
}

export interface ContactsProps {
  contactsData: Array<ContactAddons>
  fragmentsData: Array<Fragment>
}

export type ContactsDataType = {
  addressTitle: string
  address: string
  workingHoursTitle: string
  workingHours: string
  contactsTitle: string
  telephone: string
  email: string
  linkVk: string
  linkFb: string
}
