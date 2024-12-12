import { createRainbowSprinkles } from 'rainbow-sprinkles'
import { defineProperties }       from 'rainbow-sprinkles'

import { BREAKPOINT_CONDITIONS }  from '@ui/theme'
import { vars }                   from '@ui/theme'

const responsiveContainerProperties = defineProperties({
  conditions: BREAKPOINT_CONDITIONS,
  defaultCondition: 'mobile',
  dynamicProperties: {
    width: true,
    height: true,
    maxHeight: true,
    minWidth: true,
    minHeight: true,
    maxWidth: true,

    zIndex: true,
    display: true,
    overflow: true,
    position: true,

    marginTop: true,
    padding: true,
    top: true,
    right: true,

    gap: true,
    flexWrap: true,
    justifyContent: true,
    alignItems: true,

    flexGrow: true,
    flexDirection: true,
    flexBasis: true,
    flexShrink: true,
  },
  staticProperties: {
    backgroundColor: vars.colors,
    borderRadius: vars.radii,
  },
})

export const rainbowSprinkles = createRainbowSprinkles(responsiveContainerProperties)
export type Sprinkles = Parameters<typeof rainbowSprinkles>[0]
