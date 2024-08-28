import type { styleFn } from 'styled-system'

export const createTransitionStyles = (transition: string): styleFn =>
  () => ({
    transition,
  })
