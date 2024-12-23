import type { ArticleProps } from './article.interface.js'
import type { FC }           from 'react'

import React                 from 'react'
import { memo }              from 'react'

import { ImageBlock }        from '@ui/image'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { NextLink }          from '@ui/link'
import { Text }              from '@ui/text'
import { TextEllipsis }      from '@ui/text'
import { normalizeString }   from '@shared/utils'
import { formattedDate }     from '@shared/utils'
import { useHover }          from '@ui/utils'

export const Article: FC<ArticleProps> = memo(({
  uri,
  featuredImage,
  date,
  title,
  excerpt,
}: ArticleProps) => {
  const [hover, hoverProps] = useHover()

  return (
    <NextLink key={uri} path={uri}>
      <Box width={['100%', '100%', 405]} cursor='pointer'>
        <Column width='100%' gap='$g24' {...hoverProps}>
          <ImageBlock
            width={405}
            height={260}
            src={featuredImage.node.mediaItemUrl}
            alt={featuredImage.node.altText}
          />
          <Column gap='$g8'>
            <Text color={hover ? '$blue' : '$black'} lineHeight='$grown'>
              {formattedDate(date)}
            </Text>
            <Text
              color={hover ? '$blue' : '$black'}
              lineHeight='$grown'
              fontWeight='$medium'
              fontSize='$large'
            >
              {title}
            </Text>
            <Box>
              <Text height={52} style={{ textOverflow: 'ellipsis' }}>
                {normalizeString(excerpt)}
              </Text>
            </Box>
          </Column>
        </Column>
      </Box>
    </NextLink>
  )
})
