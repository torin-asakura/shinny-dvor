import type { ContainerProps } from './container.interface.js'

import { forwardRef }          from 'react'
import React                   from 'react'

import { baseContainerStyles } from './container.css.js'

export const Container = forwardRef<HTMLDivElement, ContainerProps>((
  { children, className, ...props },
  ref
) => {
  return (
    <div ref={ref} className={baseContainerStyles} {...props}>
      {children}
    </div>
  )
})
