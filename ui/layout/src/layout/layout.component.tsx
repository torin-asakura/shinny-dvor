import type { ResponsiveContainerProps } from '../responsive-container/index.js'
import type { FC }                       from 'react'
import type { PropsWithChildren }        from 'react'

import { Layout as BaseLayout }          from '@atls-ui-parts/layout'

import React                             from 'react'

import { rainbowSprinkles }              from '../responsive-container/index.js'

export const Layout: FC<PropsWithChildren<ResponsiveContainerProps>> = ({ children, ...props }) => {
  const { className, style, otherProps } = rainbowSprinkles(props)
  return (
    <BaseLayout className={className} style={style} {...otherProps}>
      {children}
    </BaseLayout>
  )
}
