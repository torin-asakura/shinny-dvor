import { styleFn } from 'styled-system'

export const baseStyles: styleFn = () => ({
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
})

export const appearanceStyles: styleFn = ({ theme, onHover }) => ({
  backgroundColor: onHover ? theme.colors.primaryBlue : theme.colors.white,
})

export const shapeStyles: styleFn = ({ theme, onHover }) => ({
  width: onHover ? '48px' : '40px',
  height: onHover ? '48px' : '40px',
  borderRadius: theme.radii.default,
  boxShadow: theme.shadows.default,
})
