import { styleFn } from 'styled-system'

export const baseInnerCircleStyles: styleFn = ({ theme, hover }) => ({
  width: 16,
  height: 16,
  backgroundColor: hover ? theme.colors.white : theme.colors.primaryBlue,
  borderRadius: theme.radii.default,
  transition: '.5s',
})
