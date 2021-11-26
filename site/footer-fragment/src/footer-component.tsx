import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Divider }    from '@ui/divider'
import { Navigation } from '@site/navigation-fragment'

const Footer: FC = () => (
  <Box width='100%' height={[416, 252, 252]} border='1px solid black'>
    <Column width='100%'>
      <Row>
        <Layout flexBasis={[20, 84, 84]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[24, 48, 48]} />
          <Row>
            <Box width='100%'>
              <Box border='1px solid black' width='100%'>
                Logo
              </Box>
              <Box display={['none', 'flex', 'flex']} width='100%'>
                <Layout flexBasis={70} />
                <Navigation />
              </Box>
            </Box>
            <Box border='1px solid black' width='100%' justifyContent='flex-end'>
              Sosial
            </Box>
          </Row>
          <Layout flexBasis={[24, 48, 48]} />
          <Box display={['flex', 'none', 'none']} width='100%' minHeight={136} alignItems='center'>
            <Navigation />
            <Layout flexBasis={24} />
          </Box>
        </Column>
        <Layout flexBasis={[20, 80, 80]} flexShrink={0} />
      </Row>
      <Divider />
      <Row>
        <Layout flexBasis={[20, 84, 84]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[24, 32, 32]} />
          <Row>Contacts</Row>
          <Layout flexBasis={[24, 32, 32]} />
        </Column>
        <Layout flexBasis={[20, 80, 80]} flexShrink={0} />
      </Row>
    </Column>
  </Box>
)

export { Footer }
