import { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'

import { LayoutProps }                    from 'styled-system'
import { SpaceProps }                     from 'styled-system'

type ButtonColors =
  | 'primary'
  | 'secondary'
  | 'transparent'
  | 'radius'
  | 'darkSocial'
  | 'darkWheel'
  | 'lightWheel'

export interface ButtonProps extends BaseButtonProps, LayoutProps, SpaceProps {
  color?: ButtonColors
  width?: number | string | number[] | string[]
  height?: number | string | number[] | string[]
}
