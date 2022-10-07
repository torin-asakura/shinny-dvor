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

interface Fragment {
  contentAddons: {
    title: string
    content: string
    role: string
    highlightedtext: string
  }
}

export interface ContactsProps {
  contactsData: ContactAddons[]
  fragmentsData: Fragment[]
}
