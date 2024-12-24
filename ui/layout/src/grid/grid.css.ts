import { style }                  from '@vanilla-extract/css'

import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { BREAKPOINT_CONDITIONS }  from '@ui/theme'
import { vars }                   from '@ui/theme'

export const baseStyles = style({
  display: 'grid',
})

const gridProperties = defineProperties({
  conditions: BREAKPOINT_CONDITIONS,
  defaultCondition: 'mobile',
  dynamicProperties: {
    gridAutoColumns: true,
    gridAutoRows: true,
  },
  staticProperties: {
    gap: vars.spaces,
  },
})

export const rainbowSprinkles = createRainbowSprinkles(gridProperties)
export type Sprinkles = Parameters<typeof rainbowSprinkles>[0]
