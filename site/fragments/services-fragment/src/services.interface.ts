export interface ContentAddons {
  contentAddons: {
    title: string
    fragmentId: string
  }
}

export interface ServicesParams {
  uri: string
  servicesParams: {
    title: string
    description: string
    fragmentId: string
    addon: string
    variant: string
    image: {
      altText: string
      sourceUrl: string
    }
    price: any
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
      price: number
    }
  }
}

export interface Service {
  contentAddons: ContentAddons
  servicesParams: ServicesParams
}

interface Fragment {
  contentAddons: {
    title: string
    content: string
    fragmentId: string
    highlightedtext: string
  }
}

export interface ServicesProps {
  servicesData: Service[]
  fragmentsData: Fragment[]
  availableRadiiData: ContentAddons[]
}
