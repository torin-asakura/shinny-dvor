import type { NavigationItem } from '../navigation.interface.js'

export interface NavigationListProps {
  active: number | undefined
  scrollY?: number
  navigation: Array<NavigationItem>
}
