import React               from 'react'
import { FC }              from 'react'

import { ARTICLE }         from '@store/articles'
import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Text }            from '@ui/text'
import { TextEllipsis }    from '@ui/text'
import { extractFragment } from '@globals/data'
import { normalizeString } from '@shared/utils'
import { scrollTop }       from '@shared/utils'
import { formattedDate }   from '@shared/utils'
import { screenVar }       from '@store/articles'
import { postIdVar }       from '@store/articles'

import { ArticlesProps }   from '../articles.interface'

const AllArticles: FC<ArticlesProps> = ({ blogData, postsData }) => {
  const titlePage = extractFragment('contentAddons', 'title-blog', blogData).title

  return (
    <Box maxWidth={['100%', '100%', '1440px']} height='auto'>
      <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
      <Column width='100%' height='auto'>
        <Layout flexBasis={[20, 20, 32]} flexShrink={0} />
        <Layout>
          <Text fontWeight='bold' fontSize='extra'>
            {titlePage}
          </Text>
        </Layout>
        <Row justifyContent='space-between' flexWrap='wrap'>
          {postsData.map(({ id, title, date, excerpt, featuredImage }) => (
            <Box
              key={id}
              width={['100%', '100%', 405]}
              onClick={() => {
                postIdVar(id)
                screenVar(ARTICLE)
                scrollTop()
              }}
              // @ts-ignore
              cursor='pointer'
            >
              <Column width='100%'>
                <Layout flexBasis={[32, 32, 48]} />
                <Box width='100%' height={[224, 224, 260]}>
                  <ImageBlock
                    src={featuredImage.node.mediaItemUrl}
                    alt={featuredImage.node.altText}
                  />
                </Box>
                <Layout flexBasis={24} />
                <Layout>
                  <Text fontSise='large' lineHeight='grown'>
                    {formattedDate(date)}
                  </Text>
                </Layout>
                <Layout flexBasis={8} />
                <Layout>
                  <Text lineHeight='grown' fontWeight='medium' fontSize='large'>
                    {title}
                  </Text>
                </Layout>
                <Layout flexBasis={8} />
                <Box height={52}>
                  <TextEllipsis
                    color='darkGray'
                    overflow='hidden'
                    text-overflow='ellipsis'
                    lineHeight='medium'
                    lineClamp={2}
                  >
                    {normalizeString(excerpt)}
                  </TextEllipsis>
                </Box>
              </Column>
            </Box>
          ))}
        </Row>
        <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
      </Column>
      <Layout flexBasis={[20, 20, 80]} flexShrink={0} />
    </Box>
  )
}

export { AllArticles }
