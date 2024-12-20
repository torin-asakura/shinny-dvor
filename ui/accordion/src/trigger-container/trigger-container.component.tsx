import React                      from 'react'

import { forwardRef }       from 'react'

import { memo } from 'react'

import { TriggerContainerProps }   from './trigger-container.interfaces.js'
import { triggerContainerBase }    from './trigger-container.css.js'

export const TriggerContainer = memo(
  forwardRef<HTMLDivElement, TriggerContainerProps>(({ children, ...props }, ref) => {
    return (
      <div ref={ref} className={triggerContainerBase} {...props}>
        {children}
      </div>
    )
  })
)
