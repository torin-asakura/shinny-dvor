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

interface Props {
  data: any
}

const IndexPage: FC<Props> = ({
  data: { contacts, posts, navigation, availableRadii, fragments },
}) => {
  const screen = useReactiveVar<Screen>(screenVar)

  return (
    <Column width='100%' alignItems='center'>
      <Navigation active={2} availableRadiiData={availableRadii} navigationData={navigation} />
      <Condition match={screen === ALL_ARTICLES}>
        <AllArticles fragmentsData={fragments} postsData={posts} />
      </Condition>
      <Condition match={screen === ARTICLE}>
        <Article fragmentsData={fragments} />
      </Condition>
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}
export default IndexPage
