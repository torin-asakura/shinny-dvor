import React               from 'react'
import { FC }              from 'react'
import { forwardRef }      from 'react'

import { ARTICLE }         from '@store/articles'
import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Text }            from '@ui/text'
import { TextEllipsis }    from '@ui/text'
import { extractFragment } from '@globals/data'
import { formattedDate }   from '@shared/utils'
import { normalizeString } from '@shared/utils'
import { screenVar }       from '@store/articles'

import { ArticlesProps }   from './articles.interface'
import { Carousel }        from './carousel'

const Articles: FC<ArticlesProps> = forwardRef(({ postsData, blogData }, ref: any) => {
  const latestPublications = extractFragment('contentAddons', 'latest-publications', blogData).title

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
            <Text
              lineHeight=''
              fontWeight='medium'
              fontSize={['extraLarge', 'extraLarge', 'giant']}
            >
              {latestPublications}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 48]} />
          <Row justifyContent='space-between' display={['none', 'none', 'flex']}>
            {postsData.slice(0, 3).map(({ id, title, date, excerpt, featuredImage }) => (
              <Column key={id} onClick={() => screenVar(ARTICLE)}>
                <Box width={405} height={260}>
                  <ImageBlock
                    src={featuredImage?.node.mediaItemUrl}
                    alt={featuredImage?.node.altText}
                  />
                </Box>
                <Layout flexBasis={24} />
                <Layout>
                  <Text lineHeight='grown'>{formattedDate(date)}</Text>
                </Layout>
                <Layout flexBasis={8} />
                <Layout>
                  <Text lineHeight='grown' fontWeight='medium' fontSize='large'>
                    {title}
                  </Text>
                </Layout>
                <Layout flexBasis={8} />
                <Layout maxHeight={52} width={405}>
                  <TextEllipsis
                    lineHeight='medium'
                    color='darkGray'
                    overflow='hidden'
                    lineClamp={2}
                  >
                    {normalizeString(excerpt)}
                  </TextEllipsis>
                </Layout>
              </Column>
            ))}
          </Row>
          <Row display={['flex', 'flex', 'none']} overflow='hidden'>
            <Carousel>
              {postsData.map(({ id, title, date, excerpt, featuredImage }) => (
                <Column fill maxHeight={333} key={id}>
                  <Box width={300} height={200} backgroundColor='gray'>
                    <ImageBlock
                      src={featuredImage?.node.mediaItemUrl}
                      alt={featuredImage?.node.altText}
                    />
                  </Box>
                  <Layout flexBasis={24} />
                  <Layout width={300}>
                    <Text fontWeight='grown'>{formattedDate(date)}</Text>
                  </Layout>
                  <Layout flexBasis={8} />
                  <Layout width={300}>
                    <Text fontWeight='medium' fontSize='big'>
                      {title}
                    </Text>
                  </Layout>
                  <Layout flexBasis={8} />
                  <Row width={300} maxHeight={52}>
                    <Text lineHeight='medium' color='darkGray' overflow='hidden'>
                      {normalizeString(excerpt)}
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
