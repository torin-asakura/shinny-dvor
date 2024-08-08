import React               from 'react'
import { FC }              from 'react'

import { ImageBlock }      from '@ui/image'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Text }            from '@ui/text'
import { TextEllipsis }    from '@ui/text'
import { normalizeString } from '@shared/utils'
import { formattedDate }   from '@shared/utils'
import { useHover }        from '@ui/utils'

import { ArticleProps }    from './article.interface.js'

const Article: FC<ArticleProps> = ({ featuredImage, date, title, excerpt }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box
      width={['100%', '100%', 405]}
      // @ts-ignore
      cursor='pointer'
    >
      <Column width='100%' {...hoverProps}>
        <Layout flexBasis={[32, 32, 48]} />
        <Box width='100%' height={[224, 224, 260]}>
          <ImageBlock src={featuredImage.node.mediaItemUrl} alt={featuredImage.node.altText} />
        </Box>
        <Layout flexBasis={24} />
        <Layout>
          <Text color={hover ? 'blue' : 'black'} lineHeight='grown'>
            {formattedDate(date)}
          </Text>
        </Layout>
        <Layout flexBasis={8} />
        <Layout>
          <Text
            color={hover ? 'blue' : 'black'}
            lineHeight='grown'
            fontWeight='medium'
            fontSize='large'
          >
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
  )
}

export { Article }
