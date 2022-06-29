import { CSSObject }              from '@emotion/css'
import { createBaseStyles }       from '@atls-ui-parts/button'
import { createAppearanceStyles } from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

export const baseStyles = createBaseStyles()

export const baseSelectStyles: CSSObject = {
  position: 'relative',
  width: '100%',
  justifyContent: 'flex-start',
}

export const appearanceStyles = createAppearanceStyles({
  fontColor: ({ theme, isSelected }) => (isSelected ? theme.colors.black : theme.colors.lightGray),
  backgroundColor: ({ theme }) => theme.colors.white,
  borderColor: 'transparent',
})

export const shapeStyles = ({ theme }): styleFn =>
  createShapeStyles({
    size: 26,
    paddingRatio: 0,
    fontSize: theme.fontSizes.normal,
  })
