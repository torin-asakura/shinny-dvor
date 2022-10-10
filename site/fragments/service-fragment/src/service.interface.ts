interface Fragment {
  title: string
  content: string
  highlightedtext: string
  role: string
}

interface CarBody {
  contentAddons: {
    title: string
    role: string
  }
}

export interface ServiceProps {
  fragmentsData: Fragment[]
  carBodiesData: CarBody[]
}
