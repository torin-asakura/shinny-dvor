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
    gridAutoFlow: true,
    gridAutoColumns: true,
    gridAutoRows: true,

    gridTemplateColumns: true,
  },
  staticProperties: {
    width: vars.spaces,
    gap: vars.spaces,
  },
})

export const rainbowSprinkles = createRainbowSprinkles(gridProperties)
export type Sprinkles = Parameters<typeof rainbowSprinkles>[0]
