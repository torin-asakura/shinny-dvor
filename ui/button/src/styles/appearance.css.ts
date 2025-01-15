/* eslint-disable dot-notation */

import { createAppearanceStyles } from '@atls-ui-parts/button'

import { vars }                   from '@ui/theme'

const appearanceTransparentStyles = createAppearanceStyles({
  fontColor: vars.colors['button.primary.default.font'],
  backgroundColor: vars.colors['transparent'],
  borderColor: vars.colors['button.primary.default.border'],
})

const appearancePrimaryDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['button.primary.default.font'],
  backgroundColor: vars.colors['button.primary.default.background'],
  borderColor: vars.colors['button.primary.default.border'],
})

const appearancePrimaryHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['button.primary.hover.font'],
  backgroundColor: vars.colors['button.primary.hover.background'],
  borderColor: vars.colors['button.primary.hover.border'],
})

const appearancePrimaryPressedStyles = createAppearanceStyles({
  fontColor: vars.colors['button.primary.press.font'],
  backgroundColor: vars.colors['button.primary.press.background'],
  borderColor: vars.colors['button.primary.press.border'],
})

const appearancePrimaryDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['button.primary.disabled.font'],
  backgroundColor: vars.colors['button.primary.disabled.background'],
  borderColor: vars.colors['button.primary.disabled.border'],
})

const appearanceSecondaryDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['button.secondary.default.font'],
  backgroundColor: vars.colors['button.secondary.default.background'],
  borderColor: `${vars.colors['button.secondary.default.border']} !important`,
})

const appearanceSecondaryHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['button.secondary.hover.font'],
  backgroundColor: vars.colors['button.secondary.hover.background'],
  borderColor: `${vars.colors['button.secondary.hover.border']} !important`,
})

const appearanceSecondaryPressedStyles = createAppearanceStyles({
  fontColor: vars.colors['button.secondary.press.font'],
  backgroundColor: vars.colors['button.secondary.press.background'],
  borderColor: vars.colors['button.secondary.press.border'],
})

const appearanceSecondaryDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['button.secondary.disabled.font'],
  backgroundColor: vars.colors['button.secondary.disabled.background'],
  borderColor: vars.colors['button.secondary.disabled.border'],
})

const appearanceTertiaryDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['button.tertiary.default.font'],
  backgroundColor: vars.colors['button.tertiary.default.background'],
  borderColor: vars.colors['button.tertiary.default.border'],
})

const appearanceTertiaryHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['button.tertiary.hover.font'],
  backgroundColor: vars.colors['button.tertiary.hover.background'],
  borderColor: vars.colors['button.tertiary.hover.border'],
})

const appearanceTertiaryPressedStyles = createAppearanceStyles({
  fontColor: vars.colors['button.tertiary.press.font'],
  backgroundColor: vars.colors['button.tertiary.press.background'],
  borderColor: vars.colors['button.tertiary.press.border'],
})

const appearanceTertiaryDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['button.tertiary.disabled.font'],
  backgroundColor: vars.colors['button.tertiary.disabled.background'],
  borderColor: vars.colors['button.tertiary.disabled.border'],
})

const appearanceInverseDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['button.inverse.default.font'],
  backgroundColor: vars.colors['button.inverse.default.background'],
  borderColor: vars.colors['button.inverse.default.border'],
})

const appearanceInverseHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['button.inverse.hover.font'],
  backgroundColor: vars.colors['button.inverse.hover.background'],
  borderColor: vars.colors['button.inverse.hover.border'],
})

const appearanceInversePressedStyles = createAppearanceStyles({
  fontColor: vars.colors['button.inverse.press.font'],
  backgroundColor: vars.colors['button.inverse.press.background'],
  borderColor: vars.colors['button.inverse.press.border'],
})

const appearanceInverseDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['button.inverse.disabled.font'],
  backgroundColor: vars.colors['button.inverse.disabled.background'],
  borderColor: vars.colors['button.inverse.disabled.border'],
})

const appearanceLinkDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['button.link.default.font'],
  backgroundColor: vars.colors['button.link.default.background'],
  borderColor: vars.colors['button.link.default.border'],
})

const appearanceLinkHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['button.link.hover.font'],
  backgroundColor: vars.colors['button.link.hover.background'],
  borderColor: vars.colors['button.link.hover.border'],
})

const appearanceLinkPressedStyles = createAppearanceStyles({
  fontColor: vars.colors['button.link.press.font'],
  backgroundColor: vars.colors['button.link.press.background'],
  borderColor: vars.colors['button.link.press.border'],
})

const appearanceSizeDefaultStyles = createAppearanceStyles({
  fontColor: vars.colors['button.size.default.font'],
  backgroundColor: vars.colors['button.size.default.background'],
  borderColor: vars.colors['button.size.default.border'],
})

const appearanceSizeHoverStyles = createAppearanceStyles({
  fontColor: vars.colors['button.size.hover.font'],
  backgroundColor: vars.colors['button.size.hover.background'],
  borderColor: vars.colors['button.size.hover.border'],
})

const appearanceSizePressedStyles = createAppearanceStyles({
  fontColor: vars.colors['button.size.press.font'],
  backgroundColor: vars.colors['button.size.press.background'],
  borderColor: vars.colors['button.size.press.border'],
})

const appearanceSizeDisabledStyles = createAppearanceStyles({
  fontColor: vars.colors['button.size.disabled.font'],
  backgroundColor: vars.colors['button.size.disabled.background'],
  borderColor: vars.colors['button.size.disabled.border'],
})

export const appearanceVariant = {
  transparent: appearanceTransparentStyles,
  primary: appearancePrimaryDefaultStyles,
  secondary: appearanceSecondaryDefaultStyles,
  tertiary: appearanceTertiaryDefaultStyles,
  inverse: appearanceInverseDefaultStyles,
  link: appearanceLinkDefaultStyles,
  size: appearanceSizeDefaultStyles,
}

export const appearanceHover = {
  transparentHover: appearanceTransparentStyles,
  primaryHover: appearancePrimaryHoverStyles,
  secondaryHover: appearanceSecondaryHoverStyles,
  tertiaryHover: appearanceTertiaryHoverStyles,
  inverseHover: appearanceInverseHoverStyles,
  linkHover: appearanceLinkHoverStyles,
  sizeHover: appearanceSizeHoverStyles,
}

export const appearancePressed = {
  transparentPressed: appearanceTransparentStyles,
  primaryPressed: appearancePrimaryPressedStyles,
  secondaryPressed: appearanceSecondaryPressedStyles,
  tertiaryPressed: appearanceTertiaryPressedStyles,
  inversePressed: appearanceInversePressedStyles,
  linkPressed: appearanceLinkPressedStyles,
  sizePressed: appearanceSizePressedStyles,
}

export const appearanceDisabled = {
  transparentDisabled: appearanceTransparentStyles,
  primaryDisabled: appearancePrimaryDisabledStyles,
  secondaryDisabled: appearanceSecondaryDisabledStyles,
  tertiaryDisabled: appearanceTertiaryDisabledStyles,
  inverseDisabled: appearanceInverseDisabledStyles,
  sizeDisabled: appearanceSizeDisabledStyles,
  linkDisabled: appearanceLinkPressedStyles,
}
