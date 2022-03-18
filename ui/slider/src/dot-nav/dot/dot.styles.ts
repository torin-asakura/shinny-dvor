import { styleFn } from 'styled-system'

export const baseDotStyles: styleFn = ({ theme, active }) => ({
  width: active ? 22 : 10,
  height: 10,
  backgroundColor: active ? theme.colors.blue : theme.colors.lightGray,
  borderRadius: theme.radii.mini,
  flexShrink: 0,
  transition: '.2s',
})
