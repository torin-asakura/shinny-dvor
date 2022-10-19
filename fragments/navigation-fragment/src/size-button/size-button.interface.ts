import { NavigationItem } from '../navigation.interface'

export interface SizeButtonProps {
  active?: number
  title?: string
  radii?: NavigationItem[]
  isOpen?: boolean
  setOpen?: (isOpen: boolean) => void
}
