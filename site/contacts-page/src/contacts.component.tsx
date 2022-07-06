import React           from 'react'
import { FC }          from 'react'

import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { SocialLinks } from '@ui/social-links'
import { Text }        from '@ui/text'

const Contacts: FC = () => (
  <Column width={['100%', '100%', '1440px']}>
    <Row>
      <Layout flexBasis={[20, 20, 80]} />
      <Column width='100%'>
        <Layout flexBasis={[20, 20, 32]} />
        <Layout>
          <Text fontWeight='bold' fontSize='extra'>
            Text
          </Text>
        </Layout>
        <Layout flexBasis={[24, 24, 48]} />
      </Column>
      <Layout flexBasis={[20, 20, 80]} />
    </Row>
    <Row>
      <Layout flexBasis={[20, 20, 80]} />
      <Row justifyContent='space-between'>
        <Column width='100%' justifyContent='space-between'>
          <Column width='100%'>
            <Layout flexDirection='column'>
              <Row>
                <Text fontWeight='medium'>Text</Text>
              </Row>
              <Layout flexBasis={8} />
              <Row>
                <Text fontWeight='regular'>address</Text>
              </Row>
              <Layout flexBasis={24} />
              <Row>
                <Text fontWeight='medium'>Date</Text>
              </Row>
              <Layout flexBasis={8} />
              <Row>
                <Text fontWeight='regular'>time</Text>
              </Row>
              <Layout flexBasis={24} />
              <Row>
                <Text fontWeight='medium'>Contacts</Text>
              </Row>
              <Layout flexBasis={8} />
              <Row>
                <Text fontWeight='regular'>text</Text>
              </Row>
            </Layout>
          </Column>
          <Box display={['none', 'none', 'flex']} width='110px'>
            <SocialLinks />
          </Box>
        </Column>
        <Column justifyContent='flex-end'>
          <Box display={['none', 'none', 'flex']} width={952} height={480}>
            Map
          </Box>
        </Column>
      </Row>
      <Layout flexBasis={[20, 20, 80]} />
    </Row>
    <Layout flexBasis={[24, 24, 0]} />
    <Box width='100%' height={270} display={['flex', 'flex', 'none']}>
      Map
    </Box>
    <Layout flexBasis={[0, 0, 80]} />
  </Column>
)
export { Contacts }
