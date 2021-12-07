import { createShapeStyles } from '@atls-ui-parts/button'
import { styleFn }           from 'styled-system'

const getNormalSizeStyles = (theme): styleFn => {
  const normalSizeStyles = createShapeStyles({
    size: 48,
    fontSize: 16,
    rounding: 2222,
    fontWeight: 600,
    fontFamily: 'IBM+Plex+Sans',
  })

  return normalSizeStyles
}

export { getNormalSizeStyles }
