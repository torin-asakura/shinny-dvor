export type LinkColor = 'primary'

export interface BaseLinkProps {
  active?: boolean
}

export interface LinkProps {
  children?: any
  keep?: boolean
  href?: string
  path: string
  variant?: LinkColor
}
