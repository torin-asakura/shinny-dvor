import { createBaseStyles }       from '@atls-ui-parts/input'
import { createShapeStyles }      from '@atls-ui-parts/input'
import { createAppearanceStyles } from '@atls-ui-parts/input'

export const shapeStyles = createShapeStyles(({ theme }) => ({
  fontFamily: theme.fonts.primary,
  fontWeight: 400,
  size: 32,
  fontSize: 16,
  lineHeight: theme.lineHeights.medium,
  borderBottom: '1px solid',
}))
export const baseStyles = createBaseStyles()
export const appearanceStyles = createAppearanceStyles({
  fontColor: 'black',
  backgroundColor: 'white',
})
