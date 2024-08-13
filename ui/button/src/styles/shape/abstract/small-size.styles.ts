import { createShapeStyles } from '@atls-ui-parts/button'
import { styleFn }           from 'styled-system'

const getSmallSizeStyles = (theme): styleFn => {
  const smallSizeStyles = createShapeStyles({
    size: 40,
    fontSize: 14,
    rounding: 2222,
    fontWeight: 600,
    paddingRatio: 0.4,
    fontFamily: theme.fonts.primary,
  })

  return smallSizeStyles
}

export { getSmallSizeStyles }
