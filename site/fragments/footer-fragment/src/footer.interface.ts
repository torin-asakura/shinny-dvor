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

interface FooterAddons {
  content: string
  highlightedtext: string
  role: string
  title: string
}

export interface FooterProps {
  contactsData: ContactAddons[]
  footerData: FooterAddons[]
}
