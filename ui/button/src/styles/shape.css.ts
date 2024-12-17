import { createShapeStyles } from '@atls-ui-parts/button'

import { vars }              from '@ui/theme'

const commonStyles = createShapeStyles({
  size: vars.spaces['g48'],
  rounding: vars.radii['large.huge'],
  fontFamily: vars.fonts['primary'],
  fontSize: vars.fontSizes['normal'],
  fontWeight: vars.fontWeights['semiBold'],
  paddingLeft: vars.spaces['g24'],
  paddingRight: vars.spaces['g24'],
})

export const shapeStyles = {
  common: commonStyles,
}
