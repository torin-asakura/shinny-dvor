import { styleFn } from 'styled-system'

export const transitionStyles: styleFn = () => ({
  transition: '.3s',
})

export const shapeLinkStyles: styleFn = ({ theme }) => ({
  fontSize: theme.fontSizes.semiRegular,
  fontFamily: theme.fonts.primary,
})

export const activeLinkStyles: styleFn = ({ active, theme }) =>
  active && {
    color: theme.colors.darkBlue,
    borderBottom: theme.borders.blue,
    paddingBottom: '8px',
  }
