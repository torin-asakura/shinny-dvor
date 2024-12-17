import type { NavigationItem } from '../navigation.interface.js'

export interface NavigationDesktopVariantProps {
  active?: number
  mainNavigationItem: {
    content: string
  }
  navigationIndexItems: Array<NavigationItem>
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  signUp: {
    title?: string
  }
}
