import type { ResponsiveContainerProps } from '../responsive-container/index.js'
import type { FC }                       from 'react'
import type { PropsWithChildren }        from 'react'

import { Row as BaseRow }                from '@atls-ui-parts/layout'

import React                             from 'react'

import { rainbowSprinkles }              from '../responsive-container/index.js'

export const Row: FC<PropsWithChildren<RowProps>> = ({ children, ...props }) => {
  const { className, style, otherProps } = rainbowSprinkles(props)
  return (
    <BaseRow className={className} style={style} {...otherProps}>
      {children}
    </BaseRow>
  )
}
