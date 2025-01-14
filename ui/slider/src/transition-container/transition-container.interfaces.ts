import type { PropsWithChildren } from 'react'

export interface TransitionContainerProps extends PropsWithChildren {
  isHighlighted: boolean
  onClick: VoidFunction
}
