import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars }   from '@ui/theme'

export const checkmarkBaseStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const checkmarkAppearanceStyles = recipe({
  base: checkmarkBaseStyles,
  variants: {
    checked: {
      true: {
        color: vars.colors.white,
      },
      false: {
        color: vars.colors.black,
      },
    },
  },
})
