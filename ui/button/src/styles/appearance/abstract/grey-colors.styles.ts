import { createAppearanceStyles } from '@atls-ui-parts/button'
import { execAndSerialize }       from '@atls-ui-parts/styles'
import { combine }                from '@atls-ui-parts/styles'

import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'

const getGreyColorsStyles = (): styleFn => {
  const greyDefaultColors: styleFn = createAppearanceStyles({
    fontColor: prop('theme.colors.button.grey.fontColor'),
    backgroundColor: prop('theme.colors.button.grey.backgroundColor'),
    borderColor: prop('theme.colors.button.grey.default'),
  })

  const greyHoverColors: styleFn = () => ({
    '&:hover': createAppearanceStyles({
      fontColor: prop('theme.colors.button.grey.hover'),
      backgroundColor: prop('theme.colors.button.grey.backgroundColor'),
      borderColor: prop('theme.colors.button.grey.default'),
    }),
  })

  const greyActiveColors: styleFn = () => ({
    '&:active': createAppearanceStyles({
      fontColor: prop('theme.colors.button.grey.fontColor'),
      backgroundColor: prop('theme.colors.button.grey.backgroundColor'),
      borderColor: prop('theme.colors.button.grey.default'),
    }),
  })

  return execAndSerialize(combine(greyDefaultColors, greyHoverColors, greyActiveColors))
}

export { getGreyColorsStyles }
