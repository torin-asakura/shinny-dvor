import { forwardRef }     from 'react'
import { memo }           from 'react'
import React              from 'react'

import { MenuSprinkles }  from './menu.css.js'
import { MenuProps }      from './menu.interfaces.js'
import { menuBase }       from './menu.css.js'
import { menuSprinkles }  from './menu.css.js'
import { menuShape }      from './menu.css.js'
import { menuAppearance } from './menu.css.js'

export const Menu = memo(
  forwardRef<HTMLUListElement, MenuProps & MenuSprinkles>((
    { children, triggerBounds, ...props },
    ref
  ) => {
    const { className, style, otherProps } = menuSprinkles({
      width: triggerBounds ? `${triggerBounds.width}px` : 'auto',
      ...props,
    })
    return (
      <ul
        ref={ref}
        className={`${menuBase} ${menuShape} ${menuAppearance} ${className}`}
        style={style}
        {...otherProps}
      >
        {children}
      </ul>
    )
  })
)
