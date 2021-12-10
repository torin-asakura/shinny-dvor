import { createAppearanceStyles } from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'
import { execAndSerialize }       from '@atls-ui-parts/styles'
import { combine }                from '@atls-ui-parts/styles'

const getSecondaryColorsStyles = (): styleFn => {
  const secondaryDefaultColors: styleFn = createAppearanceStyles({
    fontColor: prop('theme.colors.button.secondary.fontColor'),
    borderColor: prop('theme.colors.button.secondary.default'),
    backgroundColor: prop('theme.colors.button.secondary.backgroundColor'),
  })

  const secondaryHoverColors: styleFn = () => ({
    '&:hover': createAppearanceStyles({
      fontColor: prop('theme.colors.button.secondary.hover'),
      borderColor: prop('theme.colors.button.secondary.hover'),
      backgroundColor: prop('theme.colors.button.secondary.backgroundColor'),
    }),
  })

  const secondaryActiveColors: styleFn = () => ({
    '&:active': createAppearanceStyles({
      fontColor: prop('theme.colors.button.secondary.active'),
      borderColor: prop('theme.colors.button.secondary.active'),
      backgroundColor: prop('theme.colors.button.secondary.backgroundColor'),
    }),
  })

  const secondaryDisabledColors: styleFn = () => ({
    '&:disabled': createAppearanceStyles({
      fontColor: prop('theme.colors.button.secondary.disabled'),
      borderColor: prop('theme.colors.button.secondary.disabled'),
      backgroundColor: prop('theme.colors.button.secondary.backgroundColor'),
    }),
  })

  return execAndSerialize(
    combine(
      secondaryDefaultColors,
      secondaryHoverColors,
      secondaryActiveColors,
      secondaryDisabledColors
    )
  )
}

export { getSecondaryColorsStyles }
