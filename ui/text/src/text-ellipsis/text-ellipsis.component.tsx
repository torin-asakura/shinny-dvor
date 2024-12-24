import type { PropsWithChildren } from 'react'

import { Text }                   from '@atls-ui-parts/text'

import React                      from 'react'
import { memo }                   from 'react'

import { TextEllipsisProps }      from './text-ellipsis.interface.js'
import { baseEllipsisStyle }      from './text-ellipsis.css.js'

export const TextEllipsis = memo(({
  lineClamp,
  children,
  ...props
}: PropsWithChildren<TextEllipsisProps>) => {
  const dynamicEllipsisStyle = {
    WebkitLineClamp: lineClamp.toString(),
  }
  return (
    <Text className={baseEllipsisStyle} style={dynamicEllipsisStyle} {...props}>
      {children}
    </Text>
  )
})
