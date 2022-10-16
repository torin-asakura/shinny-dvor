export interface ExtendedContentAddons {
  contentAddons: {
    title: string
    content: string
    role: string
  }
}

export interface ContentAddons {
  contentAddons: {
    title: string
    role: string
  }
}

export interface InitialProps {
  fragmentsData: ExtendedContentAddons[]
  availableRadiiData: ContentAddons[]
  carBodiesData: ContentAddons[]
  servicesData: ContentAddons[]
}
