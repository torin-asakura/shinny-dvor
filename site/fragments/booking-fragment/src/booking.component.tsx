import { useReactiveVar } from '@apollo/client'

import React              from 'react'

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
import { Logo }           from '@ui/logo'
import { screenVar }      from '@store/booking'

import { Initial }        from './initial'
import { Invalid }        from './invalid'
import { Success }        from './success'

const Booking = ({
  setVisible,
  fragmentsData,
  availableRadiiData,
  carBodiesData,
  servicesData,
}: any) => {
  const screen = useReactiveVar<Screen>(screenVar)

  return (
    <Row justifyContent='space-between' height='100%'>
      <Layout flexBasis={[21, 21, 32]} />
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={[24, 24, 28]} flexShrink={0} />
        <Box width='100%' justifyContent='space-between' alignItems='center'>
          <Layout>
            <Logo />
          </Layout>
          <Layout>
            <Button size='ghost' color='transparent' onClick={() => setVisible(false)}>
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
      <Layout flexBasis={[21, 21, 32]} />
    </Row>
  )
}

export { Booking }
