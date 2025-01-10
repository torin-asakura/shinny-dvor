import type { InnerCircleProps } from './inner-circle.interfaces.js'

import { forwardRef }            from 'react'
import React                     from 'react'

import { innerCircleStyles }     from './inner-circle.css.js'

export const InnerCircle = forwardRef<HTMLDivElement, InnerCircleProps>((
  { children, hover, ...props },
  ref
) => (
  <div
    ref={ref}
    className={innerCircleStyles({
      hover: hover ? `defaultHover` : undefined,
    })}
    {...props}
  >
    {children}
  </div>
))
