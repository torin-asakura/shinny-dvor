import type { ArrowContainerProps }                 from './arrow-container.interface.js'

import { forwardRef }                               from 'react'
import React                                        from 'react'

import { arrowBase }                                 from './arrow-container.css.js'

import { ArrowSprinkles }                 from './arrow-container.css.js'

import { arrowSprinkles } from './arrow-container.css.js'

export const ArrowContainer = forwardRef<HTMLDivElement, ArrowContainerProps & ArrowSprinkles>((
  { isOpen, ...props },
  ref
) => {
  const { className, style, otherProps } = arrowSprinkles({
    transform: `rotate(${isOpen ? 180 : 0}deg)`,
    ...props,
  })

  return <div ref={ref} className={`${arrowBase} ${className}`} style={style} {...otherProps} />
})
