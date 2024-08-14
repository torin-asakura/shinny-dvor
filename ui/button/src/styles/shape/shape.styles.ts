import type { ThemeType }      from '@ui/theme'

import { styleFn }             from 'styled-system'
import { switchProp }          from 'styled-tools'
import { prop }                from 'styled-tools'

import { getNormalSizeStyles } from './abstract/index.js'
import { getSmallSizeStyles }  from './abstract/index.js'
import { getGhostStyles }      from './abstract/index.js'
import { getLargeSizeStyles }  from './abstract/index.js'

const getShapeStyles = (theme: ThemeType): styleFn => {
  const normalSizeStyles = getNormalSizeStyles(theme)
  const smallSizeStyles = getSmallSizeStyles(theme)
  const ghostStyles = getGhostStyles()
  const largeSizeStyles = getLargeSizeStyles(theme)

  return switchProp(prop('size', 'normal'), {
    normal: normalSizeStyles,
    small: smallSizeStyles,
    ghost: ghostStyles,
    large: largeSizeStyles,
  })
}

export { getShapeStyles }
