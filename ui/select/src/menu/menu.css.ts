import { style }                  from '@vanilla-extract/css'
import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { vars }                   from '@ui/theme'

export const menuBase = style({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  listStyleType: 'none',
  outline: 'none',
  zIndex: 9999,
})

export const menuListBase = style({
  padding: 0,
})

export const menuShape = style({
  borderRadius: vars.radii.mini,
  fontFamily: vars.fonts.primary,
  marginTop: 17,
})

export const menuAppearance = style({
  backgroundColor: vars.colors.white,
  boxShadow: vars.shadows.shark,
})

const menuListDynamicProperties = defineProperties({
  dynamicProperties: {
    width: true,
  },
})

export const menuListSprinkles = createRainbowSprinkles(menuListDynamicProperties)
export type MenuSprinkles = Parameters<typeof menuListSprinkles>[0]
