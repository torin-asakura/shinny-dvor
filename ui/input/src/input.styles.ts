import type { styleFn }           from 'styled-system'

import { baseInputStyles }        from '@atls-ui-parts/input'
import { createShapeStyles }      from '@atls-ui-parts/input'
import { createAppearanceStyles } from '@atls-ui-parts/input'

export const shapeStyles: styleFn = ({ theme }) =>
  createShapeStyles({
    fontFamily: theme.fonts.primary,
    fontWeight: 400,
    size: 32,
    fontSize: 16,
    paddingRatio: 0,
  })

export const baseStyles = baseInputStyles

export const appearanceStyles = createAppearanceStyles({
  fontColor: 'black',
  backgroundColor: 'white',
})

export const additionalAppearanceStyles: styleFn = ({ theme }) => ({
  lineHeight: theme.lineHeights.medium,
})
