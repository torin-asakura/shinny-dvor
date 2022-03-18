import { createAppearanceStyles } from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'

const getTransparentColorsStyles = (): styleFn => {
  const transparentDefaultColors: styleFn = createAppearanceStyles({
    fontColor: prop('theme.colors.button.primary.fontColor'),
    backgroundColor: 'transparent',
  })

  return transparentDefaultColors
}

export { getTransparentColorsStyles }
