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

interface ContentAddons {
  content: string
  highlightedtext: string
  role: string
  title: string
}

export interface FooterProps {
  contactsData: ContactAddons[]
  footerData: ContentAddons[]
}
