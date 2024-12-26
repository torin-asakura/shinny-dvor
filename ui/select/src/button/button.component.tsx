import { forwardRef }       from 'react'
import { memo }             from 'react'
import React                from 'react'

import { ButtonProps }      from './button.interfaces.js'
import { appearanceStyles } from './button.css.js'
import { baseStyles }       from './button.css.js'
import { shapeStyles }      from './button.css.js'

const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(({ isSelected, onClick, children, ...props }, ref) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      if (onClick) onClick(event)
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${isSelected ? appearanceStyles.selected : appearanceStyles.default} ${shapeStyles}`}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    )
  })
)

export { Button }
