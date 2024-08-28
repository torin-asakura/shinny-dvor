import type { MouseEventHandler } from 'react'

// import type { SetStateAction } from 'react'

export type HoverPropsType = {
  onMouseEnter: MouseEventHandler<HTMLButtonElement & HTMLDivElement>
  onMouseLeave: MouseEventHandler<HTMLButtonElement & HTMLDivElement>
}

export type UseHoverType = () => [hover: boolean, hoverProps: HoverPropsType]
