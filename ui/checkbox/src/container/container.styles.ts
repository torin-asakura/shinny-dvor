import { styleFn }                   from 'styled-system'
import { createContainerBaseStyles } from '@atls-ui-parts/checkbox'

export const baseStyles: styleFn = createContainerBaseStyles()

/* export const appearanceStyles: styleFn = () => ({

  backgroundColor: 'transparent',
}) */

export const shapeStyles: styleFn = ({ theme }) => ({
  width: '100%',
  height: '50px',
  alignItems: 'center',
})
