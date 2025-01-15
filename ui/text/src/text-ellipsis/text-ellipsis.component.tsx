import type { PropsWithChildren }   from 'react'

import type { ResponsiveTextProps } from '../responsive-text/index.js'
import type { TextEllipsisProps }   from './text-ellipsis.interface.js'

import { Text as BaseText }         from '@atls-ui-parts/text'
import { memo }                     from 'react'
import React                        from 'react'

import { rainbowSprinkles }         from '../responsive-text/index.js'
import { baseEllipsisStyle }        from './text-ellipsis.css.js'

export const TextEllipsis: React.FC<PropsWithChildren<ResponsiveTextProps & TextEllipsisProps>> =
  memo(({ lineClamp, children, ...props }) => {
    const { className, style, otherProps } = rainbowSprinkles(props)
    const dynamicEllipsisStyle = {
      WebkitLineClamp: lineClamp.toString(),
      ...style,
    }

    return (
      <BaseText
        className={`${baseEllipsisStyle} ${className}`}
        style={dynamicEllipsisStyle}
        {...otherProps}
      >
        {children}
      </BaseText>
    )
  })
