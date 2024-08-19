import type { styleFn } from 'styled-system'

export const createBaseStyles = (): styleFn =>
  ({ scroll }: { scroll: boolean }) => ({
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'flex',
    zIndex: 9999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: scroll ? 'scroll' : 'unset',
  })
