import type { BreakpointKey } from '@ui/theme'

import { BoxProps }           from '@atls-ui-parts/layout'

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

export type ResponsiveContainerCssProps = Sprinkles & {
  [K in SprinklesKey]?: SprinklesPropWithArray<K>
}

export type ResponsiveContainerProps = ResponsiveContainerCssProps & {
  style?: React.CSSProperties
  fill?: boolean
  passref?: React.MutableRefObject<HTMLDivElement | null>
  className?: string
  /**
   * @deprecated use passref to pass ref
   */
  ref?: React.MutableRefObject<HTMLDivElement | null>
  onClick?: BoxProps['onClick']
}
