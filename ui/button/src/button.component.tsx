import type { ButtonProps } from './button.interfaces.js'

import { forwardRef }       from 'react'
import { useState }         from 'react'
import React                from 'react'

import { useHover }         from '@ui/utils'

import { IconPlacement }    from './button.interfaces.js'
import { buttonStyles }     from './styles/index.js'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    children,
    icon,
    iconPlacement = IconPlacement.LEFT,
    size = 'common',
    variant = 'primary',
    disabled,
    ...props
  },
  ref
) => {
  const [pressed, setPressed] = useState<boolean>(false)
  const [hover, hoverProps] = useHover()

  const onMouseDown = (): void => {
    setPressed(true)
  }

  const onMouseUp = (): void => {
    setPressed(false)
  }

  return (
    <button
      ref={ref}
      type='button'
      disabled={disabled}
      className={buttonStyles({
        size,
        variant,
        pressed: pressed ? `${variant}Pressed` : undefined,
        hover: hover ? `${variant}Hover` : undefined,
        disabled: disabled ? `${variant}Disabled` : undefined,
      })}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      {...hoverProps}
      {...props}
    >
      {icon && iconPlacement === IconPlacement.LEFT && icon}
      {children}
      {icon && iconPlacement === IconPlacement.RIGHT && icon}
    </button>
  )
})
