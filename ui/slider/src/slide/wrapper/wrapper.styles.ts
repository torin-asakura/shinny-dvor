import { styleFn } from 'styled-system'

export const baseWrapperStyles: styleFn = ({ active }) => ({
  transform: active ? 'scaleY(1)' : 'scaleY(0.9)',
  transition: '.3s',
})
