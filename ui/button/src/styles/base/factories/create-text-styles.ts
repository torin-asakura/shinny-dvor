import type { styleFn } from 'styled-system'

const createTextStyles = (): styleFn => () => ({
  whiteSpace: 'nowrap',
})

export { createTextStyles }
