import { styleFn }             from 'styled-system'
import { switchProp }          from 'styled-tools'
import { prop }                from 'styled-tools'

import { getNormalSizeStyles } from './abstract'
import { getSmallSizeStyles }  from './abstract'
import { getGhostStyles }      from './abstract'
import { getLargeSizeStyles }  from './abstract'

const getShapeStyles = (theme): styleFn => {
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
