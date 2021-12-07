import { createAppearanceStyles } from '@atls-ui-parts/button'
import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'
import { execAndSerialize }       from '@atls-ui-parts/styles'
import { combine }                from '@atls-ui-parts/styles'

const getPrimaryColorsStyles = (): styleFn => {
  const primaryDefaultColors: styleFn = createAppearanceStyles({
    fontColor: prop('theme.colors.button.primary.fontColor'),
    backgroundColor: prop('theme.colors.button.primary.default'),
    borderColor: prop('theme.colors.button.primary.default'),
  })

  const primaryHoverColors: styleFn = () => ({
    '&:hover': createAppearanceStyles({
      fontColor: prop('theme.colors.button.primary.fontColor'),
      backgroundColor: prop('theme.colors.button.primary.hover'),
      borderColor: prop('theme.colors.button.primary.hover'),
    }),
  })

  const primaryActiveColors: styleFn = (theme) => ({
    '&:active': createAppearanceStyles({
      fontColor: prop('theme.colors.button.primary.fontColor'),
      backgroundColor: prop('theme.colors.button.primary.active'),
      borderColor: prop('theme.colors.button.primary.active'),
    }),
  })

  const primaryDisabledColors: styleFn = () => ({
    '&:disabled': createAppearanceStyles({
      fontColor: prop('theme.colors.button.primary.fontColor'),
      backgroundColor: prop('theme.colors.button.primary.disabled'),
      borderColor: prop('theme.colors.button.primary.disabled'),
    }),
  })

  return execAndSerialize(
    combine(primaryDefaultColors, primaryHoverColors, primaryActiveColors, primaryDisabledColors)
  )
}

export { getPrimaryColorsStyles }
