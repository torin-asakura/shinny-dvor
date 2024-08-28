import type { CreatePreventDefaultType } from './prevent-default.interface.js'

import { forwardRef }                    from 'react'
import React                             from 'react'

export const createPreventDefault: CreatePreventDefaultType = (Button) =>
  forwardRef(({ onClick, ...props }, ref) => (
    <Button
      ref={ref}
      onClick={(event): void => {
        event.preventDefault()
        onClick(event)
      }}
      {...props}
    />
  ))
