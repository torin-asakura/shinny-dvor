interface Fragment {
  title: string
  content: string
  highlightedtext: string
  fragmentId: string
}

interface ContentAddons {
  contentAddons: {
    title: string
    fragmentId: string
  }
}

export interface ServiceProps {
  fragmentsData: Fragment[]
  carBodiesData: ContentAddons[]
  servicesData: any
  availableRadiiData: ContentAddons[]
}
