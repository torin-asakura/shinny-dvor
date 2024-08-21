import type { ButtonProps as BaseButtonProps } from '@atls-ui-parts/button'
import type { MouseEventHandler }              from 'react'
import type { LayoutProps }                    from 'styled-system'
import type { SpaceProps }                     from 'styled-system'

type ButtonColors =
  | 'primary'
  | 'secondary'
  | 'transparent'
  | 'radius'
  | 'darkSocial'
  | 'darkWheel'
  | 'lightWheel'
  | 'grey'
  | 'blueText'

export interface ButtonProps extends BaseButtonProps, LayoutProps, SpaceProps {
  color?: ButtonColors
  width?: number | string | number[] | string[]
  height?: number | string | number[] | string[]
  onMouseEnter?: MouseEventHandler<HTMLDivElement>
  onMouseLeave?: MouseEventHandler<HTMLDivElement>
}
