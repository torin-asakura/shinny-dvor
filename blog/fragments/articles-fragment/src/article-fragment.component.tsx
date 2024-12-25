import type { FC }                     from 'react'

import type { ArticleProps }           from './article-fragment.interface.js'

import { FormattedPlural }             from 'react-intl'
import { FormattedMessage }            from 'react-intl'
import { memo }                        from 'react'
import { useEffect }                   from 'react'
import React                           from 'react'

import { Divider }                     from '@ui/divider'
import { ImageBlock }                  from '@ui/image'
import { Box }                         from '@ui/layout'
import { Row }                         from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Text }                        from '@ui/text'
import { Space }                       from '@ui/text'
import { extractFragment }             from '@globals/data'
import { useIncrementPostViewCounter } from '@globals/data'
import { formattedDate }               from '@shared/utils'

import { ReturnButton }                from './return-button/index.js'

export const Article: FC<ArticleProps> = memo(({ fragmentsData, postData }) => {
  const { postId, content, title, date, viewCount, contentAddons, featuredImage } = postData

  const goBack = extractFragment('contentAddons', 'blog', fragmentsData).title

  const incrementViewCounter = useIncrementPostViewCounter()

  useEffect(() => {
    incrementViewCounter(postId)
  }, [])

  return (
    <Column width='100%' height='auto' marginTop={[80, 80, 104]}>
      <Box height={[440, 440, 480]} width='$fill' position='relative' justifyContent='center'>
        <Box
          backgroundColor='$black'
          position='absolute'
          width='100%'
          height={[440, 440, 480]}
          zIndex='-1'
        >
          <ImageBlock
            width={1606}
            height={480}
            src={featuredImage.node.mediaItemUrl}
            alt={featuredImage.node.altText}
            style={{ opacity: 0.5 }}
          />
        </Box>
        <Column
          width='$fill'
          maxWidth='$g1240'
          height='$fill'
          justifyContent='space-between'
          paddingY={[32, 32, 48]}
          paddingX={[20, 20, 83]}
        >
          <ReturnButton title={goBack} />
          <Box>
            <Column>
              <Layout>
                <Text fontWeight='$medium' fontSize='$giant' lineHeight='$grown' color='$white'>
                  {title}
                </Text>
              </Layout>
              <Layout flexBasis={[16, 16, 24]} />
              <Row gap='$g24'>
                <Layout>
                  <Text fontWeight='$medium' color='$charcoal' lineHeight='$grown'>
                    {viewCount}
                    <Space />
                    <FormattedPlural
                      value={viewCount}
                      zero={<FormattedMessage id='article.views' />}
                      one={<FormattedMessage id='article.view' />}
                      two={<FormattedMessage id='article.viewed' />}
                      few={<FormattedMessage id='article.views' />}
                      many={<FormattedMessage id='article.views' />}
                      other={<FormattedMessage id='article.views' />}
                    />
                  </Text>
                </Layout>
                <Divider direction='vertical' weight={2} color='$charcoal' />
                <Layout>
                  <Text fontWeight='$medium' color='$charcoal' lineHeight='$grown'>
                    {formattedDate(date)}
                  </Text>
                </Layout>
              </Row>
            </Column>
          </Box>
        </Column>
      </Box>
      <Row justifyContent='center'>
        <Layout flexBasis={20} flexShrink={0} />
        <Column fill maxWidth={['100%', '100%', 843]}>
          <Layout flexBasis={[48, 48, 80]} flexShrink={0} />
          <Text lineHeight='$medium' width='100%'>
            <Row className='post-page__content-container'>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </Row>
          </Text>
          <Layout flexBasis={[48, 48, 80]} flexShrink={0} />
        </Column>
        <Layout flexBasis={20} flexShrink={0} />
      </Row>
    </Column>
  )
})
