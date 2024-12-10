import type { ResponsiveBoxProps } from './responsive-layout.interface.js'
import type { FC }                 from 'react'
import type { PropsWithChildren }  from 'react'

import { Layout }                  from '@atls-ui-parts/layout'

import React                       from 'react'

import { rainbowSprinkles }        from './responsive-layout.css.js'

export const ResponsiveLayout: FC<PropsWithChildren<ResponsiveBoxProps>> = ({
  children,
  ...props
}) => {
  const { className, style, otherProps } = rainbowSprinkles(props)
  return <Layout className={className} style={style} {...otherProps} />
}
