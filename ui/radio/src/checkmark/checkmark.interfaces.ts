import type { PropsWithChildren } from 'react'

export interface CheckmarkProps extends PropsWithChildren {
  checked: boolean
  textTransform?: 'lowercase' | 'uppercase'
}
