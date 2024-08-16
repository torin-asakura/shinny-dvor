import type { SEOInt }  from '@globals/data'
import type { DataInt } from '@globals/data'

export interface PostPageClientProps {
  ogCover: string
  SEO: SEOInt
  data: DataInt
}

type ParamsType = {
  uri: string
}

export interface SeoProps {
  ogCover: string
  SEO: SEOInt
}

export type PostPageProps = ({ params }: { params: ParamsType }) => Promise<JSX.Element>

export type PostPageServerProps = ({
  params,
}: {
  params: ParamsType
}) => Promise<PostPageClientProps>
