import React              from 'react'
import { FC }             from 'react'
import { useReactiveVar } from '@apollo/client'

import { screenVar }      from '@store/services'
import { Screen }         from '@store/services'
import { Column }         from '@ui/layout'
import { ALL_SERVICES }   from '@store/services'
import { SERVICE }        from '@store/services'
import { Condition }      from '@ui/condition'
import { Navigation }     from '@fragments/navigation-fragment'
import { Footer }         from '@fragments/footer-fragment'
import { Articles }       from '@fragments/articles-fragment'
import { Service }        from '@site/service-fragment'

import { AllServices }    from './all-services'

const ServicesPage: FC = () => {
  const screen = useReactiveVar<Screen>(screenVar)
  return (
    <Column width='100%'>
      <Navigation location='header' />
      <Condition match={screen === ALL_SERVICES}>
        <AllServices />
      </Condition>
      <Condition match={screen === SERVICE}>
        <Service />
        <Articles />
      </Condition>
      <Footer />
    </Column>
  )
}
export default ServicesPage
