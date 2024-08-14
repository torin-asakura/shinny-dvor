import type { ThemeType }    from '@ui/theme'
import type { styleFn }      from 'styled-system'

import { createShapeStyles } from '@atls-ui-parts/button'

const getNormalSizeStyles = (theme: ThemeType): styleFn => {
  const normalSizeStyles = createShapeStyles({
    size: 48,
    fontSize: 16,
    rounding: 2222,
    fontWeight: 600,
    paddingRatio: 0,
    fontFamily: theme.fonts.primary,
  })

  return normalSizeStyles
}

export { getNormalSizeStyles }
