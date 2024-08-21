import { createAppearanceStyles } from '@atls-ui-parts/button'
import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearancePrimaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.default.font'),
  backgroundColor: prop('theme.colors.button.primary.default.background'),
  borderColor: prop('theme.colors.button.primary.default.border'),
})

const appearancePrimaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.hover.font'),
  backgroundColor: prop('theme.colors.button.primary.hover.background'),
  borderColor: prop('theme.colors.button.primary.hover.border'),
})

const appearancePrimaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.pressed.font'),
  backgroundColor: prop('theme.colors.button.primary.pressed.background'),
  borderColor: prop('theme.colors.button.primary.pressed.border'),
})

const appearancePrimaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.disabled.font'),
  backgroundColor: prop('theme.colors.button.primary.disabled.background'),
  borderColor: prop('theme.colors.button.primary.disabled.border'),
})

const appearanceSecondaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.default.font'),
  backgroundColor: prop('theme.colors.button.secondary.default.background'),
  borderColor: prop('theme.colors.button.secondary.default.border'),
})

const appearanceSecondaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.hover.font'),
  backgroundColor: prop('theme.colors.button.secondary.hover.background'),
  borderColor: prop('theme.colors.button.secondary.hover.border'),
})

const appearanceSecondaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.pressed.font'),
  backgroundColor: prop('theme.colors.button.secondary.pressed.background'),
  borderColor: prop('theme.colors.button.secondary.pressed.border'),
})

const appearanceSecondaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.secondary.disabled.font'),
  backgroundColor: prop('theme.colors.button.secondary.disabled.background'),
  borderColor: prop('theme.colors.button.secondary.disabled.border'),
})

const appearanceRadiusDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.radius.default.font'),
  backgroundColor: prop('theme.colors.button.radius.default.background'),
  borderColor: prop('theme.colors.button.radius.default.border'),
})

const appearanceRadiusHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.radius.hover.font'),
  backgroundColor: prop('theme.colors.button.radius.hover.background'),
  borderColor: prop('theme.colors.button.radius.hover.border'),
})

const appearanceRadiusPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.radius.pressed.font'),
  backgroundColor: prop('theme.colors.button.radius.pressed.background'),
  borderColor: prop('theme.colors.button.radius.pressed.border'),
})

const appearanceRadiusDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.radius.disabled.font'),
  backgroundColor: prop('theme.colors.button.radius.disabled.background'),
  borderColor: prop('theme.colors.button.radius.disabled.border'),
})

const appearanceDarkSocialDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkSocial.default.font'),
  backgroundColor: prop('theme.colors.button.darkSocial.default.background'),
  borderColor: prop('theme.colors.button.darkSocial.default.border'),
})

const appearanceDarkSocialHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkSocial.hover.font'),
  backgroundColor: prop('theme.colors.button.darkSocial.hover.background'),
  borderColor: prop('theme.colors.button.darkSocial.hover.border'),
})

const appearanceDarkSocialPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkSocial.pressed.font'),
  backgroundColor: prop('theme.colors.button.darkSocial.pressed.background'),
  borderColor: prop('theme.colors.button.darkSocial.pressed.border'),
})

const appearanceDarkSocialDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkSocial.disabled.font'),
  backgroundColor: prop('theme.colors.button.darkSocial.disabled.background'),
  borderColor: prop('theme.colors.button.darkSocial.disabled.border'),
})

const appearanceLightWheelDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.lightWheel.default.font'),
  backgroundColor: prop('theme.colors.button.lightWheel.default.background'),
  borderColor: prop('theme.colors.button.lightWheel.default.border'),
})

const appearanceLightWheelHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.lightWheel.hover.font'),
  backgroundColor: prop('theme.colors.button.lightWheel.hover.background'),
  borderColor: prop('theme.colors.button.lightWheel.hover.border'),
})

const appearanceLightWheelPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.lightWheel.pressed.font'),
  backgroundColor: prop('theme.colors.button.lightWheel.pressed.background'),
  borderColor: prop('theme.colors.button.lightWheel.pressed.border'),
})

const appearanceLightWheelDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.lightWheel.disabled.font'),
  backgroundColor: prop('theme.colors.button.lightWheel.disabled.background'),
  borderColor: prop('theme.colors.button.lightWheel.disabled.border'),
})

const appearanceDarkWheelDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkWheel.default.font'),
  backgroundColor: prop('theme.colors.button.darkWheel.default.background'),
  borderColor: prop('theme.colors.button.darkWheel.default.border'),
})

const appearanceDarkWheelHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkWheel.hover.font'),
  backgroundColor: prop('theme.colors.button.darkWheel.hover.background'),
  borderColor: prop('theme.colors.button.darkWheel.hover.border'),
})

const appearanceDarkWheelPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkWheel.pressed.font'),
  backgroundColor: prop('theme.colors.button.darkWheel.pressed.background'),
  borderColor: prop('theme.colors.button.darkWheel.pressed.border'),
})

const appearanceDarkWheelDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkWheel.disabled.font'),
  backgroundColor: prop('theme.colors.button.darkWheel.disabled.background'),
  borderColor: prop('theme.colors.button.darkWheel.disabled.border'),
})

const appearanceGreyDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.grey.default.font'),
  backgroundColor: prop('theme.colors.button.grey.default.background'),
  borderColor: prop('theme.colors.button.grey.default.border'),
})

const appearanceGreyHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.grey.hover.font'),
  backgroundColor: prop('theme.colors.button.grey.hover.background'),
  borderColor: prop('theme.colors.button.grey.hover.border'),
})

const appearanceGreyPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.grey.pressed.font'),
  backgroundColor: prop('theme.colors.button.grey.pressed.background'),
  borderColor: prop('theme.colors.button.grey.pressed.border'),
})

const appearanceGreyDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.grey.disabled.font'),
  backgroundColor: prop('theme.colors.button.grey.disabled.background'),
  borderColor: prop('theme.colors.button.grey.disabled.border'),
})

const appearanceBlueTextDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.blueText.default.font'),
  backgroundColor: prop('theme.colors.button.blueText.default.background'),
  borderColor: prop('theme.colors.button.blueText.default.border'),
})

const appearanceBlueTextHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.blueText.hover.font'),
  backgroundColor: prop('theme.colors.button.blueText.hover.background'),
  borderColor: prop('theme.colors.button.blueText.hover.border'),
})

const appearanceBlueTextPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.blueText.pressed.font'),
  backgroundColor: prop('theme.colors.button.blueText.pressed.background'),
  borderColor: prop('theme.colors.button.blueText.pressed.border'),
})

const appearanceBlueTextDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.blueText.disabled.font'),
  backgroundColor: prop('theme.colors.button.blueText.disabled.background'),
  borderColor: prop('theme.colors.button.blueText.disabled.border'),
})

const appearanceTransparentDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparent.default.font'),
  backgroundColor: prop('theme.colors.button.transparent.default.background'),
  borderColor: prop('theme.colors.button.transparent.default.border'),
})

const appearanceTransparentHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparent.hover.font'),
  backgroundColor: prop('theme.colors.button.transparent.hover.background'),
  borderColor: prop('theme.colors.button.transparent.hover.border'),
})

const appearanceTransparentPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparent.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparent.pressed.background'),
  borderColor: prop('theme.colors.button.transparent.pressed.border'),
})

const appearanceTransparentDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparent.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparent.disabled.background'),
  borderColor: prop('theme.colors.button.transparent.disabled.border'),
})

const appearanceStyles = switchProp(prop('color', 'primary'), {
  primary: ifProp(
    prop('disabled', false),
    appearancePrimaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearancePrimaryPressedStyles,
      ifProp(prop('hover', false), appearancePrimaryHoverStyles, appearancePrimaryDefaultStyles)
    )
  ),
  secondary: ifProp(
    prop('disabled', false),
    appearanceSecondaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceSecondaryPressedStyles,
      ifProp(prop('hover', false), appearanceSecondaryHoverStyles, appearanceSecondaryDefaultStyles)
    )
  ),
  radius: ifProp(
    prop('disabled', false),
    appearanceRadiusDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceRadiusPressedStyles,
      ifProp(prop('hover', false), appearanceRadiusHoverStyles, appearanceRadiusDefaultStyles)
    )
  ),
  darkSocial: ifProp(
    prop('disabled', false),
    appearanceDarkSocialDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceDarkSocialPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceDarkSocialHoverStyles,
        appearanceDarkSocialDefaultStyles
      )
    )
  ),
  lightWheel: ifProp(
    prop('disabled', false),
    appearanceLightWheelDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceLightWheelPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceLightWheelHoverStyles,
        appearanceLightWheelDefaultStyles
      )
    )
  ),
  darkWheel: ifProp(
    prop('disabled', false),
    appearanceDarkWheelDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceDarkWheelPressedStyles,
      ifProp(prop('hover', false), appearanceDarkWheelHoverStyles, appearanceDarkWheelDefaultStyles)
    )
  ),
  grey: ifProp(
    prop('disabled', false),
    appearanceGreyDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceGreyPressedStyles,
      ifProp(prop('hover', false), appearanceGreyHoverStyles, appearanceGreyDefaultStyles)
    )
  ),
  blueText: ifProp(
    prop('disabled', false),
    appearanceBlueTextDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceBlueTextPressedStyles,
      ifProp(prop('hover', false), appearanceBlueTextHoverStyles, appearanceBlueTextDefaultStyles)
    )
  ),
  transparent: ifProp(
    prop('disabled', false),
    appearanceTransparentDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentHoverStyles,
        appearanceTransparentDefaultStyles
      )
    )
  ),
})

export { appearanceStyles }
