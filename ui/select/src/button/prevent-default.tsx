import type { CreatePreventDefaultType } from './prevent-default.interface.js'

import { forwardRef }                    from 'react'
import React                             from 'react'

export const createPreventDefault: CreatePreventDefaultType = (Button) =>
  forwardRef(({ onClick, ...props }, ref) => (
    <Button
      onClick={(event) => {
        event.preventDefault()
        onClick(event)
      }}
      ref={ref}
      {...props}
    />
  ))
