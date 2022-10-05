import { useReactiveVar } from '@apollo/client'

import React              from 'react'
import { FC }             from 'react'

import { Screen }         from '@store/booking'
import { INITIAL }        from '@store/booking'
import { SUCCESS }        from '@store/booking'
import { INVALID }        from '@store/booking'
import { Button }         from '@ui/button'
import { Condition }      from '@ui/condition'
import { CloseIcon }      from '@ui/icons'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { NextLink }       from '@ui/link'
import { Logo }           from '@ui/logo'
import { screenVar }      from '@store/booking'

import { Booking }        from './booking'
import { Invalid }        from './invalid'
import { Success }        from './success'

interface Props {
  data: any
}

const BookingPage: FC<Props> = ({ data: { booking, availableRadii, carBodies, services } }) => {
  const screen = useReactiveVar<Screen>(screenVar)

  return (
    <Row justifyContent='space-between'>
      <Layout flexBasis={[21, 21, 32]} />
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={[24, 24, 28]} />
        <Box width='100%' justifyContent='space-between' alignItems='center'>
          <Layout>
            <Logo />
          </Layout>
          <Layout>
            <NextLink path='/'>
              <Button size='ghost' color='transparent'>
                <Box
                  width={[40, 40, 48]}
                  height={[40, 40, 48]}
                  justifyContent='center'
                  alignItems='center'
                  backgroundColor='lightGray'
                  borderRadius='default'
                >
                  <CloseIcon width={24} height={24} />
                </Box>
              </Button>
            </NextLink>
          </Layout>
        </Box>
        <Box width={['100%', '100%', 720]}>
          <Condition match={screen === INITIAL}>
            <Booking
              bookingData={booking}
              availableRadiiData={availableRadii}
              carBodiesData={carBodies}
              servicesData={services}
            />
          </Condition>
          <Condition match={screen === SUCCESS}>
            <Success bookingData={booking} />
          </Condition>
          <Condition match={screen === INVALID}>
            <Invalid bookingData={booking} />
          </Condition>
        </Box>
      </Column>
      <Layout flexBasis={[21, 21, 32]} />
    </Row>
  )
}

export default BookingPage
