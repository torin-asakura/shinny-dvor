import type { AnchorHTMLAttributes } from 'react'

export type BaseLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean
  path?: string
  width?: number | string
}
