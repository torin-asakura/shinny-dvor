import { style }         from '@vanilla-extract/css'
import { styleVariants } from '@vanilla-extract/css'

export const baseLink = style({
  textDecoration: 'none',
  cursor: 'pointer',
  transition: '0.35s',
})

export const linkVariants = styleVariants({
  fill: {
    width: '100%',
    height: '100%',
  },
  active: {
    color: 'darkBlue',
    borderBottom: 'blue',
    paddingBottom: '8px',
  },
  default: {
    color: 'black',
    ':hover': {
      color: 'blue',
      backgroundColor: 'transparent',
      borderRadius: 4,
    },
  },
})
