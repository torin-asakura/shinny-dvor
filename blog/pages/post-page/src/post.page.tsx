import React          from 'react'
import { FC }         from 'react'

import { Article }    from '@fragments/blog-articles-fragment'
import { Footer }     from '@fragments/footer-fragment'
import { Navigation } from '@fragments/navigation-fragment'
import { Column }     from '@ui/layout'

import { Seo }        from './seo.component'

interface Props {
  data: any
  ogCover: string
  SEO: {
    title: string
    metaDesc: string
  }
}

const PostPage: FC<Props> = ({
  ogCover,
  SEO,
  data: { contacts, postBy, navigation, availableRadii, fragments, carBodies, services },
}) => (
  <Column width='100%' alignItems='center'>
    <Seo ogCover={ogCover} SEO={SEO} />
    <Navigation
      active={2}
      availableRadiiData={availableRadii}
      navigationData={navigation}
      fragmentsData={fragments}
      carBodiesData={carBodies}
      servicesData={services}
    />
    <Article postData={postBy} fragmentsData={fragments} />
    <Footer fragmentsData={fragments} contactsData={contacts} />
  </Column>
)

export default PostPage
