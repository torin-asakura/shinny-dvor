import type { ArrowSprinkles }      from './arrow.css.js'
import type { ArrowContainerProps } from './arrow.interface.js'

import { forwardRef }               from 'react'
import { memo }                     from 'react'
import React                        from 'react'

import { DropDownIcon }             from '@ui/icons'

import { arrowBase }                from './arrow.css.js'
import { arrowSprinkles }           from './arrow.css.js'

export const Arrow = memo(
  forwardRef<HTMLDivElement, ArrowContainerProps & ArrowSprinkles>(({ isOpen, ...props }, ref) => {
    const { className, style, otherProps } = arrowSprinkles({
      transform: `rotate(${isOpen ? 180 : 0}deg)`,
      ...props,
    })

    return (
      <div ref={ref} className={`${arrowBase} ${className}`} style={style} {...otherProps}>
        <DropDownIcon width={14} height={14} />
      </div>
    )
  })
)
