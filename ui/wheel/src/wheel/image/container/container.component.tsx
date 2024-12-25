import { forwardRef }                    from 'react'
import { PropsWithChildren } from 'react'
import React                            from 'react'

import { baseContainerStyles }          from './container.css.js'

export const Container = forwardRef<HTMLDivElement, PropsWithChildren>((
  { children, ...props },
  ref
) => {
  return (
    <div ref={ref} className={baseContainerStyles} {...props}>
      {children}
    </div>
  )
})
