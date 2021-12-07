import { createAppearanceStyles } from '@atls-ui-parts/button'
import { prop }                   from 'styled-tools'
import { styleFn }                from 'styled-system'

const getTransparentColorsStyles = (): styleFn => {
  const transparentDefaultColors: styleFn = createAppearanceStyles({
    fontColor: prop('theme.colors.button.primary.fontColor'),
    backgroundColor: 'transparent',
  })

  return transparentDefaultColors
}

export { getTransparentColorsStyles }
