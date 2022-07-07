import { useReactiveVar } from '@apollo/client'

import React              from 'react'
import { FC }             from 'react'

import { PostId }         from '@store/articles'
import { Box }            from '@ui/layout'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'
import { formattedDate }  from '@shared/utils'
import { postIdVar }      from '@store/articles'

import { ReturnButton }   from './return-button'
import { usePostById }    from '../data'

const Article: FC = () => {
  const postId = useReactiveVar<PostId>(postIdVar)

  const { content, title, date } = usePostById({ postId })

  return (
    <Column width='100%'>
      <Row minHeight={[440, 440, 480]}>
        <Box width='100%' backgroundColor='gray' justifyContent='center'>
          <Layout flexBasis={[20, 20, 83]} />
          <Column width={['100%', '100%', '1280px']}>
            <Layout flexBasis={[32, 32, 48]} flexShrink={0} />
            <Column justifyContent='space-between'>
              <Box width={102}>
                <ReturnButton />
              </Box>
              <Box>
                <Column>
                  <Layout>
                    <Text fontWeight='medium' fontSize='giant' lineHeight='grown' color='white'>
                      {title}
                    </Text>
                  </Layout>
                  <Layout flexBasis={[16, 16, 24]} />
                  <Layout>
                    <Text fontWeight='medium' color='white' lineHeight='grown'>
                      {formattedDate(date)}
                    </Text>
                  </Layout>
                </Column>
                <Layout flexBasis={[20, 20, 100]} />
              </Box>
            </Column>
            <Layout flexBasis={[32, 32, 48]} flexShrink={0} />
          </Column>
        </Box>
      </Row>
      <Row justifyContent='center'>
        <Layout flexBasis={[20, 20, 298]} flexShrink={0} />
        <Column width={['100%', '100%', 843]}>
          <Layout flexBasis={[48, 48, 80]} flexShrink={0} />
          <Row>
            <Text lineHeight='medium'>{content}</Text>
          </Row>
          <Layout flexBasis={[48, 48, 80]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 20, 298]} flexShrink={0} />
      </Row>
    </Column>
  )
}

export { Article }
