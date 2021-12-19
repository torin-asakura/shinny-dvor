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
    <Row height={[440, 480, 480]}>
      <Box width='100%' backgroundColor='gray' justifyContent='center'>
        <Layout flexBasis={[20, 100, 100]} />
        <Column minWidth={['100%', '1280px', '1280px']}>
          <Layout flexBasis={[32, 48, 48]} />
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
                <Layout flexBasis={[16, 24, 24]} />
                <Layout>
                  <Text fontWeight='medium' color='white' lineHeight='grown'>
                    Text
                  </Text>
                </Layout>
              </Column>
            </Box>
          </Column>
          <Layout flexBasis={[32, 48, 48]} />
        </Column>
      </Box>
    </Row>
    <Row>
      <Layout flexBasis={[20, 298, 298]} />
      <Column width='100%'>
        <Layout flexBasis={[48, 80, 80]} />
        <Box width='100%' minHeight={500} border='1px solid black'>
          <Layout>
            <Text lineHeight='medium'>Article</Text>
          </Layout>
        </Box>
        <Layout flexBasis={[48, 80, 80]} />
      </Column>
      <Layout flexBasis={[20, 298, 298]} />
    </Row>
  </Column>
)

export { Article }
