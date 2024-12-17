import { PropsWithChildren } from 'react'

export interface CheckmarkProps extends PropsWithChildren {
  checked: boolean
  textTransform?: 'uppercase' | 'lowercase'
}
