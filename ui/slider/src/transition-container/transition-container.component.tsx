import { PropsWithChildren }         from 'react'
import { memo }                      from 'react'
import React                         from 'react'

import { BoxProps }                  from '@ui/layout'

import { transitionContainerStyles } from './transition-container.css.js'

export const TransitionContainer = memo(({ children, ...props }: BoxProps) => (
  <div className={`${transitionContainerStyles}`} {...props}>
    {children}
  </div>
))
