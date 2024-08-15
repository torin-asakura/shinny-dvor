import { NavigationItem } from '../navigation.interface.js'

export interface NavigationListMobileProps {
  active: number
  scrollY?: number
  navigation: NavigationItem[]
}
