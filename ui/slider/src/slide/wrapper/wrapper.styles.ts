import { styleFn } from 'styled-system'

export const baseWrapperStyles: styleFn = ({ active, isMobile }) => ({
  transform: active || isMobile ? 'scaleY(1)' : 'scaleY(0.9)',
  transition: '.3s',
})
