import type { MouseEventHandler } from 'react'

// import type { SetStateAction } from 'react'

export type HoverPropsType = {
  onMouseEnter: MouseEventHandler<HTMLDivElement>
  onMouseLeave: MouseEventHandler<HTMLDivElement>
}

export type UseHoverType = () => [hover: boolean, hoverProps: HoverPropsType]
