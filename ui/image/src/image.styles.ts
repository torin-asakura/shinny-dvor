import { styleFn } from 'styled-system'

export const baseStyles: styleFn = ({ radius }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  borderRadius: radius !== undefined ? radius : 0,
  objectFit: 'cover',
})
