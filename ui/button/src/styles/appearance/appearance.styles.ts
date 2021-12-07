import { styleFn }                    from 'styled-system'
import { switchProp }                 from 'styled-tools'
import { prop }                       from 'styled-tools'

import { getPrimaryColorsStyles }     from './abstract'
import { getTransparentColorsStyles } from './abstract'

const getAppearanceStyles = (): styleFn => {
  const primaryColorsStyles = getPrimaryColorsStyles()
  const transparentColorsStyles = getTransparentColorsStyles()

  return switchProp(prop('colors', 'primary'), {
    primary: primaryColorsStyles,
    transparent: transparentColorsStyles,
  })
}

export { getAppearanceStyles }
