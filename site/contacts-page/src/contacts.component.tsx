import React           from 'react'
import { FC }          from 'react'

import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Text }        from '@ui/text'
import { SocialLinks } from '@ui/social-links'

const Contacts: FC = () => (
  <Column width={['100%', '1440px', '1440px']}>
    <Row>
      <Layout flexBasis={[20, 80, 80]} />
      <Column width='100%'>
        <Layout flexBasis={[20, 32, 32]} />
        <Layout>
          <Text fontWeight='bold' fontSize='extra'>
            Text
          </Text>
        </Layout>
        <Layout flexBasis={[24, 48, 48]} />
      </Column>
      <Layout flexBasis={[20, 80, 80]} />
    </Row>
    <Row>
      <Layout flexBasis={[20, 80, 80]} />
      <Row justifyContent='space-between'>
        <Column width='100%' justifyContent='space-between'>
          <Column width='100%'>
            <Layout>
              <Text>Text</Text>
            </Layout>
          </Column>
          <Box display={['none', 'flex', 'flex']} width='116px'>
            <SocialLinks />
          </Box>
        </Column>
        <Column justifyContent='flex-end'>
          <Box display={['none', 'flex', 'flex']} width={952} height={480} border='1px solid green'>
            Map
          </Box>
        </Column>
      </Row>
      <Layout flexBasis={[20, 80, 80]} />
    </Row>
    <Layout flexBasis={[24, 0, 0]} />
    <Box width='100%' height={270} display={['flex', 'none', 'none']} border='1px solid green'>
      Map
    </Box>
    <Layout flexBasis={[0, 80, 80]} />
  </Column>
)
export { Contacts }
