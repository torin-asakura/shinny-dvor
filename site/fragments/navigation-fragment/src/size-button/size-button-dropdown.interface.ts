import { AvailableRadiusData } from '../navigation.interface'

export interface SizeButtonDropdownProps {
  setOpen: (open: boolean) => void
  radii: AvailableRadiusData[]
}
