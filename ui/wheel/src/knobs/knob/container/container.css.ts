import { style }                  from '@vanilla-extract/css'
import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { BREAKPOINT_CONDITIONS }  from '@ui/theme'

export const baseContainerStyles = style({
  position: 'absolute',
  cursor: 'pointer',
})

const responsiveContainerProperties = defineProperties({
  conditions: BREAKPOINT_CONDITIONS,
  defaultCondition: 'mobile',
  dynamicProperties: {
    left: true,
    top: true,
  },
})

export const rainbowSprinkles = createRainbowSprinkles(responsiveContainerProperties)
export type Sprinkles = Parameters<typeof rainbowSprinkles>[0]
