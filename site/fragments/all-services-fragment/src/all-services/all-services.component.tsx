/* eslint-disable */

import type { ItemProps }        from '../item/index.js'
import type { AllServicesProps } from './all-services.interface.js'
import type { FC }               from 'react'

import React                     from 'react'

import { Box }                   from '@ui/layout'
import { Row }                   from '@ui/layout'
import { Column }                from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Link }                  from '@ui/link'
import { Text }                  from '@ui/text'
import { extractFragment }       from '@globals/data'
import { extractFragments }      from '@globals/data'

import { Item }                  from '../item/index.js'

export const AllServices: FC<AllServicesProps> = ({ fragmentsData, servicesData }) => {
  const { title } = extractFragment('contentAddons', 'our-services', fragmentsData)

  const services = extractFragments('service-item', 'servicesParams', servicesData)

  return (
    <Box
      maxWidth={{ mobile: '100%', tablet: '100%', desktop: '1440px' }}
      marginTop={{ mobile: '80px', tablet: '80px', desktop: '104px' }}
    >
      <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '80px' }} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '32px' }} />
        <Text fontWeight='bold' fontSize={['giant', 'giant', 'extra']}>
          {title}
        </Text>
        <Layout flexBasis={{ mobile: '12px', tablet: '12px', desktop: '16px' }} />
        <Layout flexBasis='32px' />
        <Row flexWrap='wrap' gap='32px'>
          {services.map(({
            uri,
            servicesParams: { title: serviceName, averagePrice, price, image, addon },
          }: {
            uri: string
            servicesParams: {
              title: ItemProps['serviceName']
              averagePrice: ItemProps['averagePrice']
              price: ItemProps['price']
              image: ItemProps['image']
              addon: ItemProps['addon']
            }
          }) => (
            <Link key={uri} href={uri}>
              <Item
                serviceName={serviceName}
                averagePrice={averagePrice}
                price={price}
                image={image}
                addon={addon}
              />
            </Link>
          ))}
        </Row>
        <Layout flexBasis={{ mobile: '50px', tablet: '50px', desktop: '80px' }} />
      </Column>
      <Layout flexBasis={{ mobile: '20px', tablet: '20px', desktop: '48px' }} flexShrink={0} />
    </Box>
  )
}
