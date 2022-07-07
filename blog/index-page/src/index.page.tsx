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

const IndexPage: FC = () => {
  const screen = useReactiveVar<Screen>(screenVar)

  return (
    <Column height='auto' width='100%' alignItems='center'>
      <Navigation />
      <Condition match={screen === ALL_ARTICLES}>
        <AllArticles />
      </Condition>
      <Condition match={screen === ARTICLE}>
        <Article />
      </Condition>
      <Footer />
    </Column>
  )
}
export default IndexPage
