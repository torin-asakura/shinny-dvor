import React                 from 'react'
import { forwardRef }        from 'react'

import { ARTICLE }           from '@store/articles'
import { ImageBlock }        from '@ui/image'
import { Box }               from '@ui/layout'
import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'
import { screenVar }         from '@store/articles'

import { Carousel }          from './carousel'
import { useMockedArticles } from './data'

const Articles = forwardRef((props, ref: any) => {
  const { articles } = useMockedArticles()

  return (
    <Box
      width='100%'
      height={[569, 569, 693]}
      backgroundColor='fillGray'
      justifyContent='center'
      ref={ref}
    >
      <Box minWidth={['100%', '100%', '1440px']} justifyContent='space-between'>
        <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
        <Column fill>
          <Layout flexBasis={[64, 64, 100]} />
          <Layout>
            <Text fontWeight='medium' fontSize='giant'>
              Text
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 48]} />
          <Row justifyContent='space-between' display={['none', 'none', 'flex']}>
            {articles.slice(0, 3).map(({ id, name }) => (
              <Column key={id} onClick={() => screenVar(ARTICLE)}>
                <Box width={405} height={260}>
                  <ImageBlock />
                </Box>
                <Layout flexBasis={24} />
                <Layout>
                  <Text lineHeight='grown'>date</Text>
                </Layout>
                <Layout flexBasis={8} />
                <Layout>
                  <Text lineHeight='grown' fontWeight='medium' fontSize='large'>
                    {name}
                  </Text>
                </Layout>
                <Layout flexBasis={8} />
                <Layout>
                  <Text lineHeight='medium' color='darkGray'>
                    Text
                  </Text>
                </Layout>
              </Column>
            ))}
          </Row>
          <Row display={['flex', 'flex', 'none']} overflow='hidden'>
            <Carousel>
              {articles.map(({ id, name }) => (
                <Column fill maxHeight={333} key={id}>
                  <Box width={300} height={200} backgroundColor='gray'>
                    <ImageBlock />
                  </Box>
                  <Layout flexBasis={24} />
                  <Layout>
                    <Text fontWeight='grown'>Article</Text>
                  </Layout>
                  <Layout flexBasis={8} />
                  <Layout>
                    <Text fontWeight='grown' fontSize='big'>
                      Text
                    </Text>
                  </Layout>
                  <Layout flexBasis={8} />
                  <Row width={300} minHeight={52}>
                    <Text lineHeight='medium' color='darkGray' overflow='hidden'>
                      {name}
                    </Text>
                  </Row>
                </Column>
              ))}
            </Carousel>
          </Row>
          <Layout flexBasis={[64, 64, 100]} />
        </Column>
        <Layout flexBasis={[0, 20, 80]} flexShrink={0} />
      </Box>
    </Box>
  )
})

export { Articles }
