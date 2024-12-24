import { Text }              from '@atls-ui-parts/text'
import { memo }              from 'react'
import React                 from 'react'

import { TextEllipsisProps } from './text-ellipsis.interface.js'
import { baseEllipsisStyle } from './text-ellipsis.css.js'

export const TextEllipsis = memo(({ lineClamp, children, ...props }: TextEllipsisProps) => {
  const dynamicEllipsisStyle = {
    WebkitLineClamp: lineClamp.toString(),
  }
  return (
    <Text className={baseEllipsisStyle} style={dynamicEllipsisStyle} {...props}>
      {children}
    </Text>
  )
})
