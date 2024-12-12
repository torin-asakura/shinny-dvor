/* eslint-disable */

import type { ServicesProps } from './services.interface.js'
import type { FC }            from 'react'

import React                  from 'react'
import { forwardRef }         from 'react'

import { Button }             from '@ui/button'
import { Divider }            from '@ui/divider'
import { Box }                from '@ui/layout'
import { Row }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { NextLink }           from '@ui/link'
import { Text }               from '@ui/text'
import { extractFragments }   from '@globals/data'
import { extractFragment }    from '@globals/data'

import { ServicesList }       from './services-list/index.js'

export const Services: FC<ServicesProps> = forwardRef((
  { fragmentsData, availableRadiiData, servicesData },
  ref: any
) => {
  const services = extractFragments('service-item', 'servicesParams', servicesData)

  const { title } = extractFragment('contentAddons', 'our-services', fragmentsData)
  const subTitle = extractFragment('contentAddons', 'select-needed-service', fragmentsData).title
  const allServicesTitle = extractFragment('contentAddons', 'all-services', fragmentsData).title

  return (
    <Box
      ref={ref}
      maxWidth={{ mobile: '100%', tablet: '100%', desktop: 1440 }}
      width='100%'
      justifyContent='center'
      id='services'
    >
      <Column>
        <Layout flexBasis={{ mobile: 48, tablet: 48, desktop: 120 }} />
        <Row>
          <Layout flexBasis={{ mobile: 20, tablet: 20, desktop: 80 }} flexShrink={0} />
          <Box width='100%' justifyContent='space-between'>
            <Column
              display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}
              width='100%'
              maxWidth={{ mobile: 335, tablet: '100%', desktop: 400 }}
            >
              <Layout>
                <Text fontWeight='medium' fontSize='giant' lineHeight='grown'>
                  {title}
                </Text>
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Text lineHeight='grown'>{subTitle}</Text>
                <Layout flexBasis={24} />
              </Layout>
              <Layout flexBasis={24} />
              <Row>
                <NextLink path='/services'>
                  <Layout width={180}>
                    <Button color='secondary' size='large'>
                      {allServicesTitle}
                    </Button>
                  </Layout>
                </NextLink>
              </Row>
            </Column>
            <Layout flexBasis={{ mobile: 0, tablet: 0, desktop: 37 }} flexShrink={0} />
            <Column width='100%'>
              <Column width='100%' display={{ mobile: 'flex', tablet: 'flex', desktop: 'none' }}>
                <Layout>
                  <Text fontWeight='medium' fontSize='extraLarge'>
                    {title}
                  </Text>
                </Layout>
                <Layout flexBasis={16} />
                <Layout>
                  <Text lineHeight='grown'>{subTitle}</Text>
                </Layout>
                <Layout flexBasis={24} />
                <Row>
                  <NextLink path='/services'>
                    <Box width={180} height={56}>
                      <Button color='secondary' size='large'>
                        {allServicesTitle}
                      </Button>
                    </Box>
                  </NextLink>
                </Row>
                <Layout flexBasis={32} />
              </Column>
              <Column width='100%'>
                <Layout>
                  <Divider backgroundColor='gray' />
                </Layout>
                <ServicesList services={services} />
              </Column>
            </Column>
          </Box>
          <Layout flexBasis={{ mobile: 20, tablet: 20, desktop: 80 }} flexShrink={0} />
        </Row>
        <Layout flexBasis={{ mobile: 48, tablet: 48, desktop: 120 }} />
      </Column>
    </Box>
  )
})
