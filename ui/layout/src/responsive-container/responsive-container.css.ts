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
    flexDirection: true,
    zIndex: true,
    display: true,
    overflow: true,
    position: true,

    marginTop: true,
    padding: true,
    paddingTop: true,
    paddingRight: true,
    paddingBottom: true,
    paddingLeft: true,
    top: true,
    right: true,

    gap: true,
    flexWrap: true,
    justifyContent: true,
    alignItems: true,

    flexGrow: true,
    flexBasis: true,
    flexShrink: true,
    transition: true
  },
  staticProperties: {
    width: vars.spaces,
    maxWidth: vars.spaces,
    height: vars.spaces,

    backgroundColor: vars.colors,
    borderRadius: vars.radii,
    border: vars.borders,
    boxShadow: vars.shadows,
    gap: vars.spaces,
  },
  shorthands: {
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
})

export const rainbowSprinkles = createRainbowSprinkles(responsiveContainerProperties)
export type Sprinkles = Parameters<typeof rainbowSprinkles>[0]
