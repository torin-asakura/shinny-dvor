import type { BreakpointKey } from '@ui/theme'

import { Sprinkles }          from './responsive-container.css.js'

type SprinklesResponseObject = Partial<Record<BreakpointKey, any>>

type SprinklesKey = keyof Sprinkles
type SprinklesElement<T extends SprinklesKey> = Sprinkles[T]

type SprinklesArrayElement<T extends SprinklesKey> = Exclude<
  SprinklesElement<T>,
  SprinklesResponseObject
>
export type SprinklesArray<T extends SprinklesKey> = Array<SprinklesArrayElement<T>>

type SprinklesPropWithArray<T extends SprinklesKey> = SprinklesArray<T> | SprinklesElement<T>

export type ResponsiveContainerProps = Sprinkles & {
  [K in SprinklesKey]?: SprinklesPropWithArray<K>
} & {
  style?: React.CSSProperties
  fill?: boolean
  ref?: React.MutableRefObject<HTMLDivElement | null>
  className?: string
}
