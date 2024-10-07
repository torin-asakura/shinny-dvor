import type { ReactNode } from 'react'

export interface AccordionProps {
  text: string
  children: Array<ReactNode> | ReactNode
}
