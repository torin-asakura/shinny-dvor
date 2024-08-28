import styled               from '@emotion/styled'

import { positionStyles }   from './label.styles.js'
import { appearanceStyles } from './label.styles.js'
import { shapeStyles }      from './label.styles.js'

const Label = styled.div(positionStyles, shapeStyles, appearanceStyles)

export { Label }
