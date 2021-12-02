import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Divider }    from '@ui/divider'
import { Text }       from '@ui/text'
import { Navigation } from '@site/navigation-fragment'

const Footer: FC = () => (
  <Box width='100%' border='1px solid black'>
    <Column width='100%'>
      <Divider />
      <Navigation location='footer' />
      <Divider />
      <Row alignItems='center'>
        <Layout flexBasis={[20, 84, 84]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[24, 32, 32]} />
          <Row
            justifyContent='space-between'
            alignItems='center'
            display={['none', 'flex', 'flex']}
          >
            <Box width='50%'>
              <Layout>
                <Text>Address</Text>
              </Layout>
              <Layout flexBasis={80} />
              <Layout>
                <Text>Tel</Text>
              </Layout>
            </Box>
            <Layout>
              <Text>by TorinAsakura</Text>
            </Layout>
          </Row>
          <Column justifyContent='space-between' display={['flex', 'none', 'none']}>
            <Layout>
              <Text>Address</Text>
            </Layout>
            <Layout flexBasis={24} />
            <Row justifyContent='space-between'>
              <Layout>
                <Text>Tel</Text>
              </Layout>
              <Layout>
                <Text>by TorinAsakura</Text>
              </Layout>
            </Row>
          </Column>
          <Layout flexBasis={[24, 32, 32]} />
        </Column>
        <Layout flexBasis={[20, 80, 80]} flexShrink={0} />
      </Row>
    </Column>
  </Box>
)

export { Footer }
