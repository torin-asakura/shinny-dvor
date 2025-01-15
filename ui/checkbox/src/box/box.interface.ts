import type { PropsWithChildren } from 'react'

export type CheckboxSize = 'medium'

export interface BoxProps extends PropsWithChildren {
  checked?: boolean
  size?: CheckboxSize
}
