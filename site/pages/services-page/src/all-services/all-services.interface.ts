export interface Service {
  contentAddons: {
    title: string
    content: string
    role: string
  }
  servicesParams: {
    role: string
    price: number
    description: string
    title: string
    addon: string
    image: {
      altText: string
      sourceUrl: string
    }
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

export interface AllServicesProps {
  serviceData: Service[]
  fragmentsData: Fragment[]
}
