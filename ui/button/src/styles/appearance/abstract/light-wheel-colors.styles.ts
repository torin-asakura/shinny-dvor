import { createAppearanceStyles } from '@atls-ui-parts/button'
import { execAndSerialize }       from '@atls-ui-parts/styles'
import { combine }                from '@atls-ui-parts/styles'

import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'

const getLightWheelColorsStyles = (): styleFn => {
  const lightWheelDefaultColors: styleFn = createAppearanceStyles({
    fontColor: prop('theme.colors.black'),
    backgroundColor: prop('theme.colors.button.lightWheel.default'),
    borderColor: prop('theme.colors.button.lightWheel.default'),
  })

  const lightWheelHoverColors: styleFn = () => ({
    '&:hover': createAppearanceStyles({
      fontColor: prop('theme.colors.button.lightWheel.hover'),
      backgroundColor: prop('theme.colors.button.lightWheel.default'),
      borderColor: prop('theme.colors.button.lightWheel.default'),
    }),
  })

  const lightWheelActiveColors: styleFn = () => ({
    '&:active': createAppearanceStyles({
      fontColor: prop('theme.colors.button.lightWheel.active'),
      backgroundColor: prop('theme.colors.white'),
      borderColor: prop('theme.colors.white'),
    }),
  })

  const lightWheelDisabledColors: styleFn = () => ({
    '&:disabled': createAppearanceStyles({
      fontColor: prop('theme.colors.button.lightWheel.fontColor'),
      backgroundColor: prop('theme.colors.button.lightWheel.default'),
      borderColor: prop('theme.colors.button.lightWheel.default'),
    }),
  })

  return execAndSerialize(
    combine(
      lightWheelDefaultColors,
      lightWheelHoverColors,
      lightWheelActiveColors,
      lightWheelDisabledColors
    )
  )
}

export { getLightWheelColorsStyles }
