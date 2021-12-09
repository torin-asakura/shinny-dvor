import { styleFn }             from 'styled-system'
import { switchProp }          from 'styled-tools'
import { prop }                from 'styled-tools'

import { getNormalSizeStyles } from './abstract'

const getShapeStyles = (theme): styleFn =>
  switchProp(prop('size', 'normal'), {
    normal: getNormalSizeStyles(theme),
  })

export { getShapeStyles }
