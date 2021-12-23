import styled               from '@emotion/styled'

import { baseStyles }       from './box.styles'
import { appearanceStyles } from './box.styles'
import { shapeStyles }      from './box.styles'
import { BoxProps }         from './box.interface'

const Box = styled.div<BoxProps>(baseStyles, shapeStyles, appearanceStyles)

export { Box }
