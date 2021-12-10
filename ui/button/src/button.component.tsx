import React                from 'react'
import { FC }               from 'react'
import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'

import { ButtonProps }      from './button.interface'
import { baseStyles }       from './button.styles'
import { shapeStyles }      from './button.styles'
import { appearanceStyles } from './button.styles'

export const ButtonElement = styled.button<any>(baseStyles, shapeStyles, appearanceStyles)

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonElement fill {...props}>
    <Content>{children}</Content>
  </ButtonElement>
)
