interface NavigationItem {
  contentAddons: {
    title: string
    content: string
  }
}

export interface NavigationProps {
  navigation: NavigationItem[]
}
