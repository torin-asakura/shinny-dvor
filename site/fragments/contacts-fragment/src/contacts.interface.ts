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
  contactsData: ContactAddons[]
  fragmentsData: Fragment[]
}
