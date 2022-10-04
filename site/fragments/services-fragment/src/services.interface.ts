export interface ContentAddons {
  contentAddons: {
    title: string
    role: string
  }
}

export interface ServicesParams {
  title: string
  description: string
  role: string
  object: string
  price: number
  image: {
    altText: string
    sourceUrl: string
  }
}

export interface Service {
  contentAddons: ContentAddons
  servicesParams: ServicesParams
}

export interface ServicesProps {
  servicesData: Service[]
  availableRadiiData: ContentAddons[]
}
