import type { ResponsiveContainerProps } from '../responsive-container/index.js'
import type { FC }                       from 'react'
import type { PropsWithChildren }        from 'react'

import { Column as BaseColumn }          from '@atls-ui-parts/layout'

import React                             from 'react'

import { rainbowSprinkles }              from '../responsive-container/index.js'

export const Column: FC<PropsWithChildren<ResponsiveContainerProps>> = ({ children, ...props }) => {
  const { className, style, otherProps } = rainbowSprinkles(props)
  return (
    <BaseColumn className={className} style={style} {...otherProps}>
      {children}
    </BaseColumn>
  )
}
