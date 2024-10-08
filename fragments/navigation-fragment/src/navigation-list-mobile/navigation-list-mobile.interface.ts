import type { NavigationItem } from '../navigation.interface.js'

export interface NavigationListMobileProps {
  active: number | undefined
  scrollY?: number
  navigation: Array<NavigationItem>
}
