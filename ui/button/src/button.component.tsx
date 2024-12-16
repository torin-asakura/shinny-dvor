/* eslint-disable */

import type { FC }          from 'react'

import type { ButtonProps } from './button.interface.js'

import { Content }          from '@atls-ui-parts/button'
import styled               from '@emotion/styled'
import { useState }         from 'react'
import React                from 'react'

import { useHover }         from '@ui/utils'

// import { baseStyles }       from './button.styles.js'
// import { shapeStyles }      from './button.styles.js'
// import { appearanceStyles } from './styles/index.js'

// export const ButtonElement = styled('button')<any>(baseStyles, shapeStyles, appearanceStyles)

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const [hover, hoverProps] = useHover()
  const [pressed, setPressed] = useState<boolean>(false)

  return <h1>button</h1>
}

// <ButtonElement
//   $fill
//   hover={hover}
//   pressed={pressed}
//   onMouseDown={() => {
//     setPressed(true)
//   }}
//   onMouseUp={() => {
//     setPressed(false)
//   }}
//   {...props}
//   {...hoverProps}
// >
//   <Content>{children}</Content>
// </ButtonElement>
