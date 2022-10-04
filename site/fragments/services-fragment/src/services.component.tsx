import { useReactiveVar }     from '@apollo/client'

import React                  from 'react'
import { FC }                 from 'react'
import { forwardRef }         from 'react'

import { Button }             from '@ui/button'
import { Condition }          from '@ui/condition'
import { Divider }            from '@ui/divider'
import { Box }                from '@ui/layout'
import { Row }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { NextLink }           from '@ui/link'
import { Text }               from '@ui/text'
import { extractFragments }   from '@globals/data'
import { extractFragment }    from '@globals/data'
import { chosenVar }          from '@store/chosen-radius'
import { usePopover }         from '@ui/utils'

import { AvailableRadii }     from './available-radii'
import { AvailableRadiiTile } from './available-radii'
import { ChosenRadius }       from './chosen-radius'
import { ServicesList }       from './services-list'
import { ServicesProps }      from './services.interface'

const Services: FC<ServicesProps> = forwardRef(({ availableRadiiData, servicesData }, ref: any) => {
  const isSizeChosen = useReactiveVar<boolean>(chosenVar)

  const { layerProps, triggerProps, render, isOpen, setOpen } = usePopover(
    'bottom-start',
    16,
    'click'
  )

  const radii = extractFragments('radius', 'contentAddons', availableRadiiData)
  const services = extractFragments('serviceItem', 'servicesParams', servicesData)
  const serviceItems = services.map((item) => item.servicesParams)

  const { title } = extractFragment('contentAddons', 'title', servicesData)
  const subTitle = extractFragment('contentAddons', 'title', servicesData).content
  const selectRadiusTitle = extractFragment('contentAddons', 'select-radius', servicesData).title
  const allServicesTitle = extractFragment('contentAddons', 'all-services', servicesData).title

  return (
    <Box width='100%' justifyContent='center' id='services' ref={ref}>
      <Column minWidth={['100%', '100%', '1440px']}>
        <Layout flexBasis={[48, 48, 100]} />
        <Row>
          <Layout flexBasis={[20, 20, 80]} />
          <Box width='100%' justifyContent='space-between'>
            <Column display={['none', 'none', 'flex']} width='34%'>
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
              <Condition match={isSizeChosen}>
                <Layout flexBasis={24} />
                <Row>
                  <Layout {...triggerProps}>
                    <ChosenRadius />
                  </Layout>
                  <Layout flexBasis={16} />
                  <NextLink path='/services'>
                    <Layout width={180}>
                      <Button color='secondary' size='large' disabled={isOpen}>
                        {allServicesTitle}
                      </Button>
                    </Layout>
                  </NextLink>
                </Row>
              </Condition>
              {render(
                <Layout {...layerProps}>
                  <AvailableRadiiTile radii={radii} setOpen={setOpen} />
                </Layout>
              )}
            </Column>
            <Column width={['100%', '100%', '843px']}>
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
                <Condition match={isSizeChosen}>
                  <Layout flexBasis={24} />
                  <Row>
                    <Box width={56} height={56}>
                      <ChosenRadius />
                    </Box>
                    <Layout flexBasis={16} />
                    <Box width={180} height={56}>
                      <Button color='secondary' size='large'>
                        {allServicesTitle}
                      </Button>
                    </Box>
                  </Row>
                </Condition>
                <Layout flexBasis={32} />
              </Column>
              <Condition match={!isSizeChosen}>
                <AvailableRadii title={selectRadiusTitle} radii={radii} />
                <Layout flexBasis={16} />
              </Condition>
              <Column width='100%'>
                <Condition match={isSizeChosen}>
                  <Divider backgroundColor='gray' />
                </Condition>
                <ServicesList services={serviceItems} isSizeChosen={isSizeChosen} />
              </Column>
            </Column>
          </Box>
          <Layout flexBasis={[20, 20, 80]} />
        </Row>
        <Layout flexBasis={[48, 48, 100]} />
      </Column>
    </Box>
  )
})

export { Services }
