import { PropsWithChildren }      from 'react'
import { forwardRef }             from 'react'
import { memo }                   from 'react'
import React                      from 'react'

import { menuBase }                from './menu.css.js'
import { menuSprinkles } from './menu.css.js'
import { menuShape }              from './menu.css.js'
import { menuAppearance }         from './menu.css.js'

interface MenuProps extends PropsWithChildren {
  triggerBounds?: { width: number }
}

export const Menu = memo(
  forwardRef<HTMLDivElement, MenuProps>(({ children, triggerBounds, ...props }, ref) => {
    const dynamicClasses = menuSprinkles({
      width: triggerBounds?.width || 'auto',
    })
    return (
      <div
        ref={ref}
        className={`${menuBase} ${menuShape} ${menuAppearance} ${dynamicClasses}`}
        {...props}
      >
        {children}
      </div>
    )
  })
)
