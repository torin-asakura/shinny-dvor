import type { styleFn }           from 'styled-system'

import { createBaseStyles }       from '@atls-ui-parts/button'

import { createTextStyles }       from './factories/index.js'
import { createTransitionStyles } from './factories/index.js'

const getBaseStyles = (): styleFn => {
  const baseStyles: () => styleFn = createBaseStyles()
  const textStyles = createTextStyles()
  const transitionStyles = createTransitionStyles('.1s')

  return () =>
    ({
      ...baseStyles(),
      ...textStyles(),
      ...transitionStyles(),
    }) as Record<string, string>
}

export { getBaseStyles }
