import { globalStyle } from '@vanilla-extract/css'

import { vars }        from '@ui/theme'

globalStyle('.bar-of-progress', {
  zIndex: 9999,
  height: '6px !important',
  backgroundColor: vars.colors.primaryBlue,
})
