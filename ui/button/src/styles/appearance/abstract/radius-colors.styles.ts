import { createAppearanceStyles } from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'
import { execAndSerialize }       from '@atls-ui-parts/styles'
import { combine }                from '@atls-ui-parts/styles'

const getRadiusColorsStyles = (): styleFn => {
  const radiusDefaultColors: styleFn = createAppearanceStyles({
    fontColor: prop('theme.colors.black'),
    borderColor: prop('theme.colors.button.radius.default'),
    backgroundColor: prop('theme.colors.button.radius.backgroundColor'),
  })

  const radiusHoverColors: styleFn = () => ({
    '&:hover': createAppearanceStyles({
      fontColor: prop('theme.colors.white'),
      borderColor: prop('theme.colors.button.radius.hover'),
      backgroundColor: prop('theme.colors.button.radius.hover'),
    }),
  })

  const radiusActiveColors: styleFn = () => ({
    '&:active': createAppearanceStyles({
      fontColor: prop('theme.colors.white'),
      borderColor: prop('theme.colors.button.radius.active'),
      backgroundColor: prop('theme.colors.button.radius.active'),
    }),
  })

  const radiusDisabledColors: styleFn = () => ({
    '&:disabled': createAppearanceStyles({
      fontColor: prop('theme.colors.button.radius.fontColor'),
      borderColor: prop('theme.colors.button.radius.disabled'),
      backgroundColor: prop('theme.colors.button.radius.disabled'),
    }),
  })

  return execAndSerialize(
    combine(radiusDefaultColors, radiusHoverColors, radiusActiveColors, radiusDisabledColors)
  )
}

export { getRadiusColorsStyles }
