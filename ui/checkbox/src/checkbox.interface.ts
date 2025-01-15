import type { PropsWithChildren } from 'react'

export interface CheckboxProps extends PropsWithChildren {
  active?: boolean
  onCheck?: (newState: boolean) => void
}
