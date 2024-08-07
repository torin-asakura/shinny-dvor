import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'

import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { useHover }         from '@ui/utils'

import { ButtonProps }      from './button.interface.js'
import { baseStyles }       from './button.styles.js'
import { shapeStyles }      from './button.styles.js'
import { appearanceStyles } from './styles/index.js'

export const ButtonElement = styled('button')<any>(baseStyles, shapeStyles, appearanceStyles)

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const [hover, hoverProps] = useHover()
  const [pressed, setPressed] = useState<boolean>(false)

  return (
    <ButtonElement
      $fill
      hover={hover}
      pressed={pressed}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      {...props}
      {...hoverProps}
    >
      <Content>{children}</Content>
    </ButtonElement>
  )
}
