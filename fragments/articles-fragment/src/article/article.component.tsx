import React            from 'react'
import { FC }           from 'react'

import { Box }          from '@ui/layout'
import { Row }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Text }         from '@ui/text'

import { ReturnButton } from './return-button'

const Article: FC = () => (
  <Column width='100%'>
    <Row height={[440, 440, 480]}>
      <Box width='100%' backgroundColor='gray' justifyContent='center'>
        <Layout flexBasis={[20, 20, 100]} />
        <Column width={['100%', '100%', '1280px']}>
          <Layout flexBasis={[32, 32, 48]} />
          <Column justifyContent='space-between'>
            <Box width={102}>
              <ReturnButton />
            </Box>
            <Box>
              <Column>
                <Layout>
                  <Text fontWeight='medium' fontSize='giant' lineHeight='grown' color='white'>
                    Article
                  </Text>
                </Layout>
                <Layout flexBasis={[16, 16, 24]} />
                <Layout>
                  <Text fontWeight='medium' color='white' lineHeight='grown'>
                    Text
                  </Text>
                </Layout>
              </Column>
              <Layout flexBasis={[20, 20, 100]} />
            </Box>
          </Column>
          <Layout flexBasis={[32, 32, 48]} />
        </Column>
      </Box>
    </Row>
    <Row>
      <Layout flexBasis={[20, 20, 298]} />
      <Column width={['100%', '100%', '843px']}>
        <Layout flexBasis={[48, 48, 80]} />
        <Box width='100%' minHeight={500}>
          <Layout>
            <Text lineHeight='medium'>Article</Text>
          </Layout>
        </Box>
        <Layout flexBasis={[48, 48, 80]} />
      </Column>
      <Layout flexBasis={[20, 20, 298]} />
    </Row>
  </Column>
)

export { Article }
