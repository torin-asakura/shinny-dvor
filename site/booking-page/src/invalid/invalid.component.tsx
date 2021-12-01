import React      from 'react'
import { FC }     from 'react'

import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Box }    from '@ui/layout'
import { Text }   from '@ui/text'

const Invalid: FC = () => {
  return (
    <Box width='100%' border='1px solid blue'>
      <Row>
        <Layout flexBasis={360} />
        <Column width='100%'>
          <Layout flexBasis={44} />
          <Layout>
            <Text>Text</Text>
          </Layout>
          <Layout flexBasis={24} />
          <Layout>
            <Text>Text</Text>
          </Layout>
          <Layout flexBasis={32} />
          <Box width='100%' height={48} border='1px solid blue'>
            Button
          </Box>
          <Layout flexBasis={128} />
        </Column>
        <Layout flexBasis={360} />
      </Row>
    </Box>
  )
}

export { Invalid }
