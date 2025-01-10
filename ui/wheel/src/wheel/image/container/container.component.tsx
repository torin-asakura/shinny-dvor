import type { PropsWithChildren } from 'react'

import { forwardRef }             from 'react'
import React                      from 'react'

import { baseContainerStyles }    from './container.css.js'

export const Container = forwardRef<HTMLDivElement, PropsWithChildren>((
  { children, ...props },
  ref
) => (
  <div ref={ref} className={baseContainerStyles} {...props}>
    {children}
  </div>
))
