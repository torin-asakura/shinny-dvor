import React           from 'react'
import { FC }          from 'react'

import { AllArticles } from '@fragments/blog-articles-fragment'
import { Footer }      from '@fragments/blog-footer-fragment'
import { Navigation }  from '@fragments/blog-navigation-fragment'
import { Column }      from '@ui/layout'

import { Seo }         from './seo.component'

interface Props {
  ogCover: string
  SEO: any
  data: any
}

const IndexPage: FC<Props> = ({
  ogCover,
  SEO,
  data: { contacts, posts, navigation, availableRadii, fragments, carBodies, services },
}) => (
  <Column width='100%' alignItems='center'>
    <Seo ogCover={ogCover} SEO={SEO} />
    <Navigation
      availableRadiiData={availableRadii}
      navigationData={navigation}
      fragmentsData={fragments}
      carBodiesData={carBodies}
      servicesData={services}
    />
    <AllArticles fragmentsData={fragments} postsData={posts} />
    <Footer fragmentsData={fragments} contactsData={contacts} />
  </Column>
)

export default IndexPage
