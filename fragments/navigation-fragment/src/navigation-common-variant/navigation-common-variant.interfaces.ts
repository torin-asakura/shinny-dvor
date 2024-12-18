import type { NavigationItem } from '../navigation.interface.js'

export interface NavigationCommonVariantProps {
  drawer: boolean
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>
  scrollY?: number
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
