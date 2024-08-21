import type { HoverPropsType } from './use-hover.interface.js'
import type { UseHoverType }   from './use-hover.interface.js'

import { useState }            from 'react'

export const useHover: UseHoverType = () => {
  const [hover, setHover] = useState<boolean>(false)

  const handleMouseEnter = (): void => {
    setHover(true)
  }

  const handlerMouseLeave = (): void => {
    setHover(false)
  }

  const hoverProps: HoverPropsType = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handlerMouseLeave,
  }

  return [hover, hoverProps]
}
