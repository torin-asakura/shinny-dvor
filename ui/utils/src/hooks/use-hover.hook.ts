import type { HoverPropsType } from './use-hover.interface.js'
import type { UseHoverType }   from './use-hover.interface.js'

import { useState }            from 'react'

export const useHover: UseHoverType = () => {
  const [hover, setHover] = useState<boolean>(false)

  const hoverProps: HoverPropsType = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  }

  return [hover, hoverProps]
}
