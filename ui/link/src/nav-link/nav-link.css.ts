import { style }         from '@vanilla-extract/css'
import { styleVariants } from '@vanilla-extract/css'

import { vars }          from '@ui/theme'

export const baseNavLink = style({
  paddingLeft: 0,
  paddingRight: 0,
})

export const navLink = styleVariants({
  active: {
    color: vars.colors.white,
    ':hover': {
      color: vars.colors.white,
      borderBottom: `2px solid ${vars.colors.white}`,
      backgroundColor: vars.colors.transparent,
      transition: '0.35s',
    },
    '& svg > path:only-of-type': {
      fill: vars.colors.blue,
    },
  },
  default: {
    color: vars.colors.black,
    ':hover': {
      color: vars.colors.blue,
      borderBottom: `2px solid ${vars.colors.blue}`,
      backgroundColor: vars.colors.transparent,
      transition: '0.35s',
      paddingBottom: '8px',
    },
  },
})
