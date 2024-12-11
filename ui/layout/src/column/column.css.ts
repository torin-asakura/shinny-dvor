import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { BREAKPOINT_CONDITIONS }  from '@ui/theme'
import { vars }                   from '@ui/theme'

const responsiveProperties = defineProperties({
  conditions: BREAKPOINT_CONDITIONS,
  defaultCondition: 'mobile',
  dynamicProperties: {
    height: true,
    width: true,

    maxWidth: true,

    display: true,

    alignItems: true,
    justifyContent: true,
  },
})

export const rainbowSprinkles = createRainbowSprinkles(responsiveProperties)
export type Sprinkles = Parameters<typeof rainbowSprinkles>[0]
