import { useReactiveVar } from '@apollo/client'

import React              from 'react'
import { FC }             from 'react'

import { AllArticles }    from '@fragments/articles-fragment'
import { Article }        from '@fragments/articles-fragment'
import { Footer }         from '@fragments/footer-fragment'
import { Navigation }     from '@fragments/navigation-fragment'
import { Screen }         from '@store/articles'
import { ARTICLE }        from '@store/articles'
import { ALL_ARTICLES }   from '@store/articles'
import { Condition }      from '@ui/condition'
import { Column }         from '@ui/layout'
import { screenVar }      from '@store/articles'

import { Seo }            from './seo.component'

interface Props {
  ogCover: string
  SEO: any
  data: any
}

const IndexPage: FC<Props> = ({
  ogCover,
  SEO,
  data: { contacts, posts, navigation, availableRadii, fragments, carBodies, services },
}) => {
  const screen = useReactiveVar<Screen>(screenVar)

  return (
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
      <Condition match={screen === ALL_ARTICLES}>
        <AllArticles fragmentsData={fragments} navigationData={navigation} postsData={posts} />
      </Condition>
      <Condition match={screen === ARTICLE}>
        <Article fragmentsData={fragments} />
      </Condition>
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}
export default IndexPage
