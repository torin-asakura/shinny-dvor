import type { FC }           from 'react'

import type { ArticleProps } from './article.interface.js'

import { memo }              from 'react'
import React                 from 'react'

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
      <Box width='$fill'>
        <Column width='100%' gap='$g24' {...hoverProps}>
          <Box width='$fill' aspectRatio='2/1'>
            <ImageBlock
              width='100%'
              height='100%'
              src={featuredImage.node.mediaItemUrl}
              alt={featuredImage.node.altText}
            />
          </Box>
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
              <TextEllipsis lineClamp={2}>{normalizeString(excerpt)}</TextEllipsis>
            </Box>
          </Column>
        </Column>
      </Box>
    </NextLink>
  )
})
