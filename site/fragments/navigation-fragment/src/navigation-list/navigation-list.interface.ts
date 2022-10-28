import { NavigationItem } from '../navigation.interface'

export interface NavigationListProps {
  active: number
  scrollY?: number
  navigation: NavigationItem[]
}
