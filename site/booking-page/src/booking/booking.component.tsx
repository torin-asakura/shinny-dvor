import React         from 'react'
import { FC }        from 'react'

import { screenVar } from '@store/booking'
import { SUCCESS }   from '@store/booking'
import { INVALID }   from '@store/booking'
import { Divider }   from '@ui/divider'
import { Column }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Box }       from '@ui/layout'
import { Text }      from '@ui/text'

const Booking: FC = () => {
  // TODO write correct conditions for isSended
  const isSended = () => {
    const isSuccessful = false
    return isSuccessful ? screenVar(SUCCESS) : screenVar(INVALID)
  }
  return (
    <Box width='100%' border='1px solid blue'>
      <Row>
        <Layout flexBasis={[20, 360, 360]} />
        <Column width='100%'>
          <Layout flexBasis={[40, 44, 44]} />
          <Layout>
            <Text>Text</Text>
          </Layout>
          <Layout flexBasis={32} />
          <Layout>
            <Text>Text</Text>
          </Layout>
          <Layout flexBasis={16} />
          <Box width='100%' height={40} border='1px solid blue'>
            Diameters buttons
          </Box>
          <Layout flexBasis={32} />
          <Layout>
            <Text>Text</Text>
          </Layout>
          <Layout flexBasis={16} />
          <Box width='100%' height={40} border='1px solid blue'>
            Car body type buttons
          </Box>
          <Layout flexBasis={32} />
          <Layout>
            <Text>Text</Text>
          </Layout>
          <Layout flexBasis={12} />
          <Box width='100%' height={26} border='1px solid blue'>
            Accordion
          </Box>
          <Layout flexBasis={12} />
          <Divider />
          <Layout flexBasis={32} />
          <Layout>
            <Text>Text</Text>
          </Layout>
          <Layout flexBasis={12} />
          <Layout>
            <Text>Input</Text>
          </Layout>
          <Layout flexBasis={16} />
          <Divider />
          <Layout flexBasis={32} />
          <Box width='100%' height={48} border='1px solid blue' onClick={() => isSended()}>
            Button
          </Box>
          <Layout flexBasis={[48, 128, 128]} />
        </Column>
        <Layout flexBasis={[20, 360, 360]} />
      </Row>
    </Box>
  )
}

export { Booking }
