import { Text as BaseText }    from '@atls-ui-parts/text'
import { PropsWithChildren }   from 'react'
import { memo }                from 'react'
import React                   from 'react'

import { ResponsiveTextProps } from '../responsive-text/index.js'
import { TextEllipsisProps }   from './text-ellipsis.interface.js'
import { rainbowSprinkles }    from '../responsive-text/index.js'
import { baseEllipsisStyle }   from './text-ellipsis.css.js'

export const TextEllipsis: React.FC<PropsWithChildren<ResponsiveTextProps & TextEllipsisProps>> =
  memo(({ lineClamp, children, ...props }) => {
    const dynamicEllipsisStyle = {
      WebkitLineClamp: lineClamp.toString(),
    }

    const { className, otherProps } = rainbowSprinkles(props)

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
