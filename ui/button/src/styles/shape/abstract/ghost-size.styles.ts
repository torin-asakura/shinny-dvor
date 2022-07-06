import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getGhostStyles = (): styleFn => {
  const ghostStyles = createShapeStyles({
    // @ts-ignore
    size: 'auto',
    paddingRight: 0,
    paddingLeft: 0,
  })

  return ghostStyles
}

export { getGhostStyles }
