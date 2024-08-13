import { createBaseStyles }       from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'

import { createTextStyles }       from './factories/index.js'
import { createTransitionStyles } from './factories/index.js'

const getBaseStyles = (): styleFn => {
  const baseStyles = createBaseStyles()
  const textStyles = createTextStyles()
  const transitionStyles = createTransitionStyles('.1s')

  return () => ({
    ...baseStyles(),
    ...textStyles(),
    ...transitionStyles(),
  })
}

export { getBaseStyles }
