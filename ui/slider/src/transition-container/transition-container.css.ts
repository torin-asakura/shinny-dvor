import { style } from '@vanilla-extract/css'
import {createRainbowSprinkles, defineProperties} from "rainbow-sprinkles";
import {vars} from "@ui/theme";

export const transitionContainerStyles = style({
  minWidth: 10,
  height: 10,
  borderRadius: vars.radii.big,
  cursor:'pointer',
  backgroundColor: vars.colors.gray,
  transition: '.3s',
})

const transitionContainerDynamicProperties = defineProperties({
  dynamicProperties: {
    minWidth: true,
    backgroundColor: true
  },
})

export const transitionContainerSprinkles = createRainbowSprinkles(transitionContainerDynamicProperties)
export type TransitionContainerSprinkles = Parameters<typeof transitionContainerSprinkles>[0]