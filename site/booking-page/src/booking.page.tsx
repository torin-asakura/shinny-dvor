import React              from 'react'
import { FC }             from 'react'
import { useReactiveVar } from '@apollo/client'

import { screenVar }      from '@store/booking'
import { Screen }         from '@store/booking'
import { INITIAL }        from '@store/booking'
import { SUCCESS }        from '@store/booking'
import { INVALID }        from '@store/booking'
import { Condition }      from '@ui/condition'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { Logo }           from '@ui/logo'

import { Booking }        from './booking'
import { Successed }      from './successed'
import { Invalid }        from './invalid'

const BookingPage: FC = () => {
  const screen = useReactiveVar<Screen>(screenVar)
  return (
    <Box width='100%' border='1px solid blue'>
      <Column width='100%'>
        <Layout flexBasis={[24, 28, 28]} />
        <Row>
          <Layout flexBasis={[21, 32, 32]} />
          <Box width='100%' justifyContent='space-between' alignItems='center'>
            <Logo />
            <Box width={[40, 48, 48]} height={[40, 48, 48]} border='1px solid blue'>
              Button
            </Box>
          </Box>
          <Layout flexBasis={[21, 32, 32]} />
        </Row>
        <Condition match={screen === INITIAL}>
          <Booking />
        </Condition>
        <Condition match={screen === SUCCESS}>
          <Successed />
        </Condition>
        <Condition match={screen === INVALID}>
          <Invalid />
        </Condition>
      </Column>
    </Box>
  )
}

export default BookingPage
