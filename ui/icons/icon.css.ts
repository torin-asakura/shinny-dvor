import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { BREAKPOINT_CONDITIONS }  from '@ui/theme'

const iconProperties = defineProperties({
  conditions: BREAKPOINT_CONDITIONS,
  defaultCondition: 'mobile',
  dynamicProperties: {},
  staticProperties: {},
})

export const iconSprinkles = createRainbowSprinkles(iconProperties)
export type Sprinkles = Parameters<typeof iconSprinkles>[0]
