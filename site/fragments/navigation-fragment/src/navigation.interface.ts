export interface NavigationItem {
  contentAddons: {
    title: string
    content: string
  }
}

interface NavigationData {
  contentAddons: {
    title: string
    content: string
    role: string
  }
}

export interface AvailableRadiusData {
  contentAddons: {
    title: string
    role: string
  }
}

export interface Fragment {
  contentAddons: {
    title: string
    content: string
    role: string
    highlightedtext: string
  }
}

export interface NavigationProps {
  active: number
  navigationData: NavigationData[]
  availableRadiiData: AvailableRadiusData[]
  fragmentsData: Fragment[]
}
