import { styleFn } from 'styled-system'

export const baseBackdropStyles: styleFn = ({ theme }) => ({
  backgroundColor: theme.colors.black,
  opacity: 0.5,
  width: '100%',
  height: '100%',
  cursor: 'pointer',
})
