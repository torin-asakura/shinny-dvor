import type { vars } from '@ui/theme'

const WHITE_COLOR_NAME = '$white'
const TRANSPARENT_COLOR_NAME = '$transparent'

type ReturnType = `$${keyof typeof vars.colors}`

export const getColorBackground = (step?: number, scrollY?: number): ReturnType => {
  switch (step) {
    case 0:
      if (Math.abs(scrollY || 0) > 100) {
        return WHITE_COLOR_NAME
      }
      return TRANSPARENT_COLOR_NAME

    case 1:
      return WHITE_COLOR_NAME
    case 2:
      return WHITE_COLOR_NAME
    case 3:
      return WHITE_COLOR_NAME
    case 4:
      return WHITE_COLOR_NAME
    default:
      return WHITE_COLOR_NAME
  }
}
