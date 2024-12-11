import type { LayoutProps }       from './layout.interface.js'
import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import { Layout as BaseLayout }   from '@atls-ui-parts/layout'

import React                      from 'react'

import { rainbowSprinkles }       from './layout.css.js'

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, ...props }) => {
  const { className, style, otherProps } = rainbowSprinkles(props)
  return (
    <BaseLayout className={className} style={style} {...otherProps}>
      {children}
    </BaseLayout>
  )
}
