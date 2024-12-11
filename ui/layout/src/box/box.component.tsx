import type { BoxProps }          from './box.interface.js'
import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import { Box as BaseBox }         from '@atls-ui-parts/layout'

import React                      from 'react'

import { rainbowSprinkles }       from './box.css.js'

export const Box: FC<PropsWithChildren<BoxProps>> = ({ children, ...props }) => {
  const { className, style, otherProps } = rainbowSprinkles(props)
  return (
    <BaseBox className={className} style={style} {...otherProps}>
      {children}
    </BaseBox>
  )
}
