import { styleFn } from 'styled-system'

export const baseOuterCircleStyles: styleFn = ({ theme, hover }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
  transform: `scale(${hover ? '1.2' : '1'})`,
  backgroundColor: hover ? theme.colors.primaryBlue : theme.colors.white,
  borderRadius: theme.radii.default,
  transition: '.5s',
  boxShadow: theme.shadows.default,
})
