import { styleFn } from 'styled-system'

export const appearanceStyles: styleFn = ({ theme, onHover }) => ({
  backgroundColor: onHover ? theme.colors.white : theme.colors.primaryBlue,
})

export const shapeStyles: styleFn = ({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: theme.radii.default,
})
