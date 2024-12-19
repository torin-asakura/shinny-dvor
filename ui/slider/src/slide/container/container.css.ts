import { style }                       from '@vanilla-extract/css'

import { BREAKPOINT_CONDITIONS }       from '@ui/theme'

import { vars } from '@ui/theme'

export const baseContainerStyles = style({
  borderRadius: vars.radii.little,
  maskImage: vars.colors.mask,
  overflow: 'hidden',
})

export const mediaContainerStyle = style({
  width: '100%',
  height: '240px',
  '@media': {
    [BREAKPOINT_CONDITIONS.tablet['@media']]: {
      width: '100%',
      height: '240px',
    },
    [BREAKPOINT_CONDITIONS.desktop['@media']]: {
      width: '960px',
      height: '540px',
    },
  },
})
