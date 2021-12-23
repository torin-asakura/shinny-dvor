import { styleFn }                   from 'styled-system'
import { createBoxBaseStyles }       from '@atls-ui-parts/checkbox'
import { createBoxAppearanceStyles } from '@atls-ui-parts/checkbox'
import { createBoxShapeStyles }      from '@atls-ui-parts/checkbox'

export const baseStyles: styleFn = createBoxBaseStyles()

export const appearanceStyles: styleFn = ({ theme, checked }) =>
  createBoxAppearanceStyles({
    borderColor: checked ? theme.colors.primaryBlue : theme.colors.gray,
    backgroundColor: checked ? theme.colors.primaryBlue : theme.colors.white,
  })
  
export const shapeStyles: styleFn = ({ theme }) =>
  createBoxShapeStyles({
    size: 20,
    borderWidth: '1px',
    borderRadius: theme.radii.micro,
  })
