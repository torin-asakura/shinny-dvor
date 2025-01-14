/* eslint-disable */

import type { FC }               from 'react'

import type { ItemProps }        from '../item/index.js'
import type { AllServicesProps } from './all-services.interface.js'

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
    <Box maxWidth={['100%', '100%', '1440px']} marginTop={[80, 80, 104]}>
      <Layout flexBasis={[20, 20, 80]} flexShrink='0' />
      <Column width='100%'>
        <Layout flexBasis={[20, 20, 32]} />
        <Text fontWeight='$semiBold' fontSize={['$giant', '$giant', '$extra']}>
          {title}
        </Text>
        <Layout flexBasis={[12, 12, 16]} />
        <Layout flexBasis={32} />
        <Row flexWrap='wrap' gap={32}>
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
            <Box width={['$fill', '$fill', 'auto']}>
              <Link key={uri} href={uri} style={{ width: '100%' }}>
                <Item
                  serviceName={serviceName}
                  averagePrice={averagePrice}
                  price={price}
                  image={image}
                  addon={addon}
                />
              </Link>
            </Box>
          ))}
        </Row>
        <Layout flexBasis={[50, 50, 80]} />
      </Column>
      <Layout flexBasis={[20, 20, 48]} flexShrink='0' />
    </Box>
  )
}
