import { NavigationItem } from '../navigation.interface.js'

export interface NavigationListProps {
  active: number
  scrollY?: number
  navigation: NavigationItem[]
}
