import React         from 'react'
import { FC }        from 'react'

import { screenVar } from '@store/articles'
import { ARTICLE }   from '@store/articles'
import { Box }       from '@ui/layout'
import { Row }       from '@ui/layout'
import { Text }      from '@ui/text'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'

const Articles: FC = () => {
  // FIXME take first 3 elements
  const lastArticles = ['Article 1', 'Article 2', 'Article 3']
  return (
    <Box width='100%' height={[569, 693, 693]} border='1px solid brown'>
      <Row justifyContent='space-between'>
        <Layout flexBasis={[20, 80, 80]} />
        <Column width='100%'>
          <Layout flexBasis={[64, 100, 100]} />
          <Layout>
            <Text>Text</Text>
          </Layout>
          <Layout flexBasis={[32, 48, 48]} />
          <Row justifyContent='space-between' display={['none', 'flex', 'flex']}>
            {lastArticles.map((article) => (
              <Column onClick={() => screenVar(ARTICLE)}>
                <Box width={405} height={260} border='1px solid brown'>
                  Pic
                </Box>
                <Layout flexBasis={24} />
                <Layout>
                  <Text>{article}</Text>
                </Layout>
                <Layout flexBasis={8} />
                <Layout>
                  <Text>Text</Text>
                </Layout>
                <Layout flexBasis={8} />
                <Layout>
                  <Text>Text</Text>
                </Layout>
              </Column>
            ))}
          </Row>
          <Row display={['flex', 'none', 'none']}>
            {/* TODO carousel */}
            <Column>
              <Box width={300} height={200} border='1px solid brown'>
                Pic
              </Box>
              <Layout flexBasis={24} />
              <Layout>
                <Text>Article</Text>
              </Layout>
              <Layout flexBasis={8} />
              <Layout>
                <Text>Text</Text>
              </Layout>
              <Layout flexBasis={8} />
              <Layout>
                <Text>Text</Text>
              </Layout>
            </Column>
          </Row>
          <Layout flexBasis={[64, 100, 100]} />
        </Column>
        <Layout flexBasis={[0, 80, 80]} />
      </Row>
    </Box>
  )
}
export { Articles }
