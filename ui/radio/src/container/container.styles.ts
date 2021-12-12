import { styleFn } from 'styled-system'

export const baseStyles: styleFn = () => ({
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  '& > input': {
    position: 'absolute',
    opacity: 0,
  },
})

export const appearanceStyles: styleFn = ({ theme, checked }) => ({
  color: theme.colors.black,
  backgroundColor: checked ? theme.colors.primaryBlue : theme.colors.lightGray,
  '&:hover': {
    color: theme.colors.primaryBlue,
  },
  '& > input:checked ~ span': {
    color: theme.colors.white,
  },
})

export const shapeStyles: styleFn = ({ theme }) => ({
  width: '100%',
  height: '40px',
  borderRadius: theme.radii.normal,
})
