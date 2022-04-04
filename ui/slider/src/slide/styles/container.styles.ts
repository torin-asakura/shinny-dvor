import { styleFn } from 'styled-system'

export const baseContainerStyles: styleFn = ({ theme }) => ({
  borderRadius: theme.radii.little,
  border: '1px solid black'
})
