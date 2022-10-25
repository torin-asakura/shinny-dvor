import React           from 'react'
import { FC }          from 'react'

import { AllServices } from '@fragments/all-services-fragment'
import { Footer }      from '@fragments/footer-fragment'
import { Navigation }  from '@fragments/navigation-fragment'
import { Column }      from '@ui/layout'

import { Seo }         from './seo.component'

interface Props {
  ogCover: string
  SEO: any
  data: any
}

const ServicesPage: FC<Props> = ({
  SEO,
  ogCover,
  data: { fragments, contacts, navigation, availableRadii, services, carBodies },
}) => (
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
    <AllServices fragmentsData={fragments} servicesData={services} />
    <Footer fragmentsData={fragments} contactsData={contacts} />
  </Column>
)

export default ServicesPage
