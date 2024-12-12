/* eslint-disable */

import type { Screen }     from '@store/booking'

import { useReactiveVar }  from '@apollo/client'

import React               from 'react'

import { INITIAL }         from '@store/booking'
import { SUCCESS }         from '@store/booking'
import { INVALID }         from '@store/booking'
import { Button }          from '@ui/button'
import { Condition }       from '@ui/condition'
import { CloseIcon }       from '@ui/icons'
import { Column }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Box }             from '@ui/layout'
import { Logo }            from '@ui/logo'
import { extractFragment } from '@globals/data'
import { screenVar }       from '@store/booking'
import { useHover }        from '@ui/utils'

import { Initial }         from './initial/index.js'
import { Invalid }         from './invalid/index.js'
import { Success }         from './success/index.js'

export const Booking = ({
  setVisible,
  fragmentsData,
  availableRadiiData,
  carBodiesData,
  servicesData,
  navigationData,
  additionalService,
}: any) => {
  const screen = useReactiveVar<Screen>(screenVar)
  const [hover, hoverProps] = useHover()

  const mainPage = extractFragment('contentAddons', 'main', navigationData)

  return (
    <Row justifyContent='space-between' height='100%'>
      <Layout flexBasis={{ mobile: '21px', tablet: '21px', desktop: '32px' }} />
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={{ mobile: '24px', tablet: '24px', desktop: '28px' }} flexShrink={0} />
        <Box width='100%' justifyContent='space-between' alignItems='center'>
          <Layout>
            <Logo path={mainPage.content} />
          </Layout>
          <Layout>
            <Button size='normal' color='radius' onClick={() => setVisible(false)}>
              <Box
                width='46px'
                height='46px'
                justifyContent='center'
                alignItems='center'
                {...hoverProps}
              >
                <CloseIcon color={hover ? 'white' : 'black'} width='24px' height='24px' />
              </Box>
            </Button>
          </Layout>
        </Box>
        <Box width={{ mobile: '100%', tablet: '100%', desktop: '720px' }}>
          <Condition match={screen === INITIAL}>
            <Initial
              fragmentsData={fragmentsData}
              availableRadiiData={availableRadiiData}
              carBodiesData={carBodiesData}
              servicesData={servicesData}
              additionalService={additionalService}
            />
          </Condition>
          <Condition match={screen === SUCCESS}>
            <Success setVisible={setVisible} fragmentsData={fragmentsData} />
          </Condition>
          <Condition match={screen === INVALID}>
            <Invalid fragmentsData={fragmentsData} />
          </Condition>
        </Box>
      </Column>
      <Layout flexBasis={{ mobile: '21px', tablet: '21px', desktop: '32px' }} />
    </Row>
  )
}
