import { createBaseStyles }       from '@atls-ui-parts/input'
import { createShapeStyles }      from '@atls-ui-parts/input'
import { createAppearanceStyles } from '@atls-ui-parts/input'

import { styleFn }                from 'styled-system'

export const shapeStyles = ({ theme }): styleFn =>
  createShapeStyles({
    fontFamily: theme.fonts.primary,
    fontWeight: 400,
    size: 32,
    fontSize: 16,
    paddingRatio: 0,
  })
export const baseStyles = createBaseStyles()
export const appearanceStyles = createAppearanceStyles({
  fontColor: 'black',
  backgroundColor: 'white',
})
