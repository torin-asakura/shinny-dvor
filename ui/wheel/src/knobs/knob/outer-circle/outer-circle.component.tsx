import type { OuterCircleProps } from './outer-circle.interfaces.js'

import { forwardRef }            from 'react'
import React                     from 'react'

import { outerCircleStyles }     from './outer-circle.css.js'

export const OuterCircle = forwardRef<HTMLDivElement, OuterCircleProps>((
  { children, hover, ...props },
  ref
) => (
  <div
    ref={ref}
    className={outerCircleStyles({
      hover: hover ? `defaultHover` : undefined,
    })}
    {...props}
  >
    {children}
  </div>
))
