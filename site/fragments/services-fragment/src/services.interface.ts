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
  addon: string
  variant: string
  image: {
    altText: string
    sourceUrl: string
  }
  price: {
    r12: number
    r13: number
    r14: number
    r15: number
    r16: number
    r17: number
    r18: number
    r19: number
    r20: number
    r21: number
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
    price: number
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
    role: string
    highlightedtext: string
  }
}

export interface ServicesProps {
  servicesData: Service[]
  fragmentsData: Fragment[]
  availableRadiiData: ContentAddons[]
}
