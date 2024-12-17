import { createShapeStyles } from '@atls-ui-parts/button'

import { vars }              from '@ui/theme'

const hugeStyles = createShapeStyles({
  size: 56,
  rounding: vars.radii['large.semiSmall'],
})

const largeStyles = createShapeStyles({
  size: 48,
  rounding: vars.radii['large.semiSmall'],
})

const semiMediumStyles = createShapeStyles({
  size: 43,
  rounding: vars.radii['large.semiSmall'],
})

const mediumStyles = createShapeStyles({
  size: 40,
  rounding: vars.radii['large.semiSmall'],
})

const normalStyles = createShapeStyles({
  size: 36,
  rounding: vars.radii['large.semiSmall'],
  paddingLeft: vars.spaces.g24,
  paddingRight: vars.spaces.g24,
})

const smallStyles = createShapeStyles({
  size: 32,
  rounding: vars.radii['large.semiSmall'],
})

const smallSizeMediumRadiiStyles = createShapeStyles({
  size: 32,
  rounding: vars.radii['medium.semiIncreased'],
})

const autoSizeStyles = createShapeStyles({
  size: 'auto',
})

const autoSizeRoundStyles = createShapeStyles({
  size: 'auto',
  rounding: vars.radii['large.default'],
  paddingLeft: vars.spaces.g10,
  paddingRight: vars.spaces.g10,
})

export const shapeStyles = {
  huge: hugeStyles,
  large: largeStyles,
  medium: mediumStyles,
  small: smallStyles,
  smallSizeMediumRadii: smallSizeMediumRadiiStyles,
  autoSize: autoSizeStyles,
  normal: normalStyles,
  semiMedium: semiMediumStyles,
  autoSizeRound: autoSizeRoundStyles,
}
