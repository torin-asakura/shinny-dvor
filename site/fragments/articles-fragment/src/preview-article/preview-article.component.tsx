/* eslint-disable */

import type { PreviewArticleProps } from './preview-article.interface.js'
import type { FC }                  from 'react'

import React                        from 'react'

import { ImageBlock }               from '@ui/image'
import { Box }                      from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Row }                      from '@ui/layout'
import { Text }                     from '@ui/text'
import { TextEllipsis }             from '@ui/text'
import { formattedDate }            from '@shared/utils'
import { normalizeString }          from '@shared/utils'
import { useHover }                 from '@ui/utils'

const PreviewArticle: FC<PreviewArticleProps> = ({ title, date, excerpt, featuredImage }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Column maxWidth={{ mobile: '300px', tablet: '300px', desktop: '405px' }} fill {...hoverProps}>
      <Box
        width='100%'
        height={{ mobile: '200px', tablet: '260px', desktop: '260px' }}
        backgroundColor='$gray'
      >
        <ImageBlock
          width={405}
          height={260}
          src={featuredImage?.node.mediaItemUrl}
          alt={featuredImage?.node.altText}
        />
      </Box>
      <Layout flexBasis='24px' />
      <Layout width='100%'>
        <Text color={hover ? 'blue' : 'black'} lineHeight='grown'>
          {formattedDate(date)}
        </Text>
      </Layout>
      <Layout flexBasis='8px' />
      <Layout width='100%'>
        <Text color={hover ? 'blue' : 'black'} fontWeight='medium' fontSize='big'>
          {title}
        </Text>
      </Layout>
      <Layout flexBasis='8px' />
      <Row width={{ mobile: 300, tablet: 300, desktop: '100%' }} maxHeight='52px'>
        <TextEllipsis lineHeight='medium' color='darkGray' overflow='hidden' lineClamp={2}>
          {normalizeString(excerpt)}
        </TextEllipsis>
      </Row>
    </Column>
  )
}

export { PreviewArticle }
