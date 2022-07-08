import { styleFn }                    from 'styled-system'
import { switchProp }                 from 'styled-tools'
import { prop }                       from 'styled-tools'

import { getGreyColorsStyles }        from './abstract'
import { getPrimaryColorsStyles }     from './abstract'
import { getSecondaryColorsStyles }   from './abstract'
import { getTransparentColorsStyles } from './abstract'
import { getRadiusColorsStyles }      from './abstract'
import { getDarkSocialColorsStyles }  from './abstract'
import { getDarkWheelColorsStyles }   from './abstract'
import { getLightWheelColorsStyles }  from './abstract'

const getAppearanceStyles = (): styleFn => {
  const primaryColorsStyles = getPrimaryColorsStyles()
  const secondaryColorsStyles = getSecondaryColorsStyles()
  const transparentColorsStyles = getTransparentColorsStyles()
  const radiusColorsStyles = getRadiusColorsStyles()
  const darkSocialColorsStyles = getDarkSocialColorsStyles()
  const darkWheelColorsStyles = getDarkWheelColorsStyles()
  const lightWheelColorsStyles = getLightWheelColorsStyles()
  const greyColorsStyles = getGreyColorsStyles()

  return switchProp(prop('color', 'primary'), {
    primary: primaryColorsStyles,
    secondary: secondaryColorsStyles,
    transparent: transparentColorsStyles,
    radius: radiusColorsStyles,
    darkSocial: darkSocialColorsStyles,
    darkWheel: darkWheelColorsStyles,
    lightWheel: lightWheelColorsStyles,
    grey: greyColorsStyles,
  })
}

export { getAppearanceStyles }
