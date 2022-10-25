import React                from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'

import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { extractFragments } from '@globals/data'
import { extractFragment }  from '@globals/data'

import { ServicesList }     from './services-list'
import { ServicesProps }    from './services.interface'

const Services: FC<ServicesProps> = forwardRef((
  { fragmentsData, availableRadiiData, servicesData },
  ref: any
) => {
  const services = extractFragments('service-item', 'servicesParams', servicesData)

  const { title } = extractFragment('contentAddons', 'our-services', fragmentsData)
  const subTitle = extractFragment('contentAddons', 'select-needed-service', fragmentsData).title
  const allServicesTitle = extractFragment('contentAddons', 'all-services', fragmentsData).title

  return (
    <Box
      maxWidth={['100%', '100%', 1440]}
      width='100%'
      justifyContent='center'
      id='services'
      ref={ref}
    >
      <Column fill>
        <Layout flexBasis={[48, 48, 100]} />
        <Row>
          <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
          <Box width='100%' justifyContent='space-between'>
            <Column display={['none', 'none', 'flex']} minWidth={400}>
              <Layout>
                <Text fontWeight='medium' fontSize='giant' lignHeight='grown'>
                  {title}
                </Text>
              </Layout>
              <Layout flexBasis={24} />
              <Layout>
                <Text lignHeight='grown'>{subTitle}</Text>
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
            <Layout flexBasis={[0, 0, 37]} flexShrink={0} />
            <Column width='100%'>
              <Column width='100%' display={['flex', 'flex', 'none']}>
                <Layout>
                  <Text fontWeight='medium' fontSize='extraLarge'>
                    {title}
                  </Text>
                </Layout>
                <Layout flexBasis={16} />
                <Layout>
                  <Text lignHeight='grown'>{subTitle}</Text>
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
          <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
        </Row>
        <Layout flexBasis={[48, 48, 100]} />
      </Column>
    </Box>
  )
})

export { Services }
