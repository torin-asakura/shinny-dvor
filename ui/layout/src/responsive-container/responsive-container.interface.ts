import { BoxProps as BaseBoxProps } from '@atls-ui-parts/layout'

import { Sprinkles }                from './responsive-container.css.js'

export interface ResponsiveContainerProps
  extends Omit<Sprinkles, 'backgroundColor' | 'borderRadius'> {
  fill?: BaseBoxProps['fill']
  style?: BaseBoxProps['style']
  backgroundColor: Array<Sprinkles['backgroundColor']> | Sprinkles['backgroundColor']
  borderRadius: Array<Sprinkles['borderRadius']> | Sprinkles['borderRadius']
}
