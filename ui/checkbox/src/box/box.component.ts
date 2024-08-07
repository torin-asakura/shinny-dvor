import styled               from '@emotion/styled'

import { BoxProps }         from './box.interface.js'
import { baseStyles }       from './box.styles.js'
import { appearanceStyles } from './box.styles.js'
import { shapeStyles }      from './box.styles.js'

const Box = styled.div<BoxProps>(baseStyles, shapeStyles, appearanceStyles)

export { Box }
