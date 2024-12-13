import type { BreakpointKey } from '@ui/theme'

import { Sprinkles }          from './responsive-container.css.js'

type SprinklesResponseObject = Partial<Record<BreakpointKey, any>>

type SprinklesKey = keyof Sprinkles
type SprinklesElement = Sprinkles[SprinklesKey]

type SprinklesArrayElement = Exclude<SprinklesElement, SprinklesResponseObject>
export type SprinklesArray = Array<SprinklesArrayElement>

type SprinklesPropWithArray = SprinklesArray | SprinklesElement

export type ResponsiveContainerProps = Sprinkles & {
  [K in SprinklesKey]?: SprinklesPropWithArray
}
