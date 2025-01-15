import type { MenuSprinkles } from './menu.css.js'
import type { MenuProps }     from './menu.interfaces.js'

import { forwardRef }         from 'react'
import { memo }               from 'react'
import React                  from 'react'

import { menuBase }           from './menu.css.js'
import { menuListBase }       from './menu.css.js'
import { menuListSprinkles }  from './menu.css.js'
import { menuShape }          from './menu.css.js'
import { menuAppearance }     from './menu.css.js'

export const Menu = memo(
  forwardRef<HTMLDivElement, MenuProps & MenuSprinkles>((
    { children, triggerBounds, ...props },
    ref
  ) => {
    const { style, className, otherProps } = menuListSprinkles({
      width: triggerBounds ? `${triggerBounds.width}px` : 'auto',
    })

    return (
      <div ref={ref} className={`${menuBase} ${menuShape} ${menuAppearance}`} {...props}>
        <ul className={`${menuListBase} ${className}`} style={style} {...otherProps}>
          {children}
        </ul>
      </div>
    )
  })
)
