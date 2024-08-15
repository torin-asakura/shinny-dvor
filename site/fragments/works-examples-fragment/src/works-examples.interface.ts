interface Fragment {
  contentAddons: {
    title: string
    content: string
    fragmentId: string
    highlightedtext: string
  }
}

interface WorkResult {
  workResultParams: {
    description: string
    price: number
    time: string
    fragmentId: string
    photos: {
      firstPhoto: {
        sourceUrl: string
      }
      secondPhoto: {
        sourceUrl: string
      }
    }
  }
}

export interface WorksExamplesProps {
  fragmentsData: Fragment[]
  workResultsData: WorkResult[]
}
