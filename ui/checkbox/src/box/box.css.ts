import { style }  from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars }    from '@ui/theme'

export const baseStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: vars.radii.micro,
})

export const sizeVariants = {
  medium: style({
    width: '20px',
    height: '20px',
  }),
}

export const checkedVariants = {
  true: style({
    border: vars.borders.blue,
    backgroundColor: vars.colors.primaryBlue,
  }),
  false: style({
    border: vars.borders.outerspace,
    backgroundColor: vars.colors.white,
  }),
}

export const box = recipe({
  base: [baseStyle],
  variants: {
    size: sizeVariants,
    checked: checkedVariants,
  },
  defaultVariants: {
    size: 'medium',
    checked: false,
  },
})
