import type { ThemeType }    from '@ui/theme'
import type { styleFn }      from 'styled-system'

import { createShapeStyles } from '@atls-ui-parts/button'

const getSmallSizeStyles = (theme: ThemeType): styleFn => {
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
