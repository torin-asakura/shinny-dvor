import type { ArticleProps }           from './article.interface.js'
import type { FC }                     from 'react'

import React                           from 'react'
import { FormattedPlural }             from 'react-intl'
import { FormattedMessage }            from 'react-intl'
import { memo }                        from 'react'
import { useEffect }                   from 'react'

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

const Article: FC<ArticleProps> = memo(({ fragmentsData, postData }) => {
  const { postId, content, title, date, viewCount, contentAddons } = postData

  const goBack = extractFragment('contentAddons', 'blog', fragmentsData).title

  const incrementViewCounter = useIncrementPostViewCounter()

  useEffect(() => {
    incrementViewCounter(postId)
  }, [])

  return (
    <Column width='100%' height='auto' marginTop={[80, 80, 104]}>
      <Box minHeight={[440, 440, 480]} width='100%' position='relative' justifyContent='center'>
        <Box
          backgroundColor='black'
          position='absolute'
          width='100%'
          height={[440, 440, 480]}
          zIndex='-1'
        >
          <ImageBlock
            width={1606}
            height={480}
            src={contentAddons?.image.mediaItemUrl}
            alt={contentAddons?.image.altText}
            style={{ opacity: 0.5 }}
          />
        </Box>
        <Layout flexBasis={[20, 20, 83]} />
        <Column width={['100%', '100%', '1280px']}>
          <Layout flexBasis={[32, 32, 48]} flexShrink={0} />
          <Column justifyContent='space-between'>
            <Box width={102}>
              <ReturnButton title={goBack} />
            </Box>
            <Box>
              <Column>
                <Layout>
                  <Text fontWeight='medium' fontSize='giant' lineHeight='grown' color='white'>
                    {title}
                  </Text>
                </Layout>
                <Layout flexBasis={[16, 16, 24]} />
                <Row>
                  <Layout>
                    <Text fontWeight='medium' color='charcoal' lineHeight='grown'>
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
                  <Layout flexBasis={24} />
                  <Layout>
                    <Divider direction='vertical' weight={2} backgroundColor='charcoal' />
                  </Layout>
                  <Layout flexBasis={24} />
                  <Layout>
                    <Text fontWeight='medium' color='charcoal' lineHeight='grown'>
                      {formattedDate(date)}
                    </Text>
                  </Layout>
                </Row>
              </Column>
              <Layout flexBasis={[20, 20, 100]} />
            </Box>
          </Column>
          <Layout flexBasis={[32, 32, 48]} flexShrink={0} />
        </Column>
      </Box>
      <Row justifyContent='center'>
        <Layout flexBasis={[20, 20, 298]} flexShrink={0} />
        <Column width={['100%', '100%', 843]}>
          <Layout flexBasis={[48, 48, 80]} flexShrink={0} />
          <Row>
            <Text lineHeight='medium'>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </Text>
          </Row>
          <Layout flexBasis={[48, 48, 80]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 20, 298]} flexShrink={0} />
      </Row>
    </Column>
  )
})

export { Article }
