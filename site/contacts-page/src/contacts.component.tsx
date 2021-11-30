import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

const Contacts: FC = () => (
  <Box width='100%' border='1px solid green'>
    <Column width='100%'>
      <Row>
        <Layout flexBasis={[20, 80, 80]} />
        <Layout>
          <Text>Contacts</Text>
        </Layout>
      </Row>
      <Layout flexBasis={[24, 48, 48]} />
      <Box width='100%' border='1px solid red'>
        <Layout flexBasis={[20, 80, 80]} />
        <Column width={251} justifyContent='space-between'>
          <Box minHeight={260}>
            <Text>Text</Text>
          </Box>
          <Box border='1px solid black' display={['none', 'flex', 'flex']}>
            Social
          </Box>
        </Column>
        <Column display={['none', 'flex', 'flex']}>
          <Box width={952} height={480} border='1px solid green'>
            Map
          </Box>
          <Layout flexBasis={[0, 80, 80]} />
        </Column>
        <Layout flexBasis={[20, 80, 80]} />
      </Box>
      <Layout flexBasis={[24, 0, 0]} />
      <Box width='100%' height={270} display={['flex', 'none', 'none']} border='1px solid green'>
        Map
      </Box>
    </Column>
  </Box>
)
export { Contacts }
