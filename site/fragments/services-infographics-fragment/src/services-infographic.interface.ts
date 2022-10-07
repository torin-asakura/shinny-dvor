export interface Fragment {
  contentAddons: {
    title: string
    content: string
    role: string
    highlightedtext: string
  }
}

interface Ui {
  contentAddons: {
    image: {
      altText: string
      sourceUrl: string
    }
    role: string
  }
}

export interface ServicesInfographicsProps {
  uiData: Ui[]
  fragmentsData: Fragment[]
}
