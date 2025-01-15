import type { UseAddonNavigationResult } from '@atls-ui-parts/carousel'
import type { ReactNode }                from 'react'
import type { JSX }                      from 'react'

export interface UseCarouselReturn {
  carousel: JSX.Element | ReactNode
  useControls?: () => UseAddonNavigationResult
}
