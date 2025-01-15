import type { TriggerContainerProps } from './trigger-container.interfaces.js'

import { forwardRef }                 from 'react'
import { memo }                       from 'react'
import React                          from 'react'

import { triggerContainerBase }       from './trigger-container.css.js'

export const TriggerContainer = memo(
  forwardRef<HTMLDivElement, TriggerContainerProps>(({ children, ...props }, ref) => (
    <div ref={ref} className={triggerContainerBase} {...props}>
      {children}
    </div>
  ))
)
