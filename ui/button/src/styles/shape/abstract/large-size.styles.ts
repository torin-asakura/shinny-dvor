import { createShapeStyles } from '@atls-ui-parts/button'
import { styleFn }           from 'styled-system'

const getLargeSizeStyles = (theme): styleFn => {
  const largeSizeStyles = createShapeStyles({
    size: 56,
    fontSize: 16,
    rounding: 2222,
    fontWeight: 600,
    fontFamily: theme.fonts.primary,
  })

  return largeSizeStyles
}

export { getLargeSizeStyles }
