import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { BREAKPOINT_CONDITIONS }  from '@ui/theme'
import { vars }                   from '@ui/theme'

const responsiveProperties = defineProperties({
  conditions: BREAKPOINT_CONDITIONS,
  defaultCondition: 'mobile',
  dynamicProperties: {
    width: true,
    height: true,
    maxWidth: true,

    zIndex: true,
    position: true,

    marginTop: true,

    display: true,

    alignItems: true,
    justifyContent: true,
    flexWrap: true,

    backgroundColor: true,
  },
})

export const rainbowSprinkles = createRainbowSprinkles(responsiveProperties)
export type Sprinkles = Parameters<typeof rainbowSprinkles>[0]
