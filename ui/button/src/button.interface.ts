import type { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'
import type { MouseEventHandler }              from 'react'
import type { LayoutProps }                    from 'styled-system'
import type { SpaceProps }                     from 'styled-system'

type ButtonColors =
  | 'blueText'
  | 'darkSocial'
  | 'darkWheel'
  | 'grey'
  | 'lightWheel'
  | 'primary'
  | 'radius'
  | 'secondary'
  | 'transparent'

export interface ButtonProps extends BaseButtonProps, LayoutProps, SpaceProps {
  color?: ButtonColors
  width?: Array<number> | Array<string> | number | string
  height?: Array<number> | Array<string> | number | string
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>
}
