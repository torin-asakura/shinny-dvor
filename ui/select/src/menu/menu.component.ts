import styled                   from '@emotion/styled'

import { baseMenuStyles }       from './menu.styles.js'
import { shapeMenuStyles }      from './menu.styles.js'
import { appearanceMenuStyles } from './menu.styles.js'

const Menu = styled.div(baseMenuStyles, shapeMenuStyles, appearanceMenuStyles)

export { Menu }
