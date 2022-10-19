import React                from 'react'
import { FC }               from 'react'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { extractFragment }  from '@globals/data'
import { extractFragments } from '@globals/data'

import { Item }             from '../item'
import { AllServicesProps } from './all-services.interface'

const AllServices: FC<AllServicesProps> = ({ fragmentsData, serviceData }) => {
  const { title } = extractFragment('contentAddons', 'our-services', fragmentsData)

  const services = extractFragments('service-item', 'servicesParams', serviceData)
  const serviceItems = services.map((item) => item.servicesParams)

  return (
    <Box maxWidth={['100%', '100%', '1440px']} marginTop={[80, 80, 104]}>
      <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[20, 20, 32]} />
        <Layout>
          <Text fontWeight='bold' fontSize={['giant', 'giant', 'extra']}>
            {title}
          </Text>
        </Layout>
        <Layout flexBasis={[12, 12, 16]} />
        <Row flexWrap='wrap'>
          {serviceItems.map(({
            title: serviceName,
            price,
            image,
            addon,
            description,
            variant,
            workexamples,
            additionalservice,
          }) => (
            <Item
              key={title}
              serviceName={serviceName}
              price={price}
              image={image}
              addon={addon}
              description={description}
              variant={variant}
              workexamples={workexamples}
              additionalservice={additionalservice}
            />
          ))}
        </Row>
        <Layout flexBasis={[50, 50, 80]} />
      </Column>
      <Layout flexBasis={[20, 20, 48]} flexShrink={0} />
    </Box>
  )
}

export { AllServices }
