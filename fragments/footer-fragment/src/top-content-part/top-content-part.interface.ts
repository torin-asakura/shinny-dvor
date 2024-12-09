export interface TopContentPartProps {
  linkTelegram: string
  linkVk: string
  navigationItems: Array<{ contentAddons: { title: string; content: string } }>
  mainPage: {
    content: string
  }
}
