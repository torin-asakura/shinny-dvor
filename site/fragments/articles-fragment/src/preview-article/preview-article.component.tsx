import type { FC }                  from 'react'

import type { PreviewArticleProps } from './preview-article.interface.js'

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
    <Column fill {...hoverProps}>
      <Box width={[300, 300, 405]} height={[200, 260, 260]} backgroundColor='gray'>
        <ImageBlock src={featuredImage?.node.mediaItemUrl} alt={featuredImage?.node.altText} />
      </Box>
      <Layout flexBasis={24} />
      <Layout width={300}>
        <Text color={hover ? 'blue' : 'black'} lineHeight='grown'>
          {formattedDate(date)}
        </Text>
      </Layout>
      <Layout flexBasis={8} />
      <Layout width={300}>
        <Text color={hover ? 'blue' : 'black'} fontWeight='medium' fontSize='big'>
          {title}
        </Text>
      </Layout>
      <Layout flexBasis={8} />
      <Row width={[300, 300, 405]} maxHeight={52}>
        <TextEllipsis lineHeight='medium' color='darkGray' overflow='hidden' lineClamp={2}>
          {normalizeString(excerpt)}
        </TextEllipsis>
      </Row>
    </Column>
  )
}

export { PreviewArticle }
