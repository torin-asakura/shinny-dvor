import type { ColumnProps }       from './column.interface.js'
import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import { Column as BaseColumn }   from '@atls-ui-parts/layout'

import React                      from 'react'

import { rainbowSprinkles }       from './column.css.js'

export const Column: FC<PropsWithChildren<ColumnProps>> = ({ children, ...props }) => {
  const { className, style, otherProps } = rainbowSprinkles(props)
  return (
    <BaseColumn className={className} style={style} {...otherProps}>
      {children}
    </BaseColumn>
  )
}
