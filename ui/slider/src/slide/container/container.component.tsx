import type { BoxProps }       from '@ui/layout'

import { memo }                from 'react'
import React                   from 'react'

import { baseContainerStyles } from './container.css.js'
import { mediaContainerStyle } from './container.css.js'

export const Container = memo(({ children, ...props }: BoxProps) => (
  <div className={`${baseContainerStyles} ${mediaContainerStyle}`} {...props}>
    {children}
  </div>
))
