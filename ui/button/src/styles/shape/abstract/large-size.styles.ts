import type { ThemeType }    from '@ui/theme'
import type { styleFn }      from 'styled-system'

import { createShapeStyles } from '@atls-ui-parts/button'

const getLargeSizeStyles = (theme: ThemeType): styleFn => {
  const largeSizeStyles = createShapeStyles({
    size: 56,
    fontSize: 16,
    rounding: 2222,
    fontWeight: 600,
    paddingRatio: 1,
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: theme.fonts.primary,
  })

  return largeSizeStyles
}

export { getLargeSizeStyles }
