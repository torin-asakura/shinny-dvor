import { style }                                    from '@vanilla-extract/css'
import { createRainbowSprinkles }                   from 'rainbow-sprinkles'

import { defineProperties } from 'rainbow-sprinkles'

export const arrowBase = style({
  transition: '.35s',
  cursor: 'pointer',
})

const arrowDynamicProperties = defineProperties({
  dynamicProperties: {
    transform: true,
  },
})

export const arrowSprinkles = createRainbowSprinkles(arrowDynamicProperties)
export type ArrowSprinkles = Parameters<typeof arrowSprinkles>[0]
