import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { BREAKPOINT_CONDITIONS }  from '@ui/theme'
import { vars }                   from '@ui/theme'

const iconProperties = defineProperties({
  conditions: BREAKPOINT_CONDITIONS,
  defaultCondition: 'mobile',
  dynamicProperties: {
    width: true,
    height: true,
  },
  staticProperties: {
    color: vars.colors,
    width: vars.spaces,
    height: vars.spaces,
  },
})

export const iconSprinkles = createRainbowSprinkles(iconProperties)
export type Sprinkles = Parameters<typeof iconSprinkles>[0]
