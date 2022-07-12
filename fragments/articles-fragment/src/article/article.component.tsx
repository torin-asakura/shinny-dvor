import { useReactiveVar } from '@apollo/client'

import DOMPurify          from 'dompurify'
import React              from 'react'
import plural             from 'plural-ru'
import { FC }             from 'react'

import { PostId }         from '@store/articles'
import { Divider }        from '@ui/divider'
import { ImageBlock }     from '@ui/image'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'
import { Space }          from '@ui/text'
import { extractor }      from '@shared/utils'
import { formattedDate }  from '@shared/utils'
import { postIdVar }      from '@store/articles'

import { ReturnButton }   from './return-button'
import { useBlog }        from '../data'
import { usePostById }    from '../data'
import { messages }       from '../messages'

const Article: FC = () => {
  const postId = useReactiveVar<PostId>(postIdVar)

  // TODO fetch views
  const views = 200

  const { content, title, date, featuredImage } = usePostById({ postId })
  const { blog } = useBlog()

  let CTA = ''

  if (blog) {
    CTA = extractor(blog, 'id', 'cG9zdDoxOTk3')
  }

  return (
    <Column width='100%' height='auto'>
      <Box minHeight={[440, 440, 480]} width='100%' position='relative' justifyContent='center'>
        <Box
          backgroundColor='black'
          position='absolute'
          width={[375, 375, '100%']}
          height={[440, 440, 480]}
          zIndex='-1'
        >
          <ImageBlock
            width='100%'
            src={featuredImage?.node.mediaItemUrl}
            alt={featuredImage?.node.altText}
            style={{ opacity: 0.5 }}
          />
        </Box>
        <Layout flexBasis={[20, 20, 83]} />
        <Column width={['100%', '100%', '1280px']}>
          <Layout flexBasis={[32, 32, 48]} flexShrink={0} />
          <Column justifyContent='space-between'>
            <Box width={102}>
              <ReturnButton title={CTA} />
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
                      {views}
                      <Space />
                      {plural(
                        views,
                        messages.views.view,
                        messages.views.viewed,
                        messages.views.views
                      )}
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
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }} />
            </Text>
          </Row>
          <Layout flexBasis={[48, 48, 80]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 20, 298]} flexShrink={0} />
      </Row>
    </Column>
  )
}

export { Article }
