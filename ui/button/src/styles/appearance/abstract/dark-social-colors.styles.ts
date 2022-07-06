import { createAppearanceStyles } from '@atls-ui-parts/button'
import { execAndSerialize }       from '@atls-ui-parts/styles'
import { combine }                from '@atls-ui-parts/styles'

import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'

const getDarkSocialColorsStyles = (): styleFn => {
  const darkSocialDefaultColors: styleFn = createAppearanceStyles({
    fontColor: prop('theme.colors.button.darkSocial.fontColor'),
    backgroundColor: prop('theme.colors.button.darkSocial.default'),
    borderColor: prop('theme.colors.button.darkSocial.default'),
  })

  const darkSocialHoverColors: styleFn = () => ({
    '&:hover': createAppearanceStyles({
      fontColor: prop('theme.colors.button.darkSocial.fontColor'),
      backgroundColor: prop('theme.colors.button.darkSocial.hover'),
      borderColor: prop('theme.colors.button.darkSocial.hover'),
    }),
  })

  const darkSocialActiveColors: styleFn = () => ({
    '&:active': createAppearanceStyles({
      fontColor: prop('theme.colors.button.darkSocial.fontColor'),
      backgroundColor: prop('theme.colors.button.darkSocial.active'),
      borderColor: prop('theme.colors.button.darkSocial.active'),
    }),
  })

  const darkSocialDisabledColors: styleFn = () => ({
    '&:disabled': createAppearanceStyles({
      fontColor: prop('theme.colors.button.darkSocial.fontColor'),
      backgroundColor: prop('theme.colors.button.darkSocial.disabled'),
      borderColor: prop('theme.colors.button.darkSocial.disabled'),
    }),
  })

  return execAndSerialize(
    combine(
      darkSocialDefaultColors,
      darkSocialHoverColors,
      darkSocialActiveColors,
      darkSocialDisabledColors
    )
  )
}

export { getDarkSocialColorsStyles }
