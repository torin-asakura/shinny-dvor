import type { Screen }       from '@store/booking'
import type { FC }           from 'react'

import type { BookingProps } from './booking.interfaces.js'

import { useReactiveVar }    from '@apollo/client'
import React                 from 'react'

import { INITIAL }           from '@store/booking'
import { SUCCESS }           from '@store/booking'
import { INVALID }           from '@store/booking'
import { Button }            from '@ui/button'
import { Condition }         from '@ui/condition'
import { CloseIcon }         from '@ui/icons'
import { Layer }             from '@ui/layer'
import { Column }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Box }               from '@ui/layout'
import { Logo }              from '@ui/logo'
import { extractFragment }   from '@globals/data'
import { screenVar }         from '@store/booking'
import { useHover }          from '@ui/utils'

import { Initial }           from './initial/index.js'
import { Invalid }           from './invalid/index.js'
import { Success }           from './success/index.js'

export const Booking: FC<BookingProps> = ({
  visible,
  setVisible,
  fragmentsData,
  availableRadiiData,
  carBodiesData,
  servicesData,
  navigationData,
}) => {
  const screen = useReactiveVar<Screen>(screenVar)
  const [hover, hoverProps] = useHover()

  const mainPage = extractFragment('contentAddons', 'main', navigationData)

  return (
    <Layer visible={visible}>
      <Row
        justifyContent='space-between'
        height='100%'
        paddingY={[21, 21, 32]}
        paddingX={[24, 24, 28]}
      >
        <Column width='100%' alignItems='center'>
          <Layout flexShrink='0' />
          <Box width='100%' justifyContent='space-between' alignItems='center'>
            <Layout>
              <Logo path={mainPage.content} />
            </Layout>
            <Layout>
              <Button
                variant='tertiary'
                size='round'
                onClick={() => {
                  setVisible(false)
                }}
              >
                <Box
                  width={46}
                  height={46}
                  justifyContent='center'
                  alignItems='center'
                  {...hoverProps}
                >
                  <CloseIcon color={hover ? 'white' : 'black'} width={24} height={24} />
                </Box>
              </Button>
            </Layout>
          </Box>
          <Box width={['100%', '100%', 720]}>
            <Condition match={screen === INITIAL}>
              <Initial
                fragmentsData={fragmentsData}
                availableRadiiData={availableRadiiData}
                carBodiesData={carBodiesData}
                servicesData={servicesData}
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
      </Row>
    </Layer>
  )
}
