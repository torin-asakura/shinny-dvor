import type { Sprinkles }      from './container.css.js'
import type { ContainerProps } from './container.interface.js'

import { forwardRef }          from 'react'
import React                   from 'react'

import { baseContainerStyles } from './container.css.js'
import { rainbowSprinkles }    from './container.css.js'

export const Container = forwardRef<HTMLDivElement, ContainerProps & Sprinkles>((
  { children, ...props },
  ref
) => {
  const { className, style, otherProps } = rainbowSprinkles(props)

  return (
    <div ref={ref} className={`${baseContainerStyles} ${className}`} style={style} {...otherProps}>
      {children}
    </div>
  )
})
