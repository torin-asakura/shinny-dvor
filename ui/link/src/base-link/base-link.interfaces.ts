import type { AnchorHTMLAttributes } from 'react'

export type BaseLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  fill?: boolean
  active?: boolean
  path?: string
  width?: number | string
}
