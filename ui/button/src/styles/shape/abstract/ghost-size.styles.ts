import type { styleFn }      from 'styled-system'

import { createShapeStyles } from '@atls-ui-parts/button'

const getGhostStyles = (): styleFn => {
  const ghostStyles = createShapeStyles({
    size: 'auto',
    paddingRight: 0,
    paddingLeft: 0,
  })

  return ghostStyles
}

export { getGhostStyles }
