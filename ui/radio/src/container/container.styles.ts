import type { styleFn }              from 'styled-system'

import { createContainerBaseStyles } from '@atls-ui-parts/checkbox'

export const baseStyles: styleFn = createContainerBaseStyles()

export const appearanceStyles: styleFn = ({ theme, checked }) => ({
  color: theme.colors.black,
  backgroundColor: checked ? theme.colors.primaryBlue : theme.colors.lightGray,
})

export const shapeStyles: styleFn = ({ theme }) => ({
  width: '100%',
  height: '40px',
  justifyContent: 'center',
  borderRadius: theme.radii.small,
})
