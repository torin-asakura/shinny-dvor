import React          from 'react'
import { FC }         from 'react'

import { ARTICLE }    from '@store/articles'
import { ImageBlock } from '@ui/image'
import { Box }        from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'
import { screenVar }  from '@store/articles'

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
    <Box maxWidth={['100%', '100%', '1440px']}>
      <Layout flexBasis={[20, 20, 80]} />
      <Column width='100%'>
        <Layout flexBasis={[20, 20, 32]} />
        <Layout>
          <Text fontSize='extra'>Text</Text>
        </Layout>
        <Row justifyContent='space-between' flexWrap='wrap'>
          {allArticles.map((article) => (
            <Box width={['100%', '100%', 405]} onClick={() => screenVar(ARTICLE)}>
              <Column width='100%'>
                <Layout flexBasis={[32, 32, 48]} />
                <Box width='100%' height={[224, 224, 260]}>
                  <ImageBlock />
                </Box>
                <Layout flexBasis={24} />
                <Layout>
                  <Text fontSise='large' lineHeight='grown'>
                    {article}
                  </Text>
                </Layout>
                <Layout flexBasis={8} />
                <Layout>
                  <Text lineHeight='grown' fontWeight='medium' fontSize='large'>
                    Heading
                  </Text>
                </Layout>
                <Layout flexBasis={8} />
                <Box height={52}>
                  <Text
                    color='darkGray'
                    overflow='hidden'
                    text-overflow='ellipsis'
                    lineHeight='medium'
                  >
                    Text ...
                  </Text>
                </Box>
              </Column>
            </Box>
          ))}
        </Row>
        <Layout flexBasis={[20, 20, 32]} />
      </Column>
      <Layout flexBasis={[20, 20, 80]} />
    </Box>
  )
}

export { AllArticles }
