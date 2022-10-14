export interface Fragment {
  contentAddons: {
    title: string
    content: string
    fragmentId: string
    highlightedtext: string
  }
}

interface Ui {
  contentAddons: {
    image: {
      altText: string
      sourceUrl: string
    }
    fragmentId: string
  }
}

export interface ServicesInfographicsProps {
  uiData: Ui[]
  fragmentsData: Fragment[]
}
