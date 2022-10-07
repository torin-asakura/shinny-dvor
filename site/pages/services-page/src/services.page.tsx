import { useReactiveVar }  from '@apollo/client'

import React               from 'react'
import { FC }              from 'react'
import { useLayoutEffect } from 'react'

import { Articles }        from '@fragments/articles-fragment'
import { Footer }          from '@fragments/footer-fragment'
import { Navigation }      from '@fragments/navigation-fragment'
import { Service }         from '@site/service-fragment'
import { Screen }          from '@store/services'
import { ALL_SERVICES }    from '@store/services'
import { SERVICE }         from '@store/services'
import { Condition }       from '@ui/condition'
import { Column }          from '@ui/layout'
import { radiusVar }       from '@store/chosen-radius'
import { screenVar }       from '@store/services'

import { AllServices }     from './all-services'

interface Props {
  data: any
}

const ServicesPage: FC<Props> = ({
  data: { fragments, contacts, posts, navigation, availableRadii, services },
}) => {
  const screen = useReactiveVar<Screen>(screenVar)
  const radius = useReactiveVar<string>(radiusVar)

  useLayoutEffect(() => {
    if (!radius.length) radiusVar('R12')
    if (radius.length) radiusVar(radius)
  }, [radius])

  return (
    <Column width='100%' alignItems='center'>
      <Navigation active={2} navigationData={navigation} availableRadiiData={availableRadii} />
      <Condition match={screen === ALL_SERVICES}>
        <AllServices fragmentsData={fragments} serviceData={services} />
      </Condition>
      <Condition match={screen === SERVICE}>
        <Service />
        <Articles fragmentsData={fragments} postsData={posts} />
      </Condition>
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}
export default ServicesPage
