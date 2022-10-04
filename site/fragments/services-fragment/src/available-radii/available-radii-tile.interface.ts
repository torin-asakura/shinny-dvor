import { ContentAddons } from '../services.interface'

export interface AvailableRadiiTileProps {
  setOpen: (open: boolean) => void
  radii: ContentAddons[]
}
