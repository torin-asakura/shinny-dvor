import React         from 'react'
import { FC }        from 'react'

import { screenVar } from '@store/booking'
import { INITIAL }   from '@store/booking'
import { Column }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Box }       from '@ui/layout'
import { Text }      from '@ui/text'

const Invalid: FC = () => (
  <Box width='100%' border='1px solid blue'>
    <Row>
      <Layout flexBasis={[20, 360, 360]} />
      <Column width='100%'>
        <Layout flexBasis={[40, 44, 44]} />
        <Layout>
          <Text>Что-то пошло не так</Text>
        </Layout>
        <Layout flexBasis={24} />
        <Layout>
          <Text>Text</Text>
        </Layout>
        <Layout flexBasis={32} />
        <Box width='100%' height={48} border='1px solid blue' onClick={() => screenVar(INITIAL)}>
          Button
        </Box>
        <Layout flexBasis={[48, 128, 128]} />
      </Column>
      <Layout flexBasis={[20, 360, 360]} />
    </Row>
  </Box>
)

export { Invalid }
