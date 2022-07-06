import styled               from '@emotion/styled'

import { BoxProps }         from './box.interface'
import { baseStyles }       from './box.styles'
import { appearanceStyles } from './box.styles'
import { shapeStyles }      from './box.styles'

const Box = styled.div<BoxProps>(baseStyles, shapeStyles, appearanceStyles)

export { Box }
