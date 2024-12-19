import { memo }                                     from 'react'
import React                                       from 'react'

import { BoxProps }                                 from '@ui/layout'

import { baseContainerStyles }                      from './container.css.js'

import { mediaContainerStyle } from './container.css.js'

export const Container = memo(({ children, ...props }: BoxProps) => (
  <div className={`${baseContainerStyles} ${mediaContainerStyle}`} {...props}>
    {children}
  </div>
))
