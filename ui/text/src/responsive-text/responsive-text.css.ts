import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { BREAKPOINT_CONDITIONS }  from '@ui/theme'
import { vars }                   from '@ui/theme'

const responsiveTextProperties = defineProperties({
  conditions: BREAKPOINT_CONDITIONS,
  defaultCondition: 'mobile',
  dynamicProperties: {
    whiteSpace: true,
    wordWrap: true,
    display: true,
    opacity: true,
    textAlign: true,
  },
  staticProperties: {
    color: vars.colors,
    fontWeight: vars.fontWeights,
    fontSize: vars.fontSizes,
    lineHeight: vars.lineHeights,
  },
})

export const rainbowSprinkles = createRainbowSprinkles(responsiveTextProperties)
export type Sprinkles = Parameters<typeof rainbowSprinkles>[0]
