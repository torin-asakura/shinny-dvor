import type { ResponsiveBoxProps } from './responsive-box.interface.js'
import type { FC }                 from 'react'
import type { PropsWithChildren }  from 'react'

import { Box }                     from '@atls-ui-parts/layout'

import React                       from 'react'

import { rainbowSprinkles }        from './responsive-box.css.js'

export const ResponsiveBox: FC<PropsWithChildren<ResponsiveBoxProps>> = ({
  children,
  ...props
}) => {
  const { className, style, otherProps } = rainbowSprinkles(props)
  return (
    <Box className={className} style={style} {...otherProps}>
      {children}
    </Box>
  )
}
