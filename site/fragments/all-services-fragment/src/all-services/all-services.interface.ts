export interface Service {
  contentAddons: {
    title: string
    content: string
    role: string
  }
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
  contentAddons: {
    title: string
    content: string
    role: string
    highlightedtext: string
  }
}

export interface AllServicesProps {
  servicesData: Service[]
  fragmentsData: Fragment[]
}
