export type ServicesPageProps = () => Promise<JSX.Element>

export interface ServicesPageClientProps {
  // TODO any
  serverQueryData: SeoProps
}

export type ServicesPageServerProps = () => Promise<ServicesPageClientProps>

// TODO any
export interface SeoProps {
  ogCover: string
  SEO: any
}
