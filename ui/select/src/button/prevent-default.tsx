import React          from 'react'
import { FC }         from 'react'
import { forwardRef } from 'react'

const createPreventDefault = (Button): FC<any> =>
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

export { createPreventDefault }
