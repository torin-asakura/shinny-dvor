import React         from 'react'
import { FC }        from 'react'

import { screenVar } from '@store/articles'
import { ARTICLE }   from '@store/articles'
import { Box }       from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

const AllArticles: FC = () => {
  // TODO write allArticles mocks
  const allArticles = [
    'Article 1',
    'Article 2',
    'Article 3',
    'Article 4',
    'Article 5',
    'Article 6',
    'Article 7',
  ]
  return (
    <Box width='100%' border='1px solid yellow'>
      <Layout flexBasis={[20, 80, 80]} />
      <Column width='100%'>
        <Layout flexBasis={[20, 32, 32]} />
        <Layout>
          <Text>Text</Text>
        </Layout>
        <Layout flexBasis={[24, 48, 48]} />
        <Row justifyContent='space-between' display={['none', 'flex', 'flex']}>
          {allArticles.map((article) => (
            <Column onClick={() => screenVar(ARTICLE)}>
              <Box width={405} height={260} border='1px solid yellow'>
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
        <Layout flexBasis={[20, 32, 32]} />
      </Column>
      <Layout flexBasis={[20, 80, 80]} />
    </Box>
  )
}

export { AllArticles }
