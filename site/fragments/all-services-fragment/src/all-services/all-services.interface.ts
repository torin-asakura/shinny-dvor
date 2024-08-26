// TODO interface
type ContentAddonsInt = any

export interface Service {
  contentAddons: ContentAddonsInt
  servicesParams: {
    fragmentId: string
    price: any
    description: string
    averagePrice: number
    title: string
    addon: string
    image: {
      altText: string
      sourceUrl: string
    }
    workexamples: {
      firstexample: {
        image: {
          altText: string
          sourceUrl: string
        }
        title: string
      }
      secondexample: {
        image: {
          altText: string
          sourceUrl: string
        }
        title: string
      }
    }
    additionalservice: {
      title: string
      price: string
    }
  }
}

export interface Fragment {
  contentAddons: ContentAddonsInt
}

export interface AllServicesProps {
  servicesData: Array<Service>
  fragmentsData: Array<Fragment>
}
