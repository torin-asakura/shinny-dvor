import type { CSSObject }         from '@emotion/react'
import type { ThemeType }         from '@ui/theme'
import type { styleFn }           from 'styled-system'

import { createBaseStyles }       from '@atls-ui-parts/button'
import { createAppearanceStyles } from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'

export const baseStyles = createBaseStyles()

export const baseSelectStyles: CSSObject = {
  position: 'relative',
  width: '100%',
  justifyContent: 'flex-start',
}

export const appearanceStyles = createAppearanceStyles({
  fontColor: ({
    theme,
    isSelected,
    value,
  }: {
    theme: ThemeType
    isSelected: boolean
    value: string
  }) => (isSelected || value.length ? theme.colors.black : theme.colors.steel),
  backgroundColor: ({ theme }: { theme: ThemeType }) => theme.colors.white,
  borderColor: 'transparent',
})

export const shapeStyles: styleFn = ({ theme }) =>
  createShapeStyles({
    size: 26,
    paddingRatio: 0,
    fontSize: theme.fontSizes.normal,
  })
