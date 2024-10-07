/* eslint-disable */

import type { styleFn } from 'styled-system'

export const appearanceNavLinkStyles: styleFn = ({ theme, keep }) =>
  !keep && {
    color: theme.colors.black,
    paddingLeft: 0,
    paddingRight: 0,
    '&:hover': {
      color: theme.colors.blue,
      backgroundColor: 'transparent',
      borderRadius: theme.radii.intermediate,
      transition: '0.35s',
    },
  }

export const activeNavLinkStyles: styleFn = ({ active, theme }) =>
  active && {
    color: theme.colors.blue,
    '&:hover': {
      color: theme.colors.blue,
      backgroundColor: 'transparent',
      borderRadius: theme.radii.intermediate,
      transition: '0.35s',
    },

    '& svg > path:only-of-type': {
      fill: theme.colors.blue,
    },
  }

export const defaultNavLinkStyles: styleFn = ({ active, theme }) =>
  !active && {
    color: theme.colors.black,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.colors.blue,
      borderRadius: theme.radii.intermediate,
      transition: '0.35s',
    },
  }
