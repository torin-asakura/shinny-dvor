import { createAppearanceStyles } from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'
import { execAndSerialize }       from '@atls-ui-parts/styles'
import { combine }                from '@atls-ui-parts/styles'

const getDarkWheelColorsStyles = (): styleFn => {
  const darkWheelDefaultColors: styleFn = createAppearanceStyles({
    fontColor: prop('theme.colors.button.darkWheel.fontColor'),
    backgroundColor: prop('theme.colors.button.darkWheel.default'),
    borderColor: prop('theme.colors.button.darkWheel.default'),
  })

  const darkWheelHoverColors: styleFn = () => ({
    '&:hover': createAppearanceStyles({
      fontColor: prop('theme.colors.button.darkWheel.fontColor'),
      backgroundColor: prop('theme.colors.button.darkWheel.hover'),
      borderColor: prop('theme.colors.button.darkWheel.hover'),
    }),
  })

  const darkWheelActiveColors: styleFn = () => ({
    '&:active': createAppearanceStyles({
      fontColor: prop('theme.colors.black'),
      backgroundColor: prop('theme.colors.button.darkWheel.active'),
      borderColor: prop('theme.colors.button.darkWheel.active'),
    }),
  })

  const darkWheelDisabledColors: styleFn = () => ({
    '&:disabled': createAppearanceStyles({
      fontColor: prop('theme.colors.button.darkWheel.fontColor'),
      backgroundColor: prop('theme.colors.button.darkWheel.disabled'),
      borderColor: prop('theme.colors.button.darkWheel.disabled'),
    }),
  })

  return execAndSerialize(
    combine(
      darkWheelDefaultColors,
      darkWheelHoverColors,
      darkWheelActiveColors,
      darkWheelDisabledColors
    )
  )
}

export { getDarkWheelColorsStyles }
