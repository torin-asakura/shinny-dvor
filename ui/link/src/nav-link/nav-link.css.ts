import { style }         from '@vanilla-extract/css'
import { styleVariants } from '@vanilla-extract/css'

export const baseNavLink = style({
  paddingLeft: 0,
  paddingRight: 0,
})

export const navLink = styleVariants({
  active: {
    color: 'blue',
    ':hover': {
      color: 'blue',
      backgroundColor: 'transparent',
      borderRadius: 4,
      transition: '0.35s',
    },
    '& svg > path:only-of-type': {
      fill: 'blue',
    },
  },
  default: {
    color: 'black',
    ':hover': {
      color: 'blue',
      backgroundColor: 'transparent',
      borderRadius: 4,
      transition: '0.35s',
    },
  },
})
