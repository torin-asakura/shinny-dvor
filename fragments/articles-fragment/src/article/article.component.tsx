import React            from 'react'
import { FC }           from 'react'

import { screenVar }    from '@store/articles'
import { ALL_ARTICLES } from '@store/articles'
import { Box }          from '@ui/layout'
import { Row }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Text }         from '@ui/text'

const Article: FC = () => (
  <Box width='100%' border='1px solid black'>
    <Column width='100%'>
      <Row height={[440, 480, 480]}>
        <Box width='100%' border='1px solid orange'>
          <Layout flexBasis={[20, 100, 100]} />
          <Column>
            <Layout flexBasis={[32, 48, 48]} />
            <Column width='100%' justifyContent='space-between'>
              <Box onClick={() => screenVar(ALL_ARTICLES)}>Button</Box>
              <Box>
                <Column>
                  <Layout>
                    <Text>Text</Text>
                  </Layout>
                  <Layout flexBasis={[16, 24, 24]} />
                  <Layout>
                    <Text>Text</Text>
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
              <Text>Article</Text>
            </Layout>
          </Box>
          <Layout flexBasis={[48, 80, 80]} />
        </Column>
        <Layout flexBasis={[20, 298, 298]} />
      </Row>
    </Column>
  </Box>
)

export { Article }
