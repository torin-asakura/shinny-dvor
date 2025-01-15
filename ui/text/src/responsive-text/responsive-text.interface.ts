import type { BreakpointKey } from '@ui/theme'

import type { Sprinkles }     from './responsive-text.css.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SprinklesResponseObject = Partial<Record<BreakpointKey, any>>

type SprinklesKey = keyof Sprinkles
type SprinklesElement<T extends SprinklesKey> = Sprinkles[T]

type SprinklesArrayElement<T extends SprinklesKey> = Exclude<
  SprinklesElement<T>,
  SprinklesResponseObject
>
export type SprinklesArray<T extends SprinklesKey> = Array<SprinklesArrayElement<T>>

type SprinklesPropWithArray<T extends SprinklesKey> = SprinklesArray<T> | SprinklesElement<T>

export type ResponsiveTextProps = Sprinkles & {
  [K in SprinklesKey]?: SprinklesPropWithArray<K>
}
