interface ContentAddons {
  role: string
  title: string
  image: {
    sourceUrl: string
    altText: string
  }
}

export interface ServicesInfographicsProps {
  infographicsData: ContentAddons[]
}
