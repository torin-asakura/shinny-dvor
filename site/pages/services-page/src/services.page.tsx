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
import { Seo }             from './seo.component'

interface Props {
  ogCover: string
  SEO: any
  data: any
}

const ServicesPage: FC<Props> = ({
  SEO,
  ogCover,
  data: { fragments, contacts, posts, navigation, availableRadii, services, carBodies },
}) => {
  const screen = useReactiveVar<Screen>(screenVar)
  const radius = useReactiveVar<string>(radiusVar)

  useLayoutEffect(() => {
    if (!radius.length) radiusVar('R12')
    if (radius.length) radiusVar(radius)
  }, [radius])

  return (
    <Column width='100%' alignItems='center'>
      <Seo SEO={SEO} ogCover={ogCover} />
      <Navigation
        active={2}
        navigationData={navigation}
        availableRadiiData={availableRadii}
        fragmentsData={fragments}
        carBodiesData={carBodies}
        servicesData={services}
      />
      <Condition match={screen === ALL_SERVICES}>
        <AllServices fragmentsData={fragments} serviceData={services} />
      </Condition>
      <Condition match={screen === SERVICE}>
        <Service
          servicesData={services}
          availableRadiiData={availableRadii}
          fragmentsData={fragments}
          carBodiesData={carBodies}
        />
        <Articles fragmentsData={fragments} navigationData={navigation} postsData={posts} />
      </Condition>
      <Footer fragmentsData={fragments} contactsData={contacts} />
    </Column>
  )
}
export default ServicesPage
