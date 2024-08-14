import type { ThemeType }            from '@ui/theme'
import type { AnchorHTMLAttributes } from 'react'

export type BaseLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean
  theme?: ThemeType
  path?: string
}

export type LinkProps = (props: BaseLinkProps) => JSX.Element
