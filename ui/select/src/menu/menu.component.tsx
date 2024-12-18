import { PropsWithChildren } from 'react'
import { forwardRef }        from 'react'
import { memo }              from 'react'
import React                 from 'react'

import { menuBase }          from './menu.css.js'
import { menuShape }         from './menu.css.js'
import { menuAppearance }    from './menu.css.js'

export const Menu = memo(
  forwardRef<HTMLDivElement, PropsWithChildren>(({ children, ...props }, ref) => (
    <div ref={ref} className={`${menuBase} ${menuShape} ${menuAppearance}`} {...props}>
      {children}
    </div>
  ))
)
