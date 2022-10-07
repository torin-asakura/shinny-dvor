interface Radius {
  contentAddons: {
    title: string
    role: string
  }
}

export interface SelectorProps {
  closeTitle: string
  selectDiameterTitle: string
  radii: Radius[]
  setOpenSelector: (openSelector: boolean) => void
}
